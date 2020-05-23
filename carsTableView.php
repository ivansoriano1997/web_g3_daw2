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

    <link rel="stylesheet" href="css/index.css">

    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

    <style media="screen">
      .imgtest{
        /* background: url(); */
        background: url('img/3684723.jpg') center / cover;
        background-repeat: no-repeat;
        margin: 24px 0;
      }

      h2{
        color: #2c727c;

      }
    </style>

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

      <main class="mdl-layout__content contanerVehiclesSuportats imgtest">

        <div>


          <br><br><br><br><center>
<h2 class="h2VehiclesSuportats">Vehicles suportats</h2>
            <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
  <thead>
    <tr>

      <th class="mdl-data-table__cell--non-numeric">Marca</th>
      <th>Model test</th>
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

        <td class="mdl-data-table__cell--non-numeric"><?=$row['brand']?></td>
        <td><?=$row['model']?></td>
        <td><?=$row['battery_range']?></td>
        <td><?=$row['efficiency']?> kWh</td>
        <td><?= $row['rapid_charge']==1?'Sí':'No';?></td>


      </td>
    </tr>

    <?php
  }
  ?>

</tbody>
</table>
</center>


<br>
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
      <h1 class="mdl-mega-footer__heading">Details</h1>
      <ul class="mdl-mega-footer__link-list">
        <li><a href="#">Specs</a></li>
        <li><a href="#">Tools</a></li>
        <li><a href="#">Resources</a></li>
      </ul>
    </div>

    <div class="mdl-mega-footer__drop-down-section">
      <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
      <h1 class="mdl-mega-footer__heading">Technology</h1>
      <ul class="mdl-mega-footer__link-list">
        <li><a href="#">How it works</a></li>
        <li><a href="#">Patterns</a></li>
        <li><a href="#">Usage</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contracts</a></li>
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

  <div class="mdl-mega-footer__bottom-section">
    <div class="mdl-logo">Title</div>
    <ul class="mdl-mega-footer__link-list">
      <li><a href="#">Help</a></li>
      <li><a href="#">Privacy & Terms</a></li>
    </ul>
  </div>

 </footer>

        </div>

      </main>

    </div>

  </body>

</html>
