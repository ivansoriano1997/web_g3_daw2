<?php

require_once(__DIR__ . "/../core/BaseController.php");
require_once(__DIR__ . "/../model/MapModel.php");

class MapController extends BaseController {

  public function __construct() {
      parent::__construct();
  }

  public function index() { 
    $this->view("map");
  }

}

?>
