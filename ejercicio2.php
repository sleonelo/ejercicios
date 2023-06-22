<!-- Cree una página de servidor la cual dado un array, se lo cargue con valores
aleatorios (vea funciones predefinidas rand) y luego muestre el promedio de los
valores cargados en el arreglo en una función diseñada por usted. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio nro 2</title>
</head>
<body>
    <form method="POST" name=formulario>
        <label for="submit">generador de numeros y promedio</label>
        <br>
        <input type="submit" name="submit" value="presione">
    </form>
    <?php
    $lista=array();
    if (isset($_POST["submit"])){
        for ($i=0; $i<=9; $i++){
            $num=rand(1,100);
            array_push($lista,$num);
        }
    }
    
    function promedioarry($lista){
        $promedio= array_sum($lista)/count($lista);
        foreach($lista as $num){
            echo $num."<br>";
        }
        
        //echo  print_r($lista)."<br>";
        echo "el promedio es $promedio";
    }
    promedioarry($lista);
    ?>
</body>
</html>