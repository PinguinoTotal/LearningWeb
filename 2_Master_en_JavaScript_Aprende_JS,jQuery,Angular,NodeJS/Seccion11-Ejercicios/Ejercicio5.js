"use strict"
/*
Muestre todos los numeros divisores de un numero introducido en el promt
*/ 

var numero = parseInt(prompt("introduce un numero", 0));

document.write("<h1>Los numeros divisorios del numero: "+ numero +" son: </h1>");
for (let i = 0; i < numero; i++) {
    if((numero%i)==0){
        document.write(i + "</br>");
    }

}