'use strict'

/*
Mostar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce un numero desde el que quieras contar",0));
var numero2 = parseInt(prompt("Introduce un numero hasta el que quieras contar",0));

document.write("<h1>Numeros impares de "+numero1+" hasta " +numero2+"</h1>")

for(var i = numero1 ; i< numero2; i++){

    if(!(i%2 == 0))
    document.write(i + " </br>")
}