'use strict'

var year = 2018;

while(year <= 2051){
    console.log("Estamos en el año: " + year);
    year ++;
} 

//year -- operador de decremento (va pa tras pues)

//Do while

var years = 21;

//primero hace el do y comprueba que ya lo hizo
do{
    alert("Solo cuando sea diferente a 20")
    years = 20;
}while(years != 20)