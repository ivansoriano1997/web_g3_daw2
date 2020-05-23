$(document).ready(function () {
    const _ALGOLIA_PLACES_APP_ID = "plMUVQROAZ0X";
    const _ALGOLIA_PLACES_API_KEY = "a7f143ae9966e023d58937fec1279d5b";
    const _OCM_API_KEY = "03e49d72-93b5-4327-998c-51f6017fbfbb";
    const _ORS_API_KEY = "5b3ce3597851110001cf62485591cef3f97b4b9bba2cb810085b2769";
 
    const fixedOriginOptions = {
        appId: _ALGOLIA_PLACES_APP_ID,
        apiKey: _ALGOLIA_PLACES_API_KEY,
        container: $("input#inputOriginAddress")[0]
    };

    const fixedDestinationOptions = {
        appId: _ALGOLIA_PLACES_APP_ID,
        apiKey: _ALGOLIA_PLACES_API_KEY,
        container: $("input#inputDestinationAddress")[0]
    };

    const reconfigurableOptions = {
        aroundLatLngViaIP: true,
        useDeviceLocation: true,
        language: "ca"
    }
    
    let placesOriginInstance = places(fixedOriginOptions).configure(reconfigurableOptions);
    let placesDestinationInstance = places(fixedDestinationOptions).configure(reconfigurableOptions);

    placesOriginInstance.on('change', function(event) {
        $("input#inputOriginLatitude").val(event.suggestion.latlng.lat);
        $("input#inputOriginLongitude").val(event.suggestion.latlng.lng);
    });

    placesDestinationInstance.on('change', function(event) {
        $("input#inputDestinationLatitude").val(event.suggestion.latlng.lat);
        $("input#inputDestinationLongitude").val(event.suggestion.latlng.lng);
    });

    placesOriginInstance.on('clear', function() {
        $("input#inputOriginLatitude").val("");
        $("input#inputOriginLongitude").val("");
    });

    placesDestinationInstance.on('clear', function() {
        $("input#inputDestinationLatitude").val("");
        $("input#inputDestinationLongitude").val("");
    });

    $("form#planner").submit(function(event) {
        event.preventDefault();

        $(this).hide();

        $("div#details").show();
        $("button.mdl-button--fab").show();
        showStations();
    });

    $("button.mdl-button--fab").click(function() {
        window.location.reload();
    })

    async function getRoute(inputOriginLatitude, inputOriginLongitude, inputDestinationLatitude, inputDestinationLongitude)  {
        // orsApiAddress: ORS API address. Has all the params that are needed to get the route details.
        // orsResponseObject: fetch response's Object containing all the route details.
        let orsApiAddress = "";
        let orsResponseObject = {};
        
        orsApiAddress = "https://api.openrouteservice.org/directions" + 
                    "?api_key=" + _ORS_API_KEY + 
                    "&coordinates=" + encodeURI(inputOriginLongitude + "," + inputOriginLatitude + "|" + inputDestinationLongitude + "," +  inputDestinationLatitude) + 
                    "&profile=driving-car" + 
                    "&preference=recommended" +
                    "&format=json" +
                    "&units=km" + 
                    "&language=es" + 
                    "&extra_info=waytype" +
                    "&geometry=true" + 
                    "&geometry_format=geojson" + 
                    "&geometry_simplify=false" +
                    "&instructions=false" + 
                    "&roundabout_exits=false" + 
                    "&attributes=percentage" + 
                    "&maneuvers=true&optimized=true";

        // Do API call        
        orsResponseObject = await fetch(orsApiAddress)

        // If the API has returned something, get the stations from the object returned.
        if (orsResponseObject.ok) {
            return await orsResponseObject.json();
        } else {
            console.log("Error at getting route details!");
        } 
    }

    async function getStations(inputOriginLatitude, inputOriginLongitude, inputDestinationLatitude, inputDestinationLongitude) {
        // routeObject: route details.
        // routeDistance: route distance.
        // routeHasHighway: whether the route has highway or not.   
        // routeStops: stops that the car needs to do to charge its batteries.    
        let routeObject = {}, routeHasHighway = false, routeDistance = 0, routeStops = 0;
        routeObject = await getRoute(inputOriginLatitude, inputOriginLongitude, inputDestinationLatitude, inputDestinationLongitude); 
        routeObject = routeObject.routes[0];
        routeHasHighway = routeObject.extras.waytypes.summary.findIndex(wayType => wayType.value === 1 || wayType.value === 2) > 0;
        routeDistance = routeObject.summary.distance; // 20% more km are added to route (the inputOriginal distance doesn't consider the deviations).

        // carRange: user car's range. If the route has highways or not, get highway range or city range.
        let carRange = routeHasHighway ? parseInt($("input#inputCarCityRange").val()): parseInt($("input#inputCarHighwayRange").val());
        let currentRange = parseInt($("input#inputCurrentRange").val());

        if (currentRange < carRange)
            carRange = carRange - currentRange;

        routeStops = routeDistance >= carRange ? (Math.ceil(((routeDistance * 1.20)/ carRange) * 1.40)) : 0; // 40% more stops are added to route (to show more stations in large routes where it's difficult to find one).
        
        // stationsObject: stations details.
        // nextStationCoordinates: the coordinates where the next stations should be.
        // nextStationCoordinatesIndex: routeObject coordinates array's index. This index specifies the position of the array that has the next station's coordinates.
        let stationsObject = {route: {distance: routeDistance, range: carRange, stops: routeStops}, stations: []}, nextStationCoordinates = [], nextStationCoordinatesIndex = 0;

        // ocmApiAddress: OCM API address. Has all the params that are needed to get the stations of this route.
        // ocmResponseObject: fetch response's Object containing all the stations.
        let ocmApiAddress = "", ocmResponseObject = {};

        if ((routeDistance * 1.20) > carRange) {
            toogleStationsLoading();

            for(var stop = 0; stop < routeStops; stop++)  {
                nextStationCoordinatesIndex = Math.floor((routeObject.geometry.coordinates.length / routeStops) * (stop + 1));
                nextStationCoordinates = (nextStationCoordinatesIndex < routeObject.geometry.coordinates.length ? routeObject.geometry.coordinates[nextStationCoordinatesIndex] : (routeObject.geometry.coordinates[routeObject.geometry.coordinates.length - 1]));

                if (nextStationCoordinates.length > 0) {
                    ocmApiAddress = "https://api.openchargemap.io/v3/poi?key=" + _OCM_API_KEY + 
                            "&output=json" +
                            "&distanceunit=km" + 
                            "&maxresults=5" + 
                            "&compact=true" + 
                            "&longitude=" + nextStationCoordinates[0] + 
                            "&latitude=" + nextStationCoordinates[1] + 
                            "&distance=" + (carRange / 1.5);    // As the distance is radial, half of car range is needed.

                    // Do API call        
                    ocmResponseObject = await fetch(ocmApiAddress)

                    // If the API has returned something, get the stations from the object returned.
                    if (ocmResponseObject.ok) {
                        stationsObject.stations.push(await ocmResponseObject.json());
                    } else {
                        console.log("Error at getting the stations!");
                    } 
                }
            }

            toogleStationsLoading();
        }
        
        return stationsObject;
    }

    // Show Google Maps Link to get navigation details
    function showGoogleMapsLink() {
        // routeCoordinates (Array): add and get all the route's coordinates.
        // address: Google Maps Link with all the route's coordinates.
        let routeCoordinates = [], address = "https://www.google.com/maps/dir/";
        
        // Add the inputOrigin's coordinates to routeCoordinates array
        routeCoordinates.push($("input#inputOriginLatitude").val().toString() + "," + $("input#inputOriginLongitude").val().toString());

        // Add stations' coordinates* to routeCoordinates array. 
        // *Get stations' coordinates from the value of the selected option of each select of stations.
        $("div#stationsSelects select").each(function() { routeCoordinates.push($(this).children("option:selected").data("coordinates")); });

        // Add inputDestination's coordinates to routeCoordinates array.
        routeCoordinates.push($("input#inputDestinationLatitude").val().toString() + "," + $("input#inputDestinationLongitude").val().toString());

        // Generate link with all the coordinates (add all the coordinates in a string separated by '/')
        address = address.concat(routeCoordinates.join("/"));

        // Create an 'a' element or modify it (in case that exists), with all the coordinates.
        if ($("div#stations").children("a#googleMapsLink").length === 0)
            $("div#stations").append("<a id='googleMapsLink' target='_blank' href='" + address + "'>Veure indicacions</a>");
        else
            $("div#stations a#googleMapsLink").attr("href",  address);
    }

    function toogleStationsLoading() {
        if ($("div#stations p#stationsLoading").length === 0)
            $("form#planner").after("<div id='stations'><p id='stationsLoading'>Obtenint les estacions. Depenent de la distancia de la ruta, el procès tardarà més temps o menys...</p>");
        else
            $("div#stations p#stationsLoading").hide();
    }

    async function showStations() {
        // stationsObject: stations details.
        // stationsArray: array multidimensional with stations of each stop.
        // stationsSelect: select with the stations.
        let stationsObject = {}, stationsArray = [], stationsSelect = "";
        stationsObject = await getStations($("input#inputOriginLatitude").val(), $("input#inputOriginLongitude").val(), $("input#inputDestinationLatitude").val(), $("input#inputDestinationLongitude").val());
        stationsArray = stationsObject.stations !== null ? stationsObject.stations : [];
		
        // divStationsSelect: 'div' that contains all the select of all the stations.
        let divStationsSelect = "";
		
		if ($("div#stations").length === 0)
			$("form#planner").after("<div id='stations' />")

        $("div#stations").append("<div id='stationsHeader'>" + 
                                "<h1>Ruta</h1>" +
                                "<p>Inici: " + placesOriginInstance.getVal() + "</p>" +
                                "<p>Destí: " + placesDestinationInstance.getVal() + "</p>" +
                                "<p>Distància - Sense desviacions: " + stationsObject.route.distance.toFixed(2) + " - Amb desviacions (Mitjana estimada): " + (stationsObject.route.distance.toFixed(2) * 1.20) + "</p>" +
                                "<p>Autonomia: " + stationsObject.route.range + "</p>" + 
                                "<p>Parades: " + Math.ceil(stationsObject.route.stops) + "</p>");

        if (typeof stationsArray !== "undefined" && stationsArray !== null && stationsArray.length > 0) {
            divStationsSelect = $("<div id='stationsSelects' />");

            $.each(stationsArray, function (stationNumber, station) {
                stationsSelect = $("<select id='stationsSelect" + (stationNumber + 1) + "' name='stationsSelect" + (stationNumber + 1) + "' />");
                stationsSelect.on("change", showOpenChargeMap);
                stationsSelect.on("change", showGoogleMapsLink);

                $.each(station, function (stationDetailsNumber, stationObject) {
                    stationsSelect.append($("<option />", {
                        "value": stationObject.ID,
                        "data-coordinates": stationObject.AddressInfo.Latitude + "," + stationObject.AddressInfo.Longitude,
                        "text": stationObject.AddressInfo.Title
                    }));
                });

                divStationsSelect.append(stationsSelect);
                $("div#stations").append(divStationsSelect);
            });
			
			showOpenChargeMap();
        	showGoogleMapsLink();
        } else {
            $("div#stations").append("<p>No es necessari realitzar cap recàrrega</p>");
        }
    }

    function showOpenChargeMap() {
        let selectedSelect = this;

        if (!$(this).is("select"))
            selectedSelect = $("form#planner select").first()[0];

        let src = "https://map.openchargemap.io/?mode=embedded&latitude=" + $('option:selected', selectedSelect).data("coordinates").split(",")[0] + "&longitude=" + $('option:selected', selectedSelect).data("coordinates").split(",")[1];

        if ($("div#stations iframe").length === 0)
            $("div#stations").append($("<iframe />", {
                "src": src,
                "width": 800,
                "height": 600
            }));
        else
            $("div#stations iframe").attr("src", src);
    }
});