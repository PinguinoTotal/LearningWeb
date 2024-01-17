'use strict'

//Funciones 
function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("-------------------------------")
}

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "</br>");
    document.write("Resta: " + (numero1 - numero2) + "</br>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "</br>");
    document.write("Division: " + (numero1 / numero2) + "</br>");
    document.write("-------------------------------" + "</br>")
}

function calculadora(numero1, numero2, mostrar = false) {
    if (!mostrar) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }

}

for (var i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8, true);
}