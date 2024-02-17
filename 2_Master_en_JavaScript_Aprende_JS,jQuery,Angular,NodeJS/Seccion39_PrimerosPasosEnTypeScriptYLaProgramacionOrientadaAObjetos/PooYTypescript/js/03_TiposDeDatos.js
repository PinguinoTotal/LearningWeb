var cosa = "alfa";
cosa = 5;
//string 
var cadena = "datos en cadena";
//number
var numero = 12;
//boolean
var verdadero_falso = true;
//any 
var cualquiera = "hola";
cualquiera = 7;
//la variable any hace que reconozaca cualquier tipo de dato
//Arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = [12, 15, 14]; //otra manera de tener arrays
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes);
//Let vs var
//vemos que las variables let son "variables nuevas"
//creadas con el mismo nombre
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2); //44 55
}
console.log(numero1, numero2); //10 55
