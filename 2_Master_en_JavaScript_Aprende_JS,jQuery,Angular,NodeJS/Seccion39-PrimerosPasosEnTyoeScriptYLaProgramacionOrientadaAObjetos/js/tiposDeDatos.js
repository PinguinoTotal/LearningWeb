//string
var cadena = "victorRoblesWeb";
//numbre
var numero = 12;
//Boleano 
var verdadero_falso = true;
//Any
var cualquiera = "hola"; //aqui entran cualquir tipo de datos como var
//arrays
var lenguajes = ["PHP", "JS", "CSS"]; //Array de strings 
var years = [1, 2, 30]; //Arrasy de numeros 
var echizo = "echizo"; //esta variable puede ser o string o numero, pero nada más
echizo = 15;
//Let vs var 
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44; //el let solo llama a una variable aunque esta se llam a igual que una var, la usa y luego se destruye 
    var numero2 = 55; //el var puede redefinir la variable que estamos ocupando
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
