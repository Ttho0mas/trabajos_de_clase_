
import { agregar, borrar, punto, calcularCuadrado, calcularRaiz, calcular, operacion } from './modulofunciones.js';


document.addEventListener('DOMContentLoaded', function () {
    var botonesNumeros = document.querySelectorAll('.numero');
    botonesNumeros.forEach(function (boton) {
        boton.addEventListener('click', function () {
            agregar(parseInt(boton.value));
        });
  
    });
   
       
  

    document.getElementById('botonC').addEventListener('click', borrar);
    document.getElementById('punto').addEventListener('click', punto);

    document.querySelector('.cuadrado').addEventListener('click', function() {calcularCuadrado (botonesNumeros) });
    document.querySelector('.raiz').addEventListener('click', function() {calcularRaiz (botonesNumeros) } );
    
    document.querySelector('.suma').addEventListener('click', function () {
        operacion('+');
    });
    document.querySelector('.resta').addEventListener('click', function () {
        operacion('-');
    });
    document.querySelector('.division').addEventListener('click', function () {
        operacion('/');
    });
    document.querySelector('.multiplicacion').addEventListener('click', function () {
        operacion('*');
    });
    document.querySelector('.igual').addEventListener('click', calcular);
});