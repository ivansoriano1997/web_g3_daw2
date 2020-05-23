<?php

require('GlovalFunctions.php');

function afegirUsuari() {
  $CorreuElectronic=$_POST['CorreuElectronic']?$_POST['CorreuElectronic']:'';
  $Contrasenya=$_POST['Contrasenya']?$_POST['Contrasenya']:'';
  $CarnetdeConduir=$_POST['CarnetdeConduir']?$_POST['CarnetdeConduir']:'';
  $MarcaYModelDeCotxe=$_POST['MarcaYModelDeCotxe']?$_POST['MarcaYModelDeCotxe']:'';

  $Contrasenya=md5($Contrasenya);

  // Create connection
  $conn = mysqli_connect(server, user, pass, DB);

  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

  $sql = "INSERT INTO usuaris (CorreuElectronic, Contrasenya, CarnetdeConduir, MarcaYModelDeCotxe)
  VALUES ('$CorreuElectronic', '$Contrasenya', '$CarnetdeConduir', '$MarcaYModelDeCotxe' )";

  if (mysqli_query($conn, $sql)) {
    echo "L'usuari s'ha registrat correctament!!";

  } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  mysqli_close($conn);





}

function login() {
$CorreuElectronic = isset($_POST['CorreuElectronic'])?$_POST['CorreuElectronic']:'';
$Contrasenya = isset($_POST['Contrasenya'])?md5($_POST['Contrasenya']):'';

$mysqli = new mysqli(server, user, pass, DB);

$correctUser;//*usuari existen
$correcPass;//*contrasenya correcte

/* comprueba la conexión */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

$sql ="SELECT CorreuElectronic, Contrasenya  FROM usuaris where CorreuElectronic='$CorreuElectronic' ";

$result = $mysqli->query($sql);

if ($result->num_rows==0) {
  echo "Usuari incorrecte!";

}else{

    $row = $result->fetch_assoc();

         $correctUser=$row["CorreuElectronic"];
         $correcPass=$row["Contrasenya"];

         if ($CorreuElectronic==$correctUser && $Contrasenya==$correcPass) {
              $mysqli->close();
              echo "OKAY";
            }else{
              $mysqli->close();
              echo "Error contrasenya incorrecte!";

              }
      }
    $mysqli->close();
}


switch ($_POST['fun']) {
case 'afegirUsuari':
afegirUsuari();
break;
case 'login':
login();
break;

}

?>
