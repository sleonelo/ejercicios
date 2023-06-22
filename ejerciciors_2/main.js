function promedio() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let dni = document.getElementById("dni").value;
  let materia = document.getElementById("materia").value;
  let notas = document.getElementsByClassName("notas");
  let valores = [];
    for (let i = 0; i < notas.length; i++) {
      valores.push(notas[i].value);
    }
    if (nombre == "" || apellido == "" || dni == "" || materia == "") {
      alert("debe completar todos los campos!");
      return false;
    }
    for (let i = 0; i < valores.length; i++) {
      if (valores[i]==""){
        alert("debe completar todos los campos de notas");
        return false;
      };
    }
  

  let parametros = {
    RS_MetodoAEjecutar: 'funcion_servidor',
    RS_parametros: [nombre, apellido, dni, materia,valores],
  };
  $.ajax({
    type: "POST",
    dataType: "html",
    url: 'servidor.php',
    data: parametros,
    success: function (cadena) {
      datos = JSON.parse(cadena);
      if (datos.mensaje) {
        // la devolucion es un mensaje, ya sea de error o de que todo estuvo bien
        $("#resultado").html(datos.mensaje);
      } else {
        // se devuelve un arreglo de datos
        for (i = 0; i < datos.length; i++) {
          $("#resultado").html(datos.mensaje);
        }
      }
      // alert(cadena.split(',') + " ///// " + JSON.stringify(cadena));
    },
  });
}

function mayor() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let dni = document.getElementById("dni").value;
  let materia = document.getElementById("materia").value;
  let notas = document.getElementsByClassName("notas");
  let valores = [];
    for (let i = 0; i < notas.length; i++) {
      valores.push(notas[i].value);
    }
    if (nombre == "" || apellido == "" || dni == "" || materia == "") {
      alert("debe completar todos los campos!");
      return false;
    }
    for (let i = 0; i < valores.length; i++) {
      if (valores[i]==""){
        alert("debe completar todos los campos de notas");
        return false;
      };
    }
  

  let parametros = {
    RS_MetodoAEjecutar: 'funcion_servidor1',
    RS_parametros: [nombre, apellido, dni, materia,valores],
  };
  $.ajax({
    type: "POST",
    dataType: "html",
    url: 'servidor.php',
    data: parametros,
    success: function (cadena) {
      datos = JSON.parse(cadena);
      if (datos.mensaje) {
        // la devolucion es un mensaje, ya sea de error o de que todo estuvo bien
        $("#resultado1").html(datos.mensaje);
      } else {
        // se devuelve un arreglo de datos
        for (i = 0; i < datos.length; i++) {
          $("#resultado1").html(datos.mensaje);
        }
      }
      // alert(cadena.split(',') + " ///// " + JSON.stringify(cadena));
    },
  });
}
