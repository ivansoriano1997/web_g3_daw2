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

  if (isset($_POST["CorreuElectronic"])) {
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

    <script>
    if (parseInt(<?=$js->num_rows?>) == 0){
        alert("Usuari incorrecte!");
      location.href = "https://g3daw2.com";
    }else{
        alert("Usuari correcte!");

    location.href = "/route";
    }
    </script>
<?php
  }

  }


}

?>
