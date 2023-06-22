<?php
include "RSServer.php";
//Clase Publica que contendra todos los metodos de negocio.
class servidor extends rs_server{

function funcion_promedio($parametros){
$nombre = $parametros[0];
$apellido = $parametros[1];
$dni = $parametros[2];
$materia=$parametros[3];
$notas=$parametros[4];
$promedio = array_sum($notas) / count($notas);
return 'Promedio:<br><br>Nombre: '.$nombre.'<br>Apellido: '.$apellido.'<br>DNI: '.$dni.'<br>Materia: '.$materia.'<br>el promedio de las notas es: '.$promedio;
}
function funcion_mayor($parametros){
    $nombre = $parametros[0];
    $apellido = $parametros[1];
    $dni = $parametros[2];
    $materia=$parametros[3];
    $notas=$parametros[4];
    $mayor = max($notas);
    return 'Nota más alta:<br><br>Nombre: '.$nombre.'<br>Apellido: '.$apellido.'<br>DNI: '.$dni.'<br>Materia: '.$materia.'<br>la nota mas alta es: '.$mayor;
    }
}
$oRS = new servidor();
$oRS->action();
?>

