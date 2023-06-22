function promedio() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let dni = document.getElementById("dni").value;


  if (nombre == "" || apellido == "" || dni == "") {
    alert("debe compvarar todos los campos!");
    return false;
  }

  let checkboxes = document.getElementsByClassName("materias");
  let valoresCheckbox = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      valoresCheckbox.push(checkboxes[i].value);
    }
  }
  if (valoresCheckbox.length === 0) {
    alert("debe seleccionar al menos una materia");
    return false;
  }

  let notas = document.getElementsByClassName("notas");
  let valores = [];
  for (let i = 0; i < notas.length; i++) {
    valores.push(notas[i].value);
  }
  for (let i = 0; i < valores.length; i++) {
    if (valores[i]==""){
      alert("debe completar todos los campos de notas");
      return false;
    };
  }
  

  let parametros = {
    valorNombre: nombre,
    valorApellido: apellido,
    valorDni: dni,
    valorCheckbox: valoresCheckbox,
    valorNotas: valores,
  };

  $.ajax({
    data: parametros,
    url: "backend.php",
    type: "POST",
    beforeSend: function () {
      $("#resultado").html("Procesando, espere por favor...");
    },
    success: function (response) {
      $("#resultado").html(response);
    },
  });
}

function mayor() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let dni = document.getElementById("dni").value;

  
  if (nombre == "" || apellido == "" || dni == "") {
    alert("debe completar todos los campos!");
    return false;
  }

  let checkboxes = document.getElementsByClassName("materias");
  let valoresCheckbox = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      valoresCheckbox.push(checkboxes[i].value);
    }
  }
  if (valoresCheckbox.length === 0) {
    alert("debe seleccionar al menos una materia");
    return false;
  }

  let notas = document.getElementsByClassName("notas");
  let valores = [];
  for (let i = 0; i < notas.length; i++) {
    valores.push(notas[i].value);
  }
  for (let i = 0; i < valores.length; i++) {
    if (valores[i]==""){
      alert("debe completar todos los campos de notas");
      return false;
    };
  }
  

  let parametros = {
    valorNombre: nombre,
    valorApellido: apellido,
    valorDni: dni,
    valorCheckbox: valoresCheckbox,
    valorNotas: valores,
  };

  $.ajax({
    data: parametros,
    url: "backend1.php",
    type: "POST",
    beforeSend: function () {
      $("#resultado1").html("Procesando, espere por favor...");
    },
    success: function (response) {
      $("#resultado1").html(response);
    },
  });
}
