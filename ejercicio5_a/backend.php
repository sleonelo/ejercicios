<?php
$numero1 = $_POST['valor1'];
$numero2 = $_POST['valor2'];
$operaciones = $_POST['valor3'];

switch ($operaciones) {
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


