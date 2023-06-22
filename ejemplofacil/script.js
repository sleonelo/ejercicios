function enviar() {
    let nombre = document.getElementById('nombre').value;
    let parametros = {
          valorCaja1: nombre,
        };
    
  
  
  $.ajax({
    data: parametros,
    url: "back.php",
    type: "POST",
    beforeSend: function () {
      $("#resultado").html("Procesando, espere por favor...");
    },
    success: function (response) {
      $("#resultado").html(response);
    },
  });
}    