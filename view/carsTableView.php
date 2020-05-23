<?php

require_once(__DIR__ . "/../model/CarModel.php");


?>
<!DOCTYPE html>

<html lang="ca" dir="ltr">

  <head>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--<meta http-equiv="Content-Type" content="text/html"/>-->

    <!--<base href="https://www.electromaps.com/">-->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!-- <script src="controlador.js" charset="utf-8"></script> -->

    <title>Registre usuaris</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">

    <link rel="stylesheet" href="view/css/cars.css">

    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>


  </head>

  <body>

    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">

      <div class="mdl-layout__drawer">

        <span class="mdl-layout__title">g3daw2</span>

        <nav class="mdl-navigation">

          <a class="mdl-navigation__link" href="/">Login</a>

          <a class="mdl-navigation__link" href="#">World.</a>

          <a class="mdl-navigation__link" href="#">How</a>

          <a class="mdl-navigation__link" href="#">Are</a>

          <a class="mdl-navigation__link" href="#">You?</a>

        </nav>

      </div>

      <main class="mdl-layout__content contanerVehiclesSuportats imgTaulaCars">

        <div>


          <br><br><br><br><center>
<h2 class="h2taula">Vehicles suportats</h2>
<img class="imgTaula" src="img/3684723.jpg" alt="">
            <table class="mdl-data-table mdl-js-data-table">
  <thead>
    <tr>

      <th class="mdl-data-table__cell--non-numeric">Marca</th>
      <th>Model</th>
      <th>Gamma de bateries</th>
      <th>Eficiència</th>
      <th>Càrrega ràpida</th>

    </tr>
  </thead>
  <tbody>
    <?php
    $cars = new CarModel();
    $result = $cars->getAll();
    while ($row = $result->fetch_assoc()) {
    ?>
      <tr>

        <td class="mdl-data-table__cell--non-numeric"><?=$row['Brand']?></td>
        <td><?=$row['Model']?></td>
        <td><?=$row['battery_range']?></td>
        <td><?=$row['Efficiency']?> kWh</td>
        <td><?= $row['RapidCharge']==1?'Sí':'No';?></td>


      </td>
    </tr>

    <?php
  }
  ?>

</tbody>
</table>
</center>


<br>
<!DOCTYPE html>
<html lang="ca" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>APP3 - Arnau i Ivan</title>

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>    
    </head>
    <footer class="mdl-mega-footer">
  <div class="mdl-mega-footer__middle-section">

    <div class="mdl-mega-footer__drop-down-section">
      <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
      <h1 class="mdl-mega-footer__heading">Features</h1>
      <ul class="mdl-mega-footer__link-list">
        <li><a href="#">About</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Updates</a></li>
      </ul>
    </div>

    <div class="mdl-mega-footer__drop-down-section">
      <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
      <h1 class="mdl-mega-footer__heading">Persones implicades</h1>
      <ul class="mdl-mega-footer__link-list">
        <li><a href="https://www.linkedin.com/in/ivansorianoarabia/">Ivan</a></li>
        <li><a href="https://www.linkedin.com/in/arnau-carrasco/">Arnau</a></li>
        
      </ul>
    </div>

    <div class="mdl-mega-footer__drop-down-section">
      <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
      <h1 class="mdl-mega-footer__heading">Tecnologies</h1>
      <ul class="mdl-mega-footer__link-list">
        <li><a href="freepik.es">Freepik</a></li>
        <li><a href="getmdl.io">MATERIAL DESIGN LITE</a></li>
        <li><a href="code.visualstudio.com">Visual Studio Code</a></li>
        <li><a href="atom.io">Atom</a></li>
        <li><a href="github.com">GitHub</a></li>
      </ul>
    </div>

    <div class="mdl-mega-footer__drop-down-section">
      <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
      <h1 class="mdl-mega-footer__heading">FAQ</h1>
      <ul class="mdl-mega-footer__link-list">
        <li><a href="#">Questions</a></li>
        <li><a href="#">Answers</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </div>

  </div>
 </footer>
</html>



        </div>

      </main>

    </div>

  </body>

</html>
