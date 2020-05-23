<?php

// Funcions per al controlador frontal
function loadController($controllerName) {
    $controllerFullName = ucwords($controllerName) . 'Controller';
    $strFileController = 'controller/' . $controllerFullName . '.php';

    require_once($strFileController);
    return new $controllerFullName();
}

function loadAction($controllerObject, $action) {
    $controllerObject->$action();
}

function launchAction($controllerObject) {
    if (isset($_GET["action"]) && method_exists($controllerObject, $_GET["action"])) {
        loadAction($controllerObject, $_GET["action"]);
    }
}

/**
 * Càrrega de controladors i accions (segons URL)
 */
if (isset($_GET["controller"])) {
    $controller = loadController($_GET["controller"]);
    launchAction($controller);
}