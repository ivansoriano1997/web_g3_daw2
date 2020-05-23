<?php

require_once(__DIR__ . "/../core/BaseModel.php");

class CarModel extends BaseModel {

    private $ID;
    private $CityRange;
    private $HighwayRange;

    public function __construct() {
        parent::__construct();
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

    public function getOne($ID) {
        $query="SELECT battery_range As CityRange, battery_range as HighwayRange FROM car where id = '$ID'";
    $db = $this->getConnection();
    $get = $db->query($query);
        $get2 = $get->fetch_assoc();
        return $get2;
    }

    public function getAll() {
      $query="SELECT * FROM car ORDER BY id ASC";
      $db = $this->getConnection();
      return $db->query($query);

      }
}
?>
