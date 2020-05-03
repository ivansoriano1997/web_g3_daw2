<?php
    require_once(__DIR__ . "/core/Request.php");
    require_once(__DIR__ . "/core/Router.php");
    require_once(__DIR__ . "/core/FrontController.php");

    // require_once(__DIR__ . "/controller/MapController.php");
    require_once(__DIR__ . "/controller/SignInController.php");
    require_once(__DIR__ . "/controller/LoginController.php");
    require_once(__DIR__ . "/controller/RouteController.php");

    $router = new Router(new Request);

    /*
    *Login
    */

    $router->get('/', function() {
      // SignInController::index();
              LoginController::index();
    });


    /*
    *Login Validation
    */
    $router->post('/login/validation', function() {
        LoginController::login();
    });



    /**
     * Route
     */
    $router->get('/route', function($request) {
        RouteController::index();
    });

    /**
     * Sign Up
     */
    $router->post('/signIn/addNewUser', function($request) {
        SignInController::addNewUser();
    });



    $router->get('/signIn', function($request) {
        SignInController::index();
    });



?>
