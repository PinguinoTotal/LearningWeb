"use strict"
"hacer un programa que pida dos numeros que muestre todos los numero entre esos 2 numeros"

var numero1 = parseInt(prompt("introduce un numero",0));
var numero2 = parseInt(prompt("introduce un numero",0));

document.write("<h1>De" + numero1 + "hasta " + numero2 +" estan los numeros </h1>");
for (let i = numero1; i  < numero2; i++) {
     document.write(i + "<br>");
     
}