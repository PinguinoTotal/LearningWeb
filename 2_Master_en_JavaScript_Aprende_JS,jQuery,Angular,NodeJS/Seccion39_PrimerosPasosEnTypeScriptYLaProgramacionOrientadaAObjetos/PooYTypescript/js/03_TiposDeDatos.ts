type alfanumerico = string|number;
let cosa: alfanumerico = "alfa"
cosa = 5;


//string 
let cadena: string | number = "datos en cadena";

//number
let numero: number = 12;

//boolean
let verdadero_falso: boolean = true;

//any 
let cualquiera: any = "hola";
cualquiera = 7;
//la variable any hace que reconozaca cualquier tipo de dato

//Arrays
var lenguajes: Array<string> = ["PHP","JS","CSS"];

let years: number[] = [12,15,14]; //otra manera de tener arrays

console.log(cadena,numero,verdadero_falso,cualquiera,lenguajes);

//Let vs var
//vemos que las variables let son "variables nuevas"
//creadas con el mismo nombre
var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2); //44 55
}
console.log(numero1, numero2); //10 55