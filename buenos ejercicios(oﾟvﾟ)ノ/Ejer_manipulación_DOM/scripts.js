document.addEventListener("DOMContentLoaded", function() {

 /* Js A*/
    var parrafos = document.getElementById('#parrafos');
     
    function cambiarTexto(){

        document.getElementById("parrafos").innerText = "Texto cambiado ...";

    
    }

   

/* Js B*/
function cambiarColor() {
    document.getElementById("eldiv").style.backgroundColor = "cornflowerblue";
}

function restaurarColor() {
    document.getElementById("eldiv").style.backgroundColor = "gold";
}

/* Js C*/
function anadirElemento() {
    var li = document.createElement("li");
    li.innerText = "🍊🍋🥭";
    document.getElementById("lalista").appendChild(li);
}

/* Js D*/
function modificarParrafoD() {
    var p = document.getElementById("parrafosD");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}
/*Js E*/
function actualizarInput() {
    var contenido = document.getElementById("parrafosE").innerText;
    document.getElementById("elinput").value = contenido;
}

/*Js F*/
function mostrarURLs() {
    var capa = document.getElementById("lacapa");
    var imagenes = capa.getElementsByTagName("img");
    for (let img of imagenes) {
        alert(img.src);
    }
}
/*Js G*/
function destacarInputs() {
    var inputs = document.querySelectorAll("#elformulario input[type='text']");
    for (let input of inputs) {
        input.classList.add("destacado");
    }
}

/*Js H*/
function eliminarElementos() {
    document.getElementById("lalistaH").innerHTML = "";
}

function agregarElementos() {
    var lista = document.getElementById("lalistaH");
    var cantidad = Math.floor(Math.random() * 1000) + 1;
    
    for (let i = 0; i < cantidad; i++) {
        var li = document.createElement("li");
        li.innerText = Math.floor(Math.random() * 1000);
        lista.appendChild(li);
    }
}
 });