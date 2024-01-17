'use strict'

//Funciones anonimas
//Es una funcion que no tiene nombre 

var pelicula = function(nombre){
    console.log("la Pelicula es: "+nombre);
}

//los callbacks son funciones anonimas que se les pasan como parametros a otras
//funciones y esa funcion dentro de ella se ejecuta 
function sumame(numero1,numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
} 

sumame(4,10,dato=>{
    //la flecha es quitar el "function" por una flecha, 
    //si es más de un parametro sid ebe ir entre parentesis
    console.log("la suma es: " + dato);
},dato=>{
    console.log("la suma multiplciada por dos es: "+ dato)
})