'use strict'

function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion"
    console.log(hola_Mundo);
    /*esta variable no podra ser llamada fuera de la funcion ya que es local */
    console.log(texto);
    console.log(numero.toString());
    /*aunque "numero" no esta sindo introducido al llamar al metodo, este puede leerlo 
    toString es una funcion aplicada a un objeto, este lo vuelve un string */
}

var numero = 12;
var texto = "hola mundo soy una variable global"
holaMundo(texto);