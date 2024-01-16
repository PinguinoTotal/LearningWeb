'use strict'
// porgrama que pida dos numeros y que nos diga cual es mayor, el menor y si son iguales
//PLUS: si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir

do{
    alert("introduce un numero valido")
    var numero1 = parseInt(prompt("Introduce el primer numero",0));
    var numero2 = parseInt(prompt("Introduce el segundo numero",0));
}while(numero1 <= 0 || numero2 <= 0 || numero1 == NaN || numero2 == NaN)

if(numero1 == numero2){
    alert("los numeros son iguales: "+ numero1);
}else if(numero1>numero2){
    alert("el numero mayor es: " + numero1);
    alert("el numero menor es: " + numero2);
}else if (numero2>numero1){
    alert("el numero mayor es: " + numero2);
    alert("el numero menor es: " + numero1);
}else{
    alert("introduce un numero");
}