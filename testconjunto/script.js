function validarDatos() {
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let email = document.getElementById("email").value;
    
    if (nombre == "" || direccion == "" || email == "") {
      alert("Por favor, ingrese todos los campos.");
      return false;
    }
    
    let expresionRegularEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!expresionRegularEmail.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }
    
    return true;
  }