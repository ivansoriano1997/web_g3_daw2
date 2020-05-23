<?php
session_start();
if(isset($_SESSION["login"])){
 ?>


 <!DOCTYPE html>
 <html lang="ca" dir="ltr">
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <!--<meta http-equiv="Content-Type" content="text/html"/>-->
     <!--<base href="https://www.electromaps.com/">-->

     <title>Login</title>
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
     <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
     <link rel="stylesheet" href="css/index.css">
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
     <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
     <script src="js/index.js"></script>
   </head>

 <?php
     // Inclueixo els fitxers necessaris

     /**
      * Controlador frontal
      */
     require_once(__DIR__ . "/core/FrontController.php");

     /**
      * Controlador del planificador de ruta
      */
      require_once(__DIR__  . "/controller/PlannerController.php");
 ?>

   <body>




     <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
       <div class="mdl-layout__drawer">
         <span class="mdl-layout__title">Material Design Lite</span>
         <nav class="mdl-navigation">
           <a class="mdl-navigation__link" href="#">Hello</a>
           <a class="mdl-navigation__link" href="#">World.</a>
           <a class="mdl-navigation__link" href="#">How</a>
           <a class="mdl-navigation__link" href="#">Are</a>
           <a class="mdl-navigation__link" href="#">You?</a>
         </nav>
       </div>
       <main class="mdl-layout__content">
         <div>


              <!-- Your content goes here -->      <!-- Simple Textfield -->
             <br><br><br><br><center>






                 <!-- <iframe id="map" src="https://www.electromaps.com/mapa" allow='geolocation'>
                   <p>Your browser does not support iframes.</p>
                 </iframe> -->

                 iframe src="https://map.openchargemap.io/?mode=embedded" allow="geolocation" frameborder="0" width="100%" height="500px"></iframe>
                 - PlaceToPlug ---
                 <iframe width="800" height="480" src="https://embed.placetoplug.com/map/demo-map-config-id" frameborder="1"></iframe>
                 --- PlugShare --
                 <iframe src='https://www.plugshare.com/widget2.html?plugs=1,2,3,4,5,6,42,13,7,8,9,10,11,12,14,15,16,17' width='800' height='600' allow='geolocation'></iframe> -->

  <!--Apartat del planificador de ruta -->
 <?php
   // Instancio el controlador que gestiona el planificador de ruta
   $plannerController = new PlannerController();

   // Executo el mètode que recupera la vista
   $plannerController->index();
 ?>
  <!--Apartat del planificador de ruta -->

                 <form action="#">
                   <div class="mdl-textfield mdl-js-textfield">
                     <input class="mdl-textfield__input" type="text" id="sample1">
                     <label class="mdl-textfield__label" for="sample1">Correu electrònic / Nom d’usuari</label>

                   </div><br>
                   <div class="mdl-textfield mdl-js-textfield">
                     <input class="mdl-textfield__input" type="text" id="sample1">
                     <label class="mdl-textfield__label" for="sample1">Contrasenya</label>
                   </div><br>
                   <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                     Login
                   </button>

                 </form>
           </center>

           <!-- Colored raised button -->


           <br><br><br><br><center>    <form action="#">
                 <div class="mdl-textfield mdl-js-textfield">
                   <input class="mdl-textfield__input" type="text" id="sample1">
                   <label class="mdl-textfield__label" for="sample1">Correu electrònic</label>
                 </div><br>
                 <div class="mdl-textfield mdl-js-textfield">
                   <input class="mdl-textfield__input" type="text" id="sample1">
                   <label class="mdl-textfield__label" for="sample1">Contrasenya</label>
                 </div><br>

                 <div class="mdl-textfield mdl-js-textfield">
                   <input class="mdl-textfield__input" type="text" id="sample1">
                   <label class="mdl-textfield__label" for="sample1">Carnet de conduir</label>
                 </div><br>

                 <div class="mdl-textfield mdl-js-textfield">
                   <input class="mdl-textfield__input" type="text" id="sample1">
                   <label class="mdl-textfield__label" for="sample1">Marca i model de cotxe</label>
                 </div><br>





                 <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                   Registre
                 </button>

               </form>
         </center>

               <script src="js/maps.js"></script>
         </div>
       </main>
     </div>
   </body>
 </html>


<?php
}else {
?>
<script>
alert('No estàs loginat!!!');
window.location="login.php";
</script>
<?php
}

 ?>
