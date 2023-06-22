<?php
$nombre = $_POST['valorNombre'];
$apellido = $_POST['valorApellido'];
$dni = $_POST['valorDni'];



echo "Nombre: ".$nombre."<br>Apellido: ".$apellido."<br>DNI: ".$dni;
$materias = $_POST['valorCheckbox'];
        foreach ($materias as $materia) { // recorrer el conjunto de checkboxes seleccionados
            echo "<br>Materia Seleccionada: " . $materia;
        }
$notas = $_POST['valorNotas'];
foreach ($notas as $nota) {
    echo "<br>Notas ". $nota;
}
$promedio = array_sum($notas) / count($notas);
echo '<br>el promedio de las notas es: '.$promedio.'<br>';
$nota_maxima = max($notas);
echo "La nota más alta es: " . $nota_maxima;


        

date_default_timezone_set('America/Argentina/Buenos_Aires');
$fech = date("l, j F Y - H:i:s");
echo "<br> los datos se cargaron: ". $fech;        


