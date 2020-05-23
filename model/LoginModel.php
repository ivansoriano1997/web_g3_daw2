<?php

require_once(__DIR__ . "/../core/BaseModel.php");

class LoginModel extends BaseModel {

    private $CorreuElectronic;
    private $Password;
    private $MarcaYModelDeCotxe;

    public function __construct() {
        parent::__construct();
    }

    public function getMarcaYModelDeCotxe() {
        return $this->MarcaYModelDeCotxe;
    }
    public function setCorreuElectronic($c){
      $this->CorreuElectronic=$c;
    }

    public function setPassword($c){
      $this->Password=$c;
    }


    public function loginValidation() {


    $query="SELECT CorreuElectronic, Contrasenya, MarcaYModelDeCotxe FROM usuaris where CorreuElectronic='".$this->CorreuElectronic."' AND
              Contrasenya='".$this->Password."';";

    $db = $this->getConnection();
    $save = $db->query($query);
    // if ($save->num_rows==0) {
    // $js = 0;
    // }else {
    $js = $save;
    // }

    return $js;

    }
}
?>
