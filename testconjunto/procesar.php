<!DOCTYPE html>
<html>
<head>
	<title>Datos del formulario</title>
</head>
<body>
	<h1>Datos del formulario</h1>
	<p>Nombre: <?php echo $_POST["nombre"]; ?></p>
	<p>Dirección: <?php echo $_POST["direccion"]; ?></p>
	<p>Correo electrónico: <?php echo $_POST["email"]; ?></p>
</body>
</html>