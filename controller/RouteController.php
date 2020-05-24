<?php

require_once(__DIR__ . "/../core/BaseController.php");
require_once(__DIR__ . "/../model/RouteModel.php");

class RouteController extends BaseController {

  public function __construct() {
      parent::__construct();
  }

  public static function index() { 
    $routeArray = array();

    session_start();
    
    if (isset($_SESSION["userCar"]) && $_SESSION["userCar"] != "") {
        $carModel = new CarModel();
        $carModel->getOne($_SESSION["userCar"]);

        $routeModel = new RouteModel();
        $routeModel->setCar($carModel);

        $routeArray = array("route" => $routeModel);
    } else {
        header("Location: /");
    }

    parent::view("route", $routeArray);
  }
}

?>
