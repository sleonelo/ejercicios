function enviar_datos() {
  if (document.getElementById("id_dni").value.length <= 0) {
    alert("DEBE CARGAR UN DNI");
    return;
  }
  if (document.getElementById("id_nombre").value.length <= 0) {
    alert("DEBE CARGAR UN NOMBRE");
    return;
  }

  let dni = document.getElementById("id_dni").value;
  let nombre = document.getElementById("id_nombre").value;
  // Los parametros a enviar

 
  let parametros = {
    RS_MetodoAEjecutar: "funcion_servidor",
    RS_parametros: Array(dni, nombre),
  };
  $.ajax({
    type: "POST",
    dataType: "html",
    async: false,
    cache: false,
    url: "ejemplo_ajax_proceso.php",
    data: parametros,
    success: function (cadena) {
      datos = JSON.parse(cadena);
      if (datos.mensaje) {
        //la devolucion es un mensaje, ya sea de error o de que todo estuvo bien
        alert(datos.mensaje);
      } else {
        //se devuelve un arreglo de datos
        for (i = 0; i < datos.length; i++) {
          alert(datos[i]);
        }
      }
      return;
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert(thrownError);
      alert(xhr.responseText);
    },
  });
}
