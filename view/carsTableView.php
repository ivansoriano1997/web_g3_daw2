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

    <title>Vehicles suportats</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">

    <link rel="stylesheet" href="view/css/cars.css">

    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>


  </head>

  <body>

    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">

      <div class="mdl-layout__drawer">

        <span class="mdl-layout__title">g3d2</span>

        <nav class="mdl-navigation">


          <a class="mdl-navigation__link" href="/">Inici</a>

          <a class="mdl-navigation__link" href="/cars">Cotxes suportats</a>

          <a class="mdl-navigation__link" href="/route">Planificador de rutes</a>

 

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
      <th>Autonomia en ciutat</th>
      <th>Autonomia en carretera</th>
      <th>Eficiència</th>
      <th>Càrrega ràpida</th>

    </tr>
  </thead>
  <tbody>
    <?php
      foreach ($cars->getCars() as $car) {
    ?>
      <tr>
        <td class="mdl-data-table__cell--non-numeric"><?=$car->getBrand()?></td>
        <td><?=$car->getModel()?></td>
        <td><?=$car->getCityRange()?> km</td>
        <td><?=$car->getHighwayRange()?> km</td>
        <td><?=$car->getEfficiency()?> kWh</td>
        <td><?=$car->getRapidCharge() ? 'Sí' : 'No'?></td>
    </tr>

    <?php
      }
    ?>

</tbody>
</table>
</center>

<?php require_once(__DIR__ . "/base/baseFooter.php"); ?>
  </body>
</html>
