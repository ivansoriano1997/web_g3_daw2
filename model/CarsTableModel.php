<?php
    require_once(__DIR__ . "/../core/BaseModel.php");
    require_once(__DIR__ . "/CarModel.php");

    class CarsTableModel extends BaseModel {
        private $Cars;

        public function __construct() {
            parent::__construct();
        }

        public function getCars() {
            return $this->Cars;
        }

        public function setCars($cars) {
            $this->Cars = $cars;
        }
    }
 ?>
