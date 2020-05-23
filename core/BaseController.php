<?php

class BaseController {

    public function __construct() {}
    
    public function view($view, $data = array()) {
        if (!empty($data)) {

            foreach ($data as $idAssoc => $value) {
                ${$idAssoc} = $value;
            }
        }

        require_once(__DIR__ . "/../view/" . $view . "View.php");
    }
}

?>