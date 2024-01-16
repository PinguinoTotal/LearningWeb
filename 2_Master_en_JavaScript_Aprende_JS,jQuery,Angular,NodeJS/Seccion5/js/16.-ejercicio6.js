'use strict'

/*
Programa si un numero es par o impar
1.- ventana prompt
2.- si no es valido que nos pida de nuevo el numero
*/

do{
    var numero = parseInt(prompt("introduce un numero: ",0));
}while(isNaN(numero)) //asi se ve sdi es nan un numero

if(numero%2==0){
    alert("El numero: "+ numero +" es un numero par");
}else{
    alert("El numero: "+ numero +" es un numero impar");
}
