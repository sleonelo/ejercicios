$("#enviar").click(function () {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let operaciones = document.getElementById("operaciones").value;
   

    let parametros = {
      valor1: num1,
      valor2: num2,
      valor3: operaciones,
    };

    $.ajax({
      data: parametros,
      url: "backend.php",
      type: "post",
      beforeSend: function () {
        $("#respuesta").html("Procesando, espere por favor...");
      },
      success: function (response) {
        $("#respuesta").html(response);
      },
    });
  });