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
        $car = $carModel->getOne($_SESSION["userCar"]);
        $carModel->setCityRange($car["CityRange"]);
        $carModel->setHighwayRange($car["HighwayRange"]);

        $routeModel = new RouteModel();
        $routeModel->setCar($carModel);

        $routeArray = array("route" => $routeModel);
    }

    parent::view("route", $routeArray);
  }
}

?>
