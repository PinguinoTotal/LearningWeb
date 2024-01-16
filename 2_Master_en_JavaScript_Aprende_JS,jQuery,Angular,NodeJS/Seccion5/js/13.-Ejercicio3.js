'use strict'
/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/ 

var numero1 = parseInt(prompt("Introduce un numero desde el que quieras contar",0));
var numero2 = parseInt(prompt("Introduce un numero hasta el que quieras contar",0));

document.write("<h1>De "+numero1+" hasta " +numero2+"</h1>")

for(var i = numero1 ; i< numero2; i++){
    console.log(i);
    document.write(i + " </br>")
}