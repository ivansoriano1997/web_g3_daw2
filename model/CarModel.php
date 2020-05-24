<?php

require_once(__DIR__ . "/../core/BaseModel.php");

class CarModel extends BaseModel {

    private $Id;
    private $Brand;
    private $Model;
    private $CityRange;
    private $HighwayRange;
    private $Efficiency;
    private $RapidCharge;

    public function __construct() {
        parent::__construct("car");
    }

    public function getId() {
        return $this->Id;
    }

    public function setId($Id) {
        $this->Id = $Id;
    }

    public function getModel() {
        return $this->Model;
    }

    public function setModel() {
        return $this->Model;
    }

    public function getBrand() {
        return $this->Brand;
    }

    public function setBrand($brand) {
        $this->Brand = $brand;
    }

    public function getCityRange() {
        return $this->CityRange;
    }

    public function setCityRange($cityRange) {
       $this->CityRange = $cityRange;
    }

    public function getHighwayRange() {
        return $this->HighwayRange;
    }

    public function setHighwayRange($highwayRange) {
        $this->HighwayRange = $highwayRange;
    }

    public function getEfficiency() {
        return $this->Efficiency;
    }

    public function setEfficiency($efficiency) {
        $this->Efficiency = $efficiency;
    }

    public function getRapidCharge() {
        return $this->$RapidCharge;
    }

    public function setRapidCharge($rapidCharge) {
        $this->RapidCharge = $rapidCharge;
    }

    public function getOne($Id) {
        $resultSet = $this->getById($Id);

        $this->setId($resultSet->Id);
        $this->setBrand($resultSet->Brand);
        $this->setModel($resultSet->Model);
        $this->setCityRange($resultSet->CityRange);
        $this->setHighwayRange($resultSet->HighwayRange);
        $this->setEfficiency($resultSet->Efficiency);
        $this->setRapidCharge($resultSet->RapidCharge);
        
        return $this;
    }
}
?>
