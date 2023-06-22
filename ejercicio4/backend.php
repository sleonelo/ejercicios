<?php
$nombre = $_POST['name'];
$apellido = $_POST["lastname"];
$dni = $_POST["idnum"];

echo "nombre $nombre, apellido $apellido, dni $dni";

$materias = $_POST['materias'];
        foreach ($materias as $materia) { // recorrer el conjunto de checkboxes seleccionados
            echo "<br>Materias que te anotaste " . $materia;
        }
$turnos = $_POST['turnos'];
        foreach ($turnos as $turno) {
            echo "<br>Turno que te anotaste ". $turno;
        }

date_default_timezone_set('America/Argentina/Buenos_Aires');
$fech = date("l, j F Y - H:i:s");
echo "<br> los datos se cargaron: ". $fech;        
?>