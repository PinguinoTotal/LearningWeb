"use strict"

var numero = parseInt(prompt("introduce un numero"));

while(isNaN(numero)){
    numero = parseInt(prompt("introduce un numero"));
}

if(numero%2==0){
    alert("es un numero par");
}
else{
    alert("es un numero impar");
}