<!-- Cree una página con código php, la idea es que esa página debe tener una
función que reciba como parámetro una frase (cualquiera y definida por usted) y
diga el tamaño de la misma, busque una palabra dentro de esa frase y además
muestre una subfrase de la frase original. Para ello vea las funciones strlen()
(para el tamaño de un string), strpos() (para buscar una palabra dentro de una
cadena) y substr() (para mostrar una subcadena). -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio nro 1</title>
</head>

<body>

    <h1>Ingrese una frase</h1>
    <form method="POST">
        <label for="input1">Ingrese una frase: </label>
        <input type="text" name="frase">
        <br>
        <label for="input2">Ingrese una palabra que quiera buscar dentro de la frase: </label>
        <input type="text" name="frase1">
        <br>
        <label for="input2">Ingrese un numero para armar la subfrase: </label>
        <input type="text" name="numero1">
        <br>
        <input type="submit" name="submit" value="Enviar">
    </form>
    <br>
    <?php
    function contador($frase, $palabra, $numero)
    {
        $contadas = strlen($frase);
        $buscador = strpos($frase, $palabra);
        $subfrase = substr($frase,$buscador,$numero);
        echo "$frase <br>";
        echo "cantidad de caracteres que tiene la frase son: $contadas<br>";
        echo "la palabra '$palabra' se encuentra en la posicion $buscador<br>";
        echo "la subfrase es $subfrase";
    }
    if (isset($_POST["submit"])) {
        $frase = $_POST["frase"];
        $palabra = $_POST["frase1"];
        $numero = $_POST["numero1"];
    }
    contador($frase, $palabra, $numero);
    ?>

</body>

</html>