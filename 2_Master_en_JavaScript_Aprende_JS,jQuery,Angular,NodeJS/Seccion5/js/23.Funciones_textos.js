'use strict'

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenidos al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var busqueda = texto1.replace("JavaScript", "Symfony");
    //reemplaza lo que tenemos con lo que queremos

    busqueda = texto1.slice(14);
    //corta los caracteres antes del 14 y deja lo que sobra en el string

    busqueda = texto1.slice(14,22);
    //corta los caracteres del 14 al 22

    busqueda = texto1.split(" ");
    //separa el string por espacios y lo mete en un array

    busqueda = texto1.trim();
    //quita espacios por delante y por detras de los strings
console.log(busqueda);
