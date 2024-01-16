'use strict'

/*
Muestre todos los numeros divisores de un numero introduce en prompt
*/

var numero = parseInt(prompt("Numero que quieres encontrar divisores",0));

document.write("<h1>Numeros divisores de: "+numero+"</h1>")

for(var i = 0 ; i< numero; i++){

    if((numero%i == 0)){
        document.write(i + " </br>")
    }
    
}