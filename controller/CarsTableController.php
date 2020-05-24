<?php
require_once(__DIR__ . "/../core/BaseController.php");
require_once(__DIR__ . "/../model/CarsTableModel.php");

class CarsTableController extends BaseController {
  public function __construct() {
      parent::__construct();
  }

  public static function index() {

    $carModel = new CarModel();
    $carsArray = $carModel->getAllCars();

    $carsTableModel = new CarsTableModel();
    $carsTableModel->setCars($carsArray);

    $carsTableArray = array("cars" => $carsTableModel);

    parent::view("carsTable", $carsTableArray);
  }
}
 ?>
