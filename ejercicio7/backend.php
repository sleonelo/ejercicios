<?php
$nombre1 = $_POST['valor1'];
$nombre2 = $_POST['valor2'];
$nombre3 = $_POST['valor3'];
$nombre4 = $_POST['valor4'];
$nombre5 = $_POST['valor5'];
$listanombres = [];
array_push($listanombres, $nombre1, $nombre2, $nombre3, $nombre4, $nombre5);
sort($listanombres);

// Mostrar los nombres ordenados
foreach ($listanombres as $nombre) {
    echo $nombre . "<br>";
}