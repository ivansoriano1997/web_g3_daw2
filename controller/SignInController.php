<?php

require_once(__DIR__ . "/../core/BaseController.php");
require_once(__DIR__ . "/../model/SignInModel.php");

class SignInController extends BaseController {

  public function __construct() {
      parent::__construct();
  }

  public static function index() {
    parent::view("signIn");
  }

  public static function addNewUser(){
    if(isset($_POST["CorreuElectronic"]) && $_POST["CorreuElectronic"]!=""){
               //Creamos un usuario
               $usuario=new signInModel();
               $usuario->setCorreuElectronic($_POST["CorreuElectronic"]);
               $usuario->setCarnetdeConduir($_POST["CarnetdeConduir"]);
               $usuario->setMarcaYModelDeCotxe($_POST["MarcaYModelDeCotxe"]);
               $usuario->setPassword(md5($_POST["Contrasenya"]));
               $save = $usuario->addNewUser();
?>
               <script>
               if (<?=$save?>){
                   alert("Usuari enregistrat correctament!");
                   session_start();
                   $_SESSION["userCar"] = $usuario->getMarcaYModelDeCotxe(); 
                   location.href = "/route";
               }else{
                 alert("S'ha produït un error!!");
                 location.href = "https://app3arnauivan.000webhostapp.com";
           
               }
               </script>
<?php
          }else {
            ?>
            <script>
              alert("S'ha produït un error, si us plau ompli tots els camps! ");
              location.href = "https://app3arnauivan.000webhostapp.com";
            </script>
            <?php
          }
           //$this->redirect("Usuarios", "index");


  }


}

?>
