<html>
    <head>
        <link rel="stylesheet" href="view/css/route.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/getmdl-select@2.0.1/getmdl-select.min.css" integrity="sha256-/uITMCYKvqTkeEX6Pz4AJjTpeV2FLqwOt+ZuW73YkeI=" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/getmdl-select@2.0.1/getmdl-select.min.js" integrity="sha256-TSN0VaHOm98UdTMnVqrxc3lgeddDA1kUIJRN8cc2wGI=" crossorigin="anonymous"></script>        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>  
    <body> 
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
            <?php require_once(__DIR__ . "/base/baseDrawer.php"); ?>

            <main class="mdl-layout__content">
               <div class="page-content">
                    <form id="planner">   
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="search" id="inputOriginAddress" required> 
                            <label class="mdl-textfield__label" for="inputOriginAddress">Adreça d'origen</label>
                            <span class="mdl-textfield__error">Has d'introduïr l'adreça d'origen</span>
                            <span class="mdl-tooltip mdl-tooltip--large" data-mdl-for="inputOriginAddress">Introdueix l'adreça on vols que iniciï la ruta</span>
                        </div> 
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="search" id="inputDestinationAddress" required/>
                            <label class="mdl-textfield__label" for="inputDestinationAddress">Adreça de destí</label>
                            <span class="mdl-textfield__error">Has d'introduïr l'adreça de destí</span>
                            <span class="mdl-tooltip mdl-tooltip--large" data-mdl-for="inputDestinationAddress">Introdueix l'adreça on vols que finalitzi la ruta</span>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text" id="inputCurrentRange" pattern="\d{1,3}" maxlength="3" required/>
                            <label class="mdl-textfield__label" for="inputCurrentRange">Quilòmetres d'autonomia</label>
                            <span class="mdl-textfield__error">Pots introduïr fins a 999 quilòmetres d'autonomia</span>
                            <span class="mdl-tooltip mdl-tooltip--large" data-mdl-for="inputCurrentRange">
                                Introdueix el quilòmetres que et queden d'autonomia. </br>
                                Si poses més quilòmetres dels que té el cotxe, s'agafarà l'autonomia total del cotxe
                            </span>
                        </div>

                        <center>
                            <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Planificar</button>
                        </center>

                        <input type="hidden" id="inputOriginLatitude">
                        <input type="hidden" id="inputOriginLongitude"/> 
                        <input type="hidden" id="inputDestinationLatitude"/>
                        <input type="hidden" id="inputDestinationLongitude"/>
                        <input type="hidden" id="inputCarCityRange" value="<?=$route->getCar()->getCityRange()?>" />
                        <input type="hidden" id="inputCarHighwayRange" value="<?=$route->getCar()->getHighwayRange()?>" />
                    </form>

                    <?php
                        $dialogTitle = "Carregant les estacions!";
                        $dialogContent = "Depenent de la distància de la ruta, el sistema pot tardar força temps a obtenir les estacions. Si us plau, espera!";
                    ?>
                </div>
            </main>

            <?php
                require_once(__DIR__ . "/dialog/loadingDialog.php"); 
                require_once(__DIR__ . "/base/baseFooter.php"); 
            ?>
        </div>

        <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" style="display:none;">
            <i class="material-icons">home</i>
        </button>
 
        <script src="https://cdn.jsdelivr.net/npm/places.js@1.18.1"></script>
        <script src="view/js/route.js"></script>
        <script src="view/base/js/baseDialog.js"></script>
        <script src="view/dialog/js/loadingDialog.js"></script>
    </body>
</html>
