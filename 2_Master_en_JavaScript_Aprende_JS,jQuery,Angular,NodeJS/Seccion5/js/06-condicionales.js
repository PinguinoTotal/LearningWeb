'use strict'

//Condicional IF 
//Si A es igual a B entoncesa haz algo

var edad = 18;
var nombre = "David Suarez";

/*
//Operadores relaciuonales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

//los if puden ser anidados
if(edad >= 18){
    console.log(nombre + "tiene: "+ edad + " años, ya es mayor de edad");
    if(edad <= 33){
        console.log("Todavia eres milenuial");
    }else if(edad>=70){
        console.log("eres un anciano");
    }else{
        console.log("ya no eres milenial");
    }
}else{
    console.log(nombre + "tiene: "+ edad + " años, es menor de edad");
}

/*
Operadores logicos
AND: &&
OR: ||
Negacion: !
*/
var year = 2018;

//NEGACION
if(year != 2016){
    console.log("el año no es 2016");
}

//AND
if(year >= 2000 && year <= 2020){ //las sentencias deben ser true
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos despues del año 2020");
}

//OR
if(year == 2008 || (year >= 2018 && year == 2028)){ //solo es necesario que una sentencia sea true
    console.log("el año termina en 8");
}else{
    console.log("AÑO NO REGISTRADO");
}