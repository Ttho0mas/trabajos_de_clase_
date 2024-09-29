var usuarios = [];

function agregarUsuario() {
  var nombreInput = document.getElementById('nombre');
  var correoInput = document.getElementById('correo');
  
  var nombre = nombreInput.value.trim();
  var correo = correoInput.value.trim();
  
  if (nombre && correo) {
    var id = (new Date()).getTime().toString(); 
    var nuevoUsuario = { id, nombre, correo };
    usuarios.push(nuevoUsuario);
    mostrarUsuarios();
    nombreInput.value = '';
    correoInput.value = '';
  } else {
    alert('Ingresa un nombre y un correo del usuario');
  }
}

function eliminarUsuario() {
  var idInput = document.getElementById('idEliminar');
  var id = idInput.value.trim();

    if (id) {
        var indice = usuarios.findIndex(usuario => usuario.id === id);
            if (indice !== -1) {
            usuarios.splice(indice, 1);
            mostrarUsuarios();
            idInput.value = '';
            } else {
            alert('ingrese id correcta ');
            }
  }
}

function mostrarUsuarios() {
  var listaUsuarios = document.getElementById('listaUsuarios');
  listaUsuarios.innerHTML = ''; 

  usuarios.forEach(usuario => {
    var listItem = document.createElement('li');
    listItem.textContent = `ID: ${usuario.id}, Nombre: ${usuario.nombre}, Correo: ${usuario.correo}`;
    listaUsuarios.appendChild(listItem);
  });
}

document.getElementById('agregarB').addEventListener('click', agregarUsuario);
document.getElementById('eliminarB').addEventListener('click', eliminarUsuario);
mostrarUsuarios();
