'use strict'

/*
Calculadorea
- Pida dos numeros por pantalla
- Si metemos mal un numero que nos los vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por consola el resultado de 
sumar, restar, multiplicar y dividir esas dos cifras 
*/

do{
    var numero1 = parseInt(prompt("introduce un numero: ",0));
    var numero2 = parseInt(prompt("introduce otro numer numero: ",0));
}while(isNaN(numero1) || isNaN(numero2))

var suma = "la suma de "+ numero1 +" y " + numero2 +" es: " + (numero1+numero2);
var resta = "la resta de "+ numero1 +" y " + numero2 +" es: " + (numero1-numero2);
var multiplicacion = "la multiplicacion de "+ numero1 +" y " + numero2 +" es: " + (numero1*numero2);
var division = "la division de "+ numero1 +" y " + numero2 +" es: " + (numero1/numero2);

document.write("<p> "+suma+"</p>");
document.write("<p> "+resta+"</p>");
document.write("<p> "+multiplicacion+"</p>");
document.write("<p> "+division+"</p>");

alert(suma);
alert(resta);
alert(multiplicacion);
alert(division);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);