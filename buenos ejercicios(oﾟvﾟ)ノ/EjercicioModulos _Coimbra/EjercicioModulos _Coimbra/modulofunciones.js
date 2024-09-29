export var valor1 = "";
export var valor2 = "";
export var resultado;
export var operador = "";
export var val;

export function agregar(numero) {
var temval = document.getElementById("pantalla").value;

    if (temval == "0") {
    document.getElementById("pantalla").value = numero;
    } else {
    document.getElementById("pantalla").value += numero;
    }
}

export function borrar() {
document.getElementById("pantalla").value = 0;
valor1 = "";
operador = "";
}

export function punto() {
document.getElementById("pantalla").value += ".";
}

export function calcularCuadrado() {
var valor1 = parseFloat(document.getElementById("pantalla").value);
var resultado = valor1 * valor1;

document.getElementById("pantalla").value = resultado.toLocaleString("es-ES");
}
  
export function calcularRaiz() {
var valor1 = parseFloat(document.getElementById("pantalla").value);
    if (valor1 >= 0) {
    var resultado = Math.sqrt(valor1);
    document.getElementById("pantalla").value = resultado.toLocaleString("es-ES");
    } else {
    document.getElementById("pantalla").value = "Error";
    }
}


export function operacion(signo) {
    if (valor1 == "") {
    operador = signo;
    valor1 = parseFloat(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = "";
    
    } else {
        
        if (operador === "+") {
            operador = signo;
            valor2 = document.getElementById("pantalla").value;
            valor1 = parseFloat(valor1) + parseFloat(valor2);

            document.getElementById("pantalla").value = valor1;
            document.getElementById("pantalla").value = "";

            valor2 = "";

        } else 
        if (operador === "-") {
            operador = signo;
            valor2 = document.getElementById("pantalla").value;
            valor1 = parseFloat(valor1) - parseFloat(valor2);

            document.getElementById("pantalla").value = valor1;
            document.getElementById("pantalla").value = "";

            valor2 = "";

        } else 
        if (operador === "/" ) {
            operador = signo;
            valor2 = document.getElementById("pantalla").value;
            valor1 = parseFloat(valor1) / parseFloat(valor2);

            document.getElementById("pantalla").value = valor1;
            document.getElementById("pantalla").value = "";

            valor2 = "";
        
        } else if (operador === "*") {
            operador = signo;
            valor2 = document.getElementById("pantalla").value;
            valor1 = parseFloat(valor1) * parseFloat(valor2);

            document.getElementById("pantalla").value = valor1;
            document.getElementById("pantalla").value = "";

            valor2 = "";

        } else {

            resultado = valor1;
        }}
    
}


  export function calcular() {
var pantallaValor = parseFloat(document.getElementById("pantalla").value);
    
    if (operador === "/" && pantallaValor === 0) {
    alert("No se puede dividir entre cero.");
    borrar(); 
    return;

        } else {

            if (operador === "+") {
            resultado = valor1 + parseFloat(document.getElementById("pantalla").value);
            document.getElementById("pantalla").value = resultado.toLocaleString("es-ES");
            } else
            if (operador === "-") {
                resultado = valor1 - parseFloat(document.getElementById("pantalla").value);
                document.getElementById("pantalla").value = resultado.toLocaleString("es-ES");
            
            } else 
            if (operador === "/") {
                resultado = valor1 / parseFloat(document.getElementById("pantalla").value);
                document.getElementById("pantalla").value = resultado.toLocaleString("es-ES");
                
            } else
            if (operador === "*") {
                resultado = valor1 * parseFloat(document.getElementById("pantalla").value);
                document.getElementById("pantalla").value = resultado.toLocaleString("es-ES"); 
            
            } else {
                resultado = valor1;
                document.getElementById("pantalla").value = resultado.toLocaleString( "es-ES");
                
            
            }    

    valor1 = "";
    operador = "";   
     }    
}