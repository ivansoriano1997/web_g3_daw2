<?php require_once(__DIR__ . "/../core/SharedLayout.php"); ?>

<html>
    <center><body>
        <div id="planner">
            <input type="search" id="originAddress" class="form-control" placeholder="Adreça d'origen" required/>
            <input type="search" id="destinationAddress" class="form-control" placeholder="Adreça de destí" required/>

            <button id="plan">Planificar</button>

            <input type="hidden" id="originLatitude">
            <input type="hidden" id="originLongitude"/>
            <input type="hidden" id="destinationLatitude"/>
            <input type="hidden" id="destinationLongitude"/>
            <input type="hidden" id="carHighwayRange" value="<?=$route->getCar()->getCityRange()?>" />
            <input type="hidden" id="carCityRange" value="<?=$route->getCar()->getHighwayRange()?>" />
        </div>

        <script src="https://cdn.jsdelivr.net/npm/places.js@1.18.1"></script>
        <script src="view/js/route.js"></script>
    </body></center>
</html>
