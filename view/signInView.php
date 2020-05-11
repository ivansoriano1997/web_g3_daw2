<?php

require_once(__DIR__ . "/../model/SignInModel.php");


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

  </head>



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




      <br><br><br><br><center>
      <form action="/signIn/addNewUser" method="post">
            <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" name="CorreuElectronic" placeholder="Correu electrònic">
              <label class="mdl-textfield__label"  for="sample1">Correu electrònic / usuari</label>
            </div><br>
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="password" name="Contrasenya" placeholder="Contrasenya">
              <label class="mdl-textfield__label" for="sample1">Contrasenya</label>
            </div><br>

            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" name="CarnetdeConduir" placeholder="Carnet de conduir">
              <label class="mdl-textfield__label" for="sample1">Carnet de conduir</label>
            </div><br>

            <!-- <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" name="MarcaYModelDeCotxe" placeholder="Marca i model de cotxe">
              <label class="mdl-textfield__label" for="sample1">Marca i model de cotxe</label>
            </div><br> -->

            <div class="mdl-textfield mdl-js-textfield">
              <select class="mdl-textfield__input" type="text" name="MarcaYModelDeCotxe">
                <option value="NULL">--Marca i model de cotxe--</option>

<?php

// $usuario = SignInModel::getAllCars();
$usuario=new signInModel();

$result =  $usuario->getAllCars();
while($row = $result->fetch_assoc()) {

$usuario=new signInModel();
//   ?>
//      <option value="<?=$row['id']?>"><?=$row['brand']?>:&nbsp;<?=$row['model']?></option>
//      <?php
}



?>
              </select>
            </div><br>

            <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
              Registre
            </button>

            <?php
// $usuario=new signInModel();
// echo $usuario->getAllCars();

              ?>
          </form>
    </center>


        </div>
      </main>
    </div>
  </body>
</html>
