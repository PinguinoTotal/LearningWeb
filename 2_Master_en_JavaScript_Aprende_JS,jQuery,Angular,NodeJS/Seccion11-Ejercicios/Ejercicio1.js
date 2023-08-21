"use strict"
/*Programa que nos pida dos numeros y que nos diga cual es el mayor, cual es el menor y si son iguales*/ 

var mensaje = "";
var noEsUnNumeroValido = true;
var numero1 = parseInt(prompt("introduce el numero 1"));
var numero2 = parseInt(prompt("introduce el numero 2"));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2))
{
    numero1 = parseInt(prompt("introduce el numero 1"));
    numero2 = parseInt(prompt("introduce el numero 2"));
}

if(numero1 == numero2){
    mensaje = "los numeros son iguales"
}
else{
    if(numero1 > numero2){
        mensaje = "el numero 1 es más grande que el numero 2"
    }
    else{
        mensaje = "el numero 2 es más grande que el numero 1"
    }
}

alert(mensaje);