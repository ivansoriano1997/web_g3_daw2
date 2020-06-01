
<?php

require_once(__DIR__ . "/../core/BaseController.php");
require_once(__DIR__ . "/../model/LoginModel.php");

class LoginController extends BaseController {

  public function __construct() {
      parent::__construct();
  }

  public static function index() {
    parent::view("login");
  }

  public static function login(){

  if (isset($_POST["CorreuElectronic"]) || isset($_POST["Contrasenya"])) {
    $user=new LoginModel();
    $user->setCorreuElectronic($_POST["CorreuElectronic"]);
    $user->setPassword(md5($_POST["Contrasenya"]));
    $js = $user->loginValidation();

    if ($js->num_rows > 0) {

        $user2 = $js->fetch_assoc();

        session_start();
        $_SESSION["userCar"] = $user2["MarcaYModelDeCotxe"];
    }
?>
<!DOCTYPE html>
<html lang="cat">
<head>
<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">

<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
<link rel="stylesheet" href="../view/css/signup.css">


</head>
<body id="loginIMGV"> 
    <script>
    if (parseInt(<?=$js->num_rows?>) == 0){
      
      $('#dialag').html(loginEror("Error!", "Usuari incorrecte.", 1));
            $('.errosSignup').show();
            $('.errosSignup').css('z-index', '1');   

    }else{
          window.location = "/route";
    
    
  }

    </script>
<?php
  }

  }


}

?>





<script>
function loginEror(titol, mistage, n){
  if(n==1){
    return  '<html>'+
    '<head>'+
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.1/dialog-polyfill.min.css" integrity="sha256-qVjBFbunjrWQ4IikV5dkK1ziW9XKskisX1rUbCIJEhk=" crossorigin="anonymous" />'+
    '</head>'+
    '<body>'+
 
 '<dialog class="mdl-dialog errosSignup">'+

 '<h4 class="mdl-dialog__title">'+titol+'</h4>'+
 '<div class="mdl-dialog__content">'+
 '<p>'+mistage+'</p>'+
 '<div class="mdl-dialog__actions">'+
 '<a type="button" class="mdl-button" href="/">Acceptar</a>'+
 '</div>'+
 '</dialog>'+    
 
 '</body>'+
 '</html>';
  }

if(n==2){
  return  '<html>'+
    '<head>'+
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.1/dialog-polyfill.min.css" integrity="sha256-qVjBFbunjrWQ4IikV5dkK1ziW9XKskisX1rUbCIJEhk=" crossorigin="anonymous" />'+
    '</head>'+
    '<body>'+
 
 '<dialog class="mdl-dialog errosSignup">'+

 '<h4 class="mdl-dialog__title">'+titol+'</h4>'+
 '<div class="mdl-dialog__content">'+
 '<p>'+mistage+'</p>'+
 '<div class="mdl-dialog__actions">'+
 '<a type="button" class="mdl-button" href="/route">Acceptar</a>'+
 '</div>'+
 '</dialog>'+    
 
 '</body>'+
 '</html>';
}

}

</script>



<div id="dialag"></div>



  
</body>
</html>