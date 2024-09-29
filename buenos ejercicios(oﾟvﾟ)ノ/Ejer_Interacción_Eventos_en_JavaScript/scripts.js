document.addEventListener('DOMContentLoaded', () => {
/*Js A.Un botón que, al hacer clic, cambie el color de fondo de la página.  */
    var cambiarColor = document.getElementById('Bcambiarcolor');

    cambiarColor.addEventListener('click', () => {
        document.body.style.backgroundColor = RandomColor();
    });

    function RandomColor() {
        var combinacionL = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += combinacionL[Math.floor(Math.random() * 16)];
        }
        return color;
    }

/*Js B.Un campo de texto que, al escribir en él, muestre en tiempo real el texto ingresado en un párrafo debajo del campo.  */
    var campoTexto = document.getElementById('campoTexto');
    var textoMostrado = document.getElementById('textoMostrado');

    campoTexto.addEventListener('input', () => {
        textoMostrado.textContent = campoTexto.value;
    });


/*Js C.Una imagen que, al pasar el ratón sobre ella, cambie a otra imagen, y al retirar el ratón, vuelva a la imagen original.  */
    var imagenCambiante = document.getElementById('imagenCambiante');
    var srcuno = imagenCambiante.src;
    var altuno = imagenCambiante.alt
    var srcdos = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/143_f2.png'; 
    var altdos ="Pokemon Gigantamax Snorlax ";

    imagenCambiante.addEventListener('mouseover', () => {
        imagenCambiante.src = srcdos;
        imagenCambiante.alt = altdos ;
    });

    imagenCambiante.addEventListener('mouseout', () => {
        imagenCambiante.src = srcuno;
        imagenCambiante.alt = altuno;
    });

/* Js D.Un botón que, al hacer doble clic, muestre un mensaje de alerta con un texto personalizado.   */

    var mensajealert = document.getElementById('Bmensajealert');

    mensajealert.addEventListener('dblclick', () => {
        alert('¿Porque haces doble click? ( ´･･)ﾉ(._.`)');
    });


/*Js E.Un <pre> que registre todas las teclas presionadas mientras se tenga activa la pestaña del navegador.    */ 
    var registroTeclas = document.getElementById('registroteclas');

    document.addEventListener('keydown', (event) => {
        registroTeclas.textContent += event.key;
    });

/*Js F. Un formulario con un campo de texto y un botón de envío, que al enviarse (evento "submit"), prevenga el 
 comportamiento predeterminado (event.preventDefault()) y muestre una alerta con el contenido del campo de texto. */ 
   
    var formulario= document.getElementById('formulario');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        var campoFormulario = document.getElementById('campoFormulario');
        alert(`Contenido del formulario: ${campoFormulario.value}`);
        campoFormulario.value = '';  
    });



    
});