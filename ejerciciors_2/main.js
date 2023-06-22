function obtenerDatos() {
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
    alert("Debe completar todos los campos!");
    return false;
  }

  for (let i = 0; i < valores.length; i++) {
    if (valores[i] == "") {
      alert("Debe completar todos los campos de notas");
      return false;
    }
  }

  return {
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    materia: materia,
    valores: valores,
  };
}

function promedio() {
  let datos = obtenerDatos();

  if (datos) {
    let parametros = {
      RS_MetodoAEjecutar: "funcion_servidor",
      RS_parametros: [
        datos.nombre,
        datos.apellido,
        datos.dni,
        datos.materia,
        datos.valores,
      ],
    };
  // let nombre = document.getElementById("nombre").value;
  // let apellido = document.getElementById("apellido").value;
  // let dni = document.getElementById("dni").value;
  // let materia = document.getElementById("materia").value;
  // let notas = document.getElementsByClassName("notas");
  // let valores = [];
  //   for (let i = 0; i < notas.length; i++) {
  //     valores.push(notas[i].value);
  //   }
  //   if (nombre == "" || apellido == "" || dni == "" || materia == "") {
  //     alert("debe completar todos los campos!");
  //     return false;
  //   }
  //   for (let i = 0; i < valores.length; i++) {
  //     if (valores[i]==""){
  //       alert("debe completar todos los campos de notas");
  //       return false;
  //     };
  //   }
  

  // let parametros = {
  //   RS_MetodoAEjecutar: 'funcion_servidor',
  //   RS_parametros: [nombre, apellido, dni, materia,valores],
  // };
  llamarAjax(parametros, function (respuesta) {
    $("#resultado").html(respuesta);
  });
};
}

function mayor() {
  let datos = obtenerDatos();

  if (datos) {
    let parametros = {
      RS_MetodoAEjecutar: "funcion_servidor1",
      RS_parametros: [
        datos.nombre,
        datos.apellido,
        datos.dni,
        datos.materia,
        datos.valores,
      ],
    };
  // let nombre = document.getElementById("nombre").value;
  // let apellido = document.getElementById("apellido").value;
  // let dni = document.getElementById("dni").value;
  // let materia = document.getElementById("materia").value;
  // let notas = document.getElementsByClassName("notas");
  // let valores = [];
  //   for (let i = 0; i < notas.length; i++) {
  //     valores.push(notas[i].value);
  //   }
  //   if (nombre == "" || apellido == "" || dni == "" || materia == "") {
  //     alert("debe completar todos los campos!");
  //     return false;
  //   }
  //   for (let i = 0; i < valores.length; i++) {
  //     if (valores[i]==""){
  //       alert("debe completar todos los campos de notas");
  //       return false;
  //     };
  //   }
  

  // let parametros = {
  //   RS_MetodoAEjecutar: 'funcion_servidor1',
  //   RS_parametros: [nombre, apellido, dni, materia,valores],
  // };
  llamarAjax(parametros, function (respuesta) {
    $("#resultado1").html(respuesta);
  });
};
}

function llamarAjax(parametros, callback) {
  $.ajax({
    type: "POST",
    dataType: "html",
    url: 'servidor.php',
    data: parametros,
    success: function (cadena) {
      datos = JSON.parse(cadena);
      if (datos.mensaje) {
        // la devolucion es un mensaje, ya sea de error o de que todo estuvo bien
        callback(datos.mensaje);
      } else {
        // se devuelve un arreglo de datos
        for (i = 0; i < datos.length; i++) {
          callback(datos[i]);
        }
      }
    },
  });
}