var usuarios = [];


function usuarioAgregado(nuevoUsuario) {
  console.log('Usuario agregado:', nuevoUsuario);
  mostrarUsuarios();
}


function usuarioEliminado(usuarioElim) {
  console.log('Usuario eliminado:', usuarioElim);
  mostrarUsuarios();
}

function agregarUsuario(USUARIO) {
  var nombreInput = document.getElementById('nombre');
  var correoInput = document.getElementById('correo');
  
  var nombre = nombreInput.value.trim();
  var correo = correoInput.value.trim();
  
  if (nombre && correo) {
    var id = (new Date()).getTime().toString(); 
    var nuevoUsuario = { id, nombre, correo };
    usuarios.push(nuevoUsuario);
    nombreInput.value = '';
    correoInput.value = '';
    USUARIO(nuevoUsuario); 
  } else {
    alert('Ingresa un nombre y un correo del usuario');
  }
}

function eliminarUsuario(USUARIO) {
  var idInput = document.getElementById('idEliminar');
  var id = idInput.value.trim();

  if (id) {
    var indice = usuarios.findIndex(usuario => usuario.id === id);
    if (indice !== -1) {
      var usuarioElim = usuarios.splice(indice, 1)[0];
      idInput.value = '';
      USUARIO(usuarioElim); 
    } else {
      alert('Ingrese ID correcta');
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

document.getElementById('agregarB').addEventListener('click', function() {
  agregarUsuario(usuarioAgregado); 
});

document.getElementById('eliminarB').addEventListener('click', function() {
  eliminarUsuario(usuarioEliminado); 
});

mostrarUsuarios(); 
