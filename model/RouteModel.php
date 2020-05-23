<?php

require_once(__DIR__ . "/../core/BaseModel.php");
require_once(__DIR__ . "/CarModel.php");

class RouteModel extends BaseModel {

    private $Car;

    public function __construct() {
        parent::__construct();
    }

    public function setCar($car) {
        $this->Car = $car;
    }

    public function getCar() {
        return $this->Car;
    }
}
?>
