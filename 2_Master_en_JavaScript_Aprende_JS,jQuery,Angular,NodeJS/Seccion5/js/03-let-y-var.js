'use strict'

//Pruebas con Let y Var

//Prueba con var
var numero =40;
if(true){
    var numero = 50;
    console.log(numero);
}
console.log(numero);
/*si renombramos una variable "var" dentro de una sentencia somos capaces de 
 cambiar lo que ponemos, ya que es como si la estuvieramos poniendo global*/

//Prueba con let 
var texto = "curso";
console.log(texto);
if(true){
    let texto = "Curso chido";
    console.log(texto);
}
console.log(texto);

/*y let hace que la variable sea restringida o se crea una nueva variable y 
la variable "global o var" ya no es afectada por el cambio*/