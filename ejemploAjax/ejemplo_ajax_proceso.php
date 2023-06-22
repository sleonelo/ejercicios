<?php
include "RSServer.php";
//Clase Publica que contendra todos los metodos de negocio.
class servidor extends rs_server{
function funcion_servidor($parametros){
$dni = $parametros[0];
$nombre = $parametros[1];
$arreglo[0] = "primero";
$arreglo[1] = "segundo";
//return $arreglo;
return "LOS DATOS QUE LLEGARON AL SERVIDOR SON:\n".$dni." ///
".$nombre;
}
}
$oRS = new servidor();
$oRS->action();
?>