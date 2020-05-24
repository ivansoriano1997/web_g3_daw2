<?php 
    // Set dialog variables values
    if (!isset($dialogTitle))
        $dialogTitle = "Carregant!";

    if (!isset($dialogContent))
        $dialogContent = "Les dades estàn carregant. Si us plau espera fins que la càrrega hagi acabat.";

    // Import base dialog page and fill its content
    require_once(__DIR__ . "/../base/baseDialog.php"); 
?> 