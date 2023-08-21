"use strict"
"mostrar la media y la suma de los resultados, hasta que el usuario meta un numero negativo"
var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("introduce numeros hasta que metas uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;
    }
    if(numero>=0){
        suma = suma + numero;
        contador++;
        alert("la suma de los numeros es: "+ suma + "y el primedio es: "+ suma/contador);
    }

} while (numero>=0);