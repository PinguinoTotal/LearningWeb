'use strict'

/*
Utilizar un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar ek resultado 
*/ 

var suma = 0;
var contador = 0;
var numero = 0;

do{
    numero = parseInt(prompt("Introduce un numero o un negativo para terminar",0));
    if(numero == NaN){
        numero = 0;

    }else if(numero >= 0){
        suma += numero;
        contador++;
    }

}while(numero >= 0)

alert("la suma es: "+suma+" y la media es: " + suma/contador);