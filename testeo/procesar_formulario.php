<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") { // verificar si se envió el formulario
    if (isset($_POST["lenguajes"])) { // verificar si se seleccionaron checkboxes
        $lenguajes = $_POST["lenguajes"];
        foreach ($lenguajes as $lenguaje) { // recorrer el conjunto de checkboxes seleccionados
            echo "Has seleccionado " . $lenguaje . "<br>";
        }
    } else {
        echo "No has seleccionado ningún lenguaje de programación.";
    }
}
?>
