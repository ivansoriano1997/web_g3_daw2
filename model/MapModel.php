<?php
    require_once(__DIR__ . "/../core/BaseModel.php");
    
    class MapModel extends BaseModel {
        
        private $user;
    
        public function __construct() {
            parent::__construct();
        }
    
        public function getUser() {
            return $this->user;
        }
    }
?>