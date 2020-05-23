<?php require_once(__DIR__ . "/base/baseLayout.php"); ?>

<html>
    <head>
        <link rel="stylesheet" href="view/css/route.css"> 
    </head>  
    <body>   
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
         <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">Planificador de rutes</span>
            </header>
            <main class="mdl-layout__content">
                <div class="page-content"> 
                    <center>  
                        <form id="planner">   
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" type="search" id="inputOriginAddress" required> 
                                <label class="mdl-textfield__label" for="inputOriginAddress">Adreça d'origen</label>
                                <span class="mdl-textfield__error">Has d'introduïr l'adreça d'origen</span>
                                <span class="mdl-tooltip mdl-tooltip--large" data-mdl-for="inputOriginAddress">Introdueix l'adreça on vols que iniciï la ruta</span>
                            </div> 
                            </br>
                            </br>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" type="search" id="inputDestinationAddress" required/>
                                <label class="mdl-textfield__label" for="inputDestinationAddress">Adreça de destí</label>
                                <span class="mdl-textfield__error">Has d'introduïr l'adreça de destí</span>
                                <span class="mdl-tooltip mdl-tooltip--large" data-mdl-for="inputDestinationAddress">Introdueix l'adreça on vols que finalitzi la ruta</span>
                            </div>
                            </br>
                            </br>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" type="text" id="inputCurrentRange" pattern="-?[0-9]*(\.[0-9]+)?.{1,3}" maxlength="3" required/>
                                <label class="mdl-textfield__label" for="inputCurrentRange">Quilòmetres d'autonomia</label>
                                <span class="mdl-textfield__error">Pots introduïr fins a 999 quilòmetres d'autonomia</span>
                                <span class="mdl-tooltip mdl-tooltip--large" data-mdl-for="inputCurrentRange">Introdueix el quilòmetres que et queden d'autonomia</span>
                            </div>
                            </br>
                            </br>
                            <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Planificar</button>

                            <input type="hidden" id="inputOriginLatitude">
                            <input type="hidden" id="inputOriginLongitude"/>
                            <input type="hidden" id="inputDestinationLatitude"/>
                            <input type="hidden" id="inputDestinationLongitude"/>
                            <input type="hidden" id="inputCarHighwayRange" value="<?=$route->getCar()->getCityRange()?>" />
                            <input type="hidden" id="inputCarCityRange" value="<?=$route->getCar()->getHighwayRange()?>" />
                        </form>
                    </div>
                </center>
                <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" style="display:none;">
                    <i class="material-icons">home</i>
                </button>
            </main>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/places.js@1.18.1"></script>
        <script src="view/js/route.js"></script>
    </body>
</html>
