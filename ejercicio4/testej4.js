function datos() {
  listaDatos = [];
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("lastname").value;
  let dni = document.getElementById("idnum").value;

  if (nombre == "" || apellido == "" || dni == "") {
    alert("debe completar todos los campos!");
    return false;
  }

  let checkboxes = document.getElementsByClassName("materias");
  let valoresCheckbox = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      valoresCheckbox.push(checkboxes[i].name);
    }
  }
  if (valoresCheckbox.length === 0) {
    alert("debe seleccionar al menos una materia");
    return false;
  }
  
  let checkradios = document.getElementsByClassName("turno");
  let bandera = false;
			for (let i = 0; i < checkradios.length; i++) {
				if (checkradios[i].checked) {
					bandera = true;
					break;
				}
			}
			if (!bandera) {
				alert("Debe seleccionar un turno");
				return false;
      }
  return true;

}
