<?php
$numero1 = $_POST['valorCaja1'];
$numero2 = $_POST['valorCaja2'];
$operacion = $_POST['valorCaja3'];

// echo $numero1;
// echo $numero2;
// echo $operacion;

switch ($operacion) {
    case 'suma':
       echo $numero1 + $numero2;
        break;
    case 'resta':
        echo $numero1 - $numero2;
        break;
    case 'multiplicacion':
        echo $numero1 * $numero2;
        break;
    case 'division':
        echo $numero1 / $numero2;
        break;
    
}
