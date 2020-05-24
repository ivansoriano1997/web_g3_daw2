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
        let currentRange = (parseInt($("input#inputCurrentRange").val()) < carRange) ? parseInt($("input#inputCurrentRange").val()) : 0;

        routeStops = routeDistance >= carRange ? (Math.ceil(((routeDistance * 1.20) / carRange) * 1.40)) : 0; // 40% more stops are added to route (to show more stations in large routes where it's difficult to find one).
        console.log(routeStops);


        // If the current range is below than the carRange value, then we need to add another stop the route. If it's half of the value, we add another one.
        if (currentRange < carRange)
            routeStops++;

        // stationsObject: stations details.
        // nextStationCoordinates: the coordinates where the next stations should be.
        // nextStationCoordinatesIndex: routeObject coordinates array's index. This index specifies the position of the array that has the next station's coordinates.
        let stationsObject = {route: {origin: placesOriginInstance.getVal(), destination: placesDestinationInstance.getVal(), distance: routeDistance, initialRange: currentRange, fullRange: carRange, stops: routeStops}, stations: []}, 
        nextStationCoordinates = [], nextStationCoordinatesIndex = 0;

        // ocmApiAddress: OCM API address. Has all the params that are needed to get the stations of this route.
        // ocmResponseObject: fetch response's Object containing all the stations.
        let ocmApiAddress = "", ocmResponseObject = {};

        if ((routeDistance * 1.20) > currentRange) {
            toogleStationsLoading();

            for(var stop = 0; stop < routeStops; stop++)  {
                nextStationCoordinatesIndex = Math.floor((routeObject.geometry.coordinates.length / routeStops) * (stop + 1));

                if (stop === 0 && (currentRange < carRange)) {
                    nextStationCoordinatesIndex -= (routeObject.geometry.coordinates.length / (routeStops * 1.5)) * (stop + 1);
                    nextStationCoordinatesIndex = Math.floor(nextStationCoordinatesIndex);
                }

                nextStationCoordinates = (nextStationCoordinatesIndex < routeObject.geometry.coordinates.length ? routeObject.geometry.coordinates[nextStationCoordinatesIndex] : (routeObject.geometry.coordinates[routeObject.geometry.coordinates.length - 1]));

                if (nextStationCoordinates.length > 0) {
                    ocmApiAddress = "https://api.openchargemap.io/v3/poi?key=" + _OCM_API_KEY + 
                            "&output=json" +
                            "&distanceunit=km" + 
                            "&maxresults=5" + 
                            "&compact=true" + 
                            "&longitude=" + nextStationCoordinates[0] + 
                            "&latitude=" + nextStationCoordinates[1] + 
                            "&distance=" + ((stop === 0 ? ((currentRange < carRange) ? currentRange : carRange) : carRange) / 1.5);    // As the distance is radial, half of car range is needed.

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
        let routeCoordinates = [], googleMapsAddress = "https://www.google.com/maps/dir/";

        let chipNavigation = "";
        let chipNavigationAnchor = "";
        
        // Add the inputOrigin's coordinates to routeCoordinates array
        routeCoordinates.push($("input#inputOriginLatitude").val().toString() + "," + $("input#inputOriginLongitude").val().toString());

        // Add stations' coordinates* to routeCoordinates array. 
        // *Get stations' coordinates from the value of the selected option of each select of stations.
        $("div#stations div#divStationsList ul li.selected").each(function() { routeCoordinates.push($(this).data("val")); });

        // Add inputDestination's coordinates to rousteCoordinates array.
        routeCoordinates.push($("input#inputDestinationLatitude").val().toString() + "," + $("input#inputDestinationLongitude").val().toString());

        // Generate link with all the coordinates (add all the coordinates in a string separated by '/')
        googleMapsAddress = googleMapsAddress.concat(routeCoordinates.join("/"));

        // Create an 'a' element or modify it (in case that exists), with all the coordinates.
        if ($("div#stations").find("a#googleMapsLink").length === 0) {
            chipNavigation = $("<span/>", { class: "mdl-chip mdl-chip--contact"});

            chipNavigation.append($("<span/>", { 
                class: "mdl-chip__contact mdl-color--teal mdl-color-text--white material-icons",
                text: "map"
            }));

            chipNavigationAnchor = $("<a/>", {
                id: "googleMapsLink",
                href: googleMapsAddress,
                target: "_blank",
                text: "Iniciar navegació"
            });

            chipNavigation.append(($("<span/>", { 
                class: "mdl-chip__text",
                html: chipNavigationAnchor
            })));

            $("div#stations aside").append(chipNavigation);
        } else {
            $("div#stations a#googleMapsLink").attr("href",  googleMapsAddress);
        }
    }

    function showOpenChargeMap() {
        let mapSrc = "https://map.openchargemap.io/?mode=embedded&latitude=" + $(this).data("val").split(",")[0] + "&longitude=" + $(this).data("val").split(",")[1];

        if ($("div#stations div#map iframe").length === 0) {
            $("div#stations div#map").append($("<iframe />", { 
                "src": mapSrc,
                "height": 600
            }));
            $("div#stations div#map").addClass("background-hidden");
        } else {
            $("div#stations div#map iframe").attr("src", mapSrc);
        }
    }

    function toogleStationsLoading() {
        if (!$("dialog").is(":visible")) {
            $("dialog")[0].showModal();
        }
        else {
            $("dialog")[0].close();
            $("button.mdl-button--fab").show();
        }
    }

    function createStationsList(stationsObject) {
        let stationsArray = stationsObject.stations !== null ? stationsObject.stations : [];

        // divStationsSelect: 'div' that contains all the select of all the stations.
        let divStationList = "";

        let divStations = "", ulStations = "", liStation;

        if (typeof stationsArray !== "undefined" && stationsArray !== null && stationsArray.length > 0) {
            divStationList = $("<div />", {
                id: "divStationsList"
            });

            $.each(stationsArray, function (stationsListNumber, stations) {
                divStations = $("<div />", { class: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-heigh" });

                divStations.append($("<input />", {
                    class: "mdl-textfield__input",
                    value: "",
                    id: "station" + (stationsListNumber + 1),
                    readonly: ""
                }));
    
                divStations.append($("<input />", {
                    value: "",
                    type: "hidden",
                    name: "station" + (stationsListNumber + 1)
                }));

                divStations.append($("<i />", {
                    class: "mdl-icon-toggle__label material-icons",
                    text: "keyboard_arrow_down"
                }));

                divStations.append($("<label />", {
                    class: "mdl-textfield__label",
                    for: "station" + (stationsListNumber + 1),
                    text: (stationsListNumber + 1) + "ª parada (fins a " + ((stationsListNumber === 0) ? stationsObject.route.initialRange : stationsObject.route.fullRange) + " km)"
                }));

                ulStations = $("<ul />", {
                    class: "mdl-menu mdl-menu--bottom-left mdl-js-menu",
                    for: "station" + (stationsListNumber + 1)
                });

                $.each(stations, function (stationNumber, stationObject) {
                    liStation = $("<li/>", {
                        class: "mdl-menu__item" + ((stationNumber === 0) ? " selected" : ""),
                        "data-val": stationObject.AddressInfo.Latitude + "," + stationObject.AddressInfo.Longitude,
                        text: stationObject.AddressInfo.Title
                    });

                    liStation.click(showOpenChargeMap);

                    ulStations.append(liStation);
                });

                divStations.append(ulStations);

                divStationList.append(divStations);
            });

            divStationList.find("ul").last().find("li").click(showGoogleMapsLink);
        }

        return divStationList;
    }

    async function showStations() {
        // stationsObject: stations details.
        let stationsObject = await getStations($("input#inputOriginLatitude").val(), $("input#inputOriginLongitude").val(), $("input#inputDestinationLatitude").val(), $("input#inputDestinationLongitude").val());
                
        let aside = "", listRouteDetails = "", liStopsDetails = "", spanStopDetails = "";

		if ($("div#stations").length === 0)
			$("form#planner").after("<div id='stations' />")

        aside = $("<aside />");
        listRouteDetails = $("<ul class='mdl-list' id='routeDetails'>" + 
                                    "<li class='mdl-list__item'>" +
                                        "<span class='mdl-list__item-primary-content'>" +
                                            "<i class='material-icons mdl-list__item-icon'>place</i>" + 
                                            "<b>Inici:</b>" + stationsObject.route.origin +
                                        "</span>" +
                                    "</li>" +
                                    "<li class='mdl-list__item'>" +
                                        "<span class='mdl-list__item-primary-content'>" +
                                            "<i class='material-icons mdl-list__item-icon'>place</i>" + 
                                            "<b>Destí:</b>" + stationsObject.route.destination +
                                        "</span>" +
                                    "</li>" +
                                    "<li class='mdl-list__item'>" +
                                        "<span class='mdl-list__item-primary-content'>" +
                                            "<i class='material-icons mdl-list__item-icon'>map</i>" + 
                                            "<b>Distància:</b>" +
                                            "<ul>" + 
                                                "<li><i>Sense desviacions</i>: " +  stationsObject.route.distance.toFixed(2) + "</li>" +
                                                "<li><i>Amb desviacions</i>: " + (stationsObject.route.distance * 1.20).toFixed(2) + "</li>" +
                                            "</ul>" +
                                        "</span>" +
                                    "</li>" +
                                    "<li class='mdl-list__item'>" +
                                        "<span class='mdl-list__item-primary-content'>" +
                                            "<i class='material-icons mdl-list__item-icon'>directions_car</i>" + 
                                            "<b>Autonomia:</b>" +
                                            "<ul>" + 
                                                "<li><i>Al iniciar la ruta</i>: " +  stationsObject.route.initialRange + " km</li>" +
                                                "<li><i>A partir de la 1ª parada</i>: " + stationsObject.route.fullRange + " km</li>" +
                                            "</ul>" +
                                        "</span>" +
                                    "</li>");
    
        liStopsDetails = $("<li/>", { class: "mdl-list__item", id: "stopsDetails" });
        spanStopDetails = $("<span />", { class: "mdl-list__item-primary-content" });
        spanStopDetails.append($("<i />", { class: "material-icons mdl-list__item-icon", text: "power"}));
        spanStopDetails.append($("<b />", { text: "Paradades:"} ));                         

        if (stationsObject.route.stops > 0)
            spanStopDetails.append(createStationsList(stationsObject));
        else 
            spanStopDetails.append("No és necessari carregar el cotxe");

        spanStopDetails.append($("</span>"));

        liStopsDetails.append(spanStopDetails);
        liStopsDetails.append($("</li>" )); 

        listRouteDetails.append(liStopsDetails);
        listRouteDetails.append($("</ul>"));
    
        $("div#stations").append(aside.append(listRouteDetails));

        if (stationsObject.route.stops > 0)
            getmdlSelect.init("div#stations div#divStationsList div.getmdl-select");

        $("div#stations").append($("<div/>", { id: "map"}));
    }
});
