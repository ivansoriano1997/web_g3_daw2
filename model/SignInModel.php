<?php
// echo "string";
require_once(__DIR__ . "/../core/BaseModel.php");

class SignInModel extends BaseModel {

    private $CorreuElectronic;
    private $CarnetdeConduir;
    private $MarcaYModelDeCotxe;
    private $Password;

    public function __construct() {
        parent::__construct();
    }

    public function getMarcaYModelDeCotxe() {
        return $this->MarcaYModelDeCotxe;
    }

    public function setCorreuElectronic($c){
      $this->CorreuElectronic=$c;
    }

    public function setCarnetdeConduir($c){
      $this->CarnetdeConduir=$c;
    }

    public function setMarcaYModelDeCotxe($c){
      $this->MarcaYModelDeCotxe=$c;
    }

    public function setPassword($c){
      $this->Password=$c;
    }


    public function addNewUser() {

      $query="INSERT INTO usuaris (CorreuElectronic, Contrasenya, CarnetdeConduir, MarcaYModelDeCotxe)
      VALUES ('".$this->CorreuElectronic."',
               '".$this->Password."',
               '".$this->CarnetdeConduir."',
               '".$this->MarcaYModelDeCotxe."');";
    $db = $this->getConnection();
    return $db->query($query);
    }

    public function getAllCars() {
      $query="SELECT id, brand, model FROM car ORDER BY id ASC";
      $db = $this->getConnection();
      return $db->query($query);

      }
}





?>
