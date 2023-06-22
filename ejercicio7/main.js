$("#enviar").click(function () {
    let nom1 = document.getElementById("nombre1").value;
    let nom2 = document.getElementById("nombre2").value;
    let nom3 = document.getElementById("nombre3").value;
    let nom4 = document.getElementById("nombre4").value;
    let nom5 = document.getElementById("nombre5").value;

    

    let parametros = {
      valor1: nom1,
      valor2: nom2,
      valor3: nom3,
      valor4: nom4,
      valor5: nom5,
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