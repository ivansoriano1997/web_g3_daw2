<?php


?>
<!DOCTYPE html>

<html lang="ca" dir="ltr">

  <head>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <link rel="stylesheet" href="view/css/signup.css">



    <title>Login</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">


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

      <main class="mdl-layout__content loginImage">

        <div>


                <center>
                        <form action="/login/validation" method="post" class="divRL">
                          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text" name="CorreuElectronic" id="CorreuElectronic" placeholder="Correu electrònic / usuari">
                            <label class="mdl-textfield__label" for="sample1">Correu electrònic / usuari</label>

                          </div><br>
                          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="password" name="Contrasenya" id="Contrasenya" placeholder="Contrasenya">
                            <label class="mdl-textfield__label" for="sample1">Contrasenya</label>
                          </div><br>
                          <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                            Login
                          </button>

                          <br><br><a href="/signup">Registre</a>
                        </form>
                  </center>





        </div>

      </main>

    </div>

  </body>

</html>
