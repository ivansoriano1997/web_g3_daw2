<?php




    require_once(__DIR__ . "/core/Request.php");
    require_once(__DIR__ . "/core/Router.php");
    require_once(__DIR__ . "/core/FrontController.php");

    require_once(__DIR__ . "/controller/SignInController.php");
    require_once(__DIR__ . "/controller/LoginController.php");
    require_once(__DIR__ . "/controller/RouteController.php");
    require_once(__DIR__ . "/controller/CarsTableController.php");


    $router = new Router(new Request);

    /*
    *Login
    */
    $router->get('/', function() {
      // SignInController::index();
              LoginController::index();
    });

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
  	$router->get('/signup', function($request) {
          SignInController::index();
      });


    $router->post("/singup/newuser", function($request) {
        SignInController::addNewUser();
    });

    /**
    * carsTable
    */
    $router->get("/carsTable", function($request) {
        CarsTableController::index();
    });

?>
