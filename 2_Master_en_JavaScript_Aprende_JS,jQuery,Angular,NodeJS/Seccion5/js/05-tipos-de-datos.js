'use strict'

//Operadores
var numero1 = 7;
var numero2 = 12;

var operacionSuma = numero1 + numero2;
var operacionResta = numero1 - numero2;
var operacionDivision = numero1 / numero2;
var operacionMultiplicacion = numero1 * numero2;

var operacionResto = numero1 % numero2; 
//hace la division y la variable toma el valor del residuo de la division 

alert("El resultado de la operacion es: " + operacionSuma);


//Tipos de datos
var numero_entero = 44;
var cadenaDeTexto = "Hola que tal"; 
// un string pero las "" son mas importantes que las ''

var verdadero_o_falso = true; // o false este es un booleano

var numero_falso = "33.4";
console.log(parseInt(numero_falso) + 7); //vuelve el numero string en un entero con parseInt

console.log(String(numero_entero)); //cambia la variable a un string

console.log(typeof(verdadero_o_falso)); // saber el tipo de dato de nuestras variables

