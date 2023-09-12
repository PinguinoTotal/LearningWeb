type alfanumerico = string | number; //podemos crear nuestros propios tipos de variables 

//string
let cadena: string = "victorRoblesWeb";

//numbre
let numero: number = 12;

//Boleano 
let verdadero_falso: boolean = true;

//Any
let cualquiera: any = "hola"; //aqui entran cualquir tipo de datos como var

//arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"]; //Array de strings 

let years: number[] = [1,2,30]; //Arrasy de numeros 

let echizo: alfanumerico = "echizo"; //esta variable puede ser o string o numero, pero nada más
echizo = 15;

//Let vs var 
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44; //el let solo llama a una variable aunque esta se llam a igual que una var, la usa y luego se destruye 
    var numero2 = 55; //el var puede redefinir la variable que estamos ocupando

    console.log(numero1, numero2);
}
console.log(numero1, numero2);

