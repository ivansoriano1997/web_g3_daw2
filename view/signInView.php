<?php require_once(__DIR__ . "/../model/SignInModel.php"); ?>

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
    <link rel="stylesheet" href="view/css/signup.css">
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/getmdl-select@2.0.1/getmdl-select.min.css" integrity="sha256-/uITMCYKvqTkeEX6Pz4AJjTpeV2FLqwOt+ZuW73YkeI=" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/getmdl-select@2.0.1/getmdl-select.min.js" integrity="sha256-TSN0VaHOm98UdTMnVqrxc3lgeddDA1kUIJRN8cc2wGI=" crossorigin="anonymous"></script>        
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

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
      <main class="mdl-layout__content loginImage">
    <div id="dialag"></div>

        <div>
 

      <center>

      <form class="divRL">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" name="CorreuElectronic">
              <label class="mdl-textfield__label"  for="CorreuElectronic">Correu electrònic / usuari</label>
            </div><br>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="password" name="Contrasenya">
              <label class="mdl-textfield__label" for="Contrasenya">Contrasenya</label>
            </div><br>

      
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="divDrivingLicenseNumber">
              <input class="mdl-textfield__input" type="text" name="drivingLicenseNumber" id="inputDrivingLicenseNumber" pattern="\d{8}" maxlength="8"> 
              <label class="mdl-textfield__label" for="drivingLicenseNumber">Número del carnet de conduir</label>
              <span class="mdl-textfield__error">Has d'introduïr un número de 8 dígits</span>
              <span class="mdl-tooltip mdl-tooltip--large" data-mdl-for="inputDrivingLicenseNumber">Introdueix tan sols en número del teu carnet de conduïr.</br>La lletra apareixerà en un camp al costat d'aquest</span>
            </div>
  

            <div class="mdl-textfield mdl-js-textfield w-25" id="divDrivingLicenseLetter">
              <input class="mdl-textfield__input" type="text" name="drivingLicenseLetter" id="inputDrivingLicenseLetter" readonly>
              <span class="mdl-tooltip mdl-tooltip--large" data-mdl-for="inputDrivingLicenseLetter">Lletra corresponent al número introduït</span>
            </div>
            <br>

            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height">
              <input type="text" value="" class="mdl-textfield__input" id="MarcaYModelDeCotxe" readonly>
              <input type="hidden" value="" name="MarcaYModelDeCotxe">
              <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
              <label for="MarcaYModelDeCotxe" class="mdl-textfield__label">Marca i model de cotxe</label>
              <ul for="MarcaYModelDeCotxe" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                  <?php
                    foreach ($cars->getCars() as $car) {
                  ?>
                  <li class="mdl-menu__item" data-val="<?=$car->getId()?>"><?=$car->getBrand()?>:&nbsp;<?=$car->getModel()?></li>
                  <?php
                    }
                  ?>
              </select>
            </div><br>

            <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onclick="signupRedy();">
              Registre
            </button>
            <br><br><a href="/">Login</a>
            
          </form>
    </center>



        </div>
      </main>
    </div>
    <?php require_once(__DIR__ . "/dialog/noDrivingLicenseDialog.php"); ?>
    <input type="hidden" id="dialogAccepted" value="false">

    <script src="view/js/signup.js"></script>
    <script src="view/base/js/baseDialog.js"></script>
    <script src="view/js/signupValidation.js"></script>

  </body>
</html>
