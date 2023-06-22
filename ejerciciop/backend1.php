<?php
$nombre = $_POST['valorNombre'];
$apellido = $_POST['valorApellido'];
$dni = $_POST['valorDni'];

echo $nombre;


echo "Nombre: ".$nombre."<br>Apellido: ".$apellido."<br>DNI: ".$dni;
$materias = $_POST['valorCheckbox'];
        foreach ($materias as $materia) { // recorrer el conjunto de checkboxes seleccionados
            echo "<br>Materia Seleccionada: " . $materia;
        }
$notas = $_POST['valorNotas'];
foreach ($notas as $nota) {
    echo "<br>Notas ". $nota;
}
$nota_maxima = max($notas);
echo "La nota más alta es: " . $nota_maxima;


        

