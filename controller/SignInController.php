<?php

require_once(__DIR__ . "/../core/BaseController.php");
require_once(__DIR__ . "/../model/SignInModel.php");

define("_IDANALYZER_API_KEY", "elqAIUDBQ4FzQASrZx0k8PYZbcIfxy02");

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
               $usuario->setCarnetdeConduir($_POST["drivingLicenseNumber"] . $_POST["drivingLicenseLetter"]);
               $usuario->setMarcaYModelDeCotxe($_POST["MarcaYModelDeCotxe"]);
               $usuario->setPassword(md5($_POST["Contrasenya"]));
               $save = $usuario->addNewUser();

               if ($save){
                  session_start();
                   $_SESSION["userCar"] = $usuario->getMarcaYModelDeCotxe();		  
                   echo true;
               }else{
                 
                echo false;

               }

           //$this->redirect("Usuarios", "index");


  }


}
}
?>
