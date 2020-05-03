$(document).ready(function () {
    const _ALGOLIA_PLACES_AP = "a0889f2f9e36491bbb10b4007d511015";

    $("form#formPlanner").submit(function (event) {

        // Cancel·lo l'event per defecte del submit
        event.preventDefault();

        /* var origin = $("input[name='origin']").val().toString();
        var destination = $("input[name='destination']").val().toString();

        if (origin !== "" && destination !== "") {

            // Cerco les coordenades de la direcció d'origen
            $.ajax({
                url: "https://nominatim.openstreetmap.org/search?q=" + origin.replace(/ /g, "+") + "&format=json"
            }).done(function(coordenates) {
                if (coordenates.length > 0) {
                    $("input[name='originLatitude']").val(coordenates[0].lat);
                    $("input[name='originLongitude']").val(coordenates[0].lon);
                }
            }).fail(function () {
    
            });

            // Cerco les coordenades de la direcció de destí
            $.ajax({
                url: "https://nominatim.openstreetmap.org/search?q=" + destination.replace(/ /g, "+") + "&format=json"
            }).done(function(coordenates) {
                if (coordenates.length > 0) {
                    $("input[name='destinationLatitude']").val(coordenates[0].lat);
                    $("input[name='destinationLongitude']").val(coordenates[0].lon);
                }
            }).fail(function () {
    
            });
        } */
    });

    /* $("input[name='origin']").blur(function() {
        // Cerco les coordenades de la direcció d'origen
        $.ajax({
            url: "https://api.opencagedata.com/geocode/v1/json?q=" + encodeURI($(this).val()) + "&key=" + _OPENCAGE_GEOCODER_API_KEY + "&format=geojson",
            headers: {
                'Authorization': `Bearer `,
            }
        }).done(function(coordinates) {
            console.log(coordinates);
            if (coordinates.length > 0)
                $("input[name='originCoordinates']").val(coordinates.features.geometry.coordinates.join());
        }).fail(function () {

        });

    });

    $("input[name='destination']").blur(function() {

        // Cerco les coordenades de la direcció d'origen
        $.ajax({
            url: "https://api.opencagedata.com/geocode/v1/json?q=" + encodeURI($(this).val()) + "&key=" + _OPENCAGE_GEOCODER_API_KEY + "&format=geojson"
        }).done(function(coordinates) {
            console.log(coordinates);
            if (coordinates.length > 0)
                $("input[name='destinationCoordinates']").val(coordinates.features.geometry.coordinates.join());
        }).fail(function () {

        });
        
    }); */

    const fixedOriginOptions = {
        appId: 'plMUVQROAZ0X',
        apiKey: 'a7f143ae9966e023d58937fec1279d5b',
        container: $('input#originAddress')[0]
    };

    const fixedDestinationOptions = {
        appId: 'plMUVQROAZ0X',
        apiKey: 'a7f143ae9966e023d58937fec1279d5b',
        container: $('input#destinationAddress')[0]
    };

    const reconfigurableOptions = {
        aroundLatLngViaIP: true,
        useDeviceLocation: true
    }
    
    let placesOriginInstance = places(fixedOriginOptions).configure(reconfigurableOptions);
    let placesDestinationInstance = places(fixedDestinationOptions).configure(reconfigurableOptions);

    placesOriginInstance.on('change', function(event) {
    $('input[name="originLatitude"]').val(event.suggestion.latlng.lat);
    $('input[name="originLongitude"]').val(event.suggestion.latlng.lng);
    });

    placesDestinationInstance.on('change', function(event) {
    $('input[name="destinationLatitude"]').val(event.suggestion.latlng.lat);
    $('input[name="destinationLongitude"]').val(event.suggestion.latlng.lng);
    });

    placesOriginInstance.on('clear', function() {
    $('input[name="originLatitude"]').val('');
    $('input[name="originLongitude"]').val('');
    });

    placesDestinationInstance.on('clear', function() {
    $('input[name="destinationLatitude"]').val('');
    $('input[name="destinationLongitude"]').val('');
    });
});