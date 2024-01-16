'use strict'

//Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("¿De que numero quieres la tabla?",1));

document.write("<h1>Tabla de multiplicar de: " +numero+"</h1>")
for(var i=0; i<=10; i++){
    document.write("<p>" +numero+ " X " +i+  " = " + numero*i + "</p>")
}