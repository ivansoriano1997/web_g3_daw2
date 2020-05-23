<?php
require_once(__DIR__ . "/../core/BaseController.php");

class CarsTableController extends BaseController {
  public function __construct() {
      parent::__construct();
  }

  public static function index() {
    parent::view("carsTable");
  }
}
 ?>
