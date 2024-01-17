'use strict'

//Arrays, Arreglos, Matrices

var nombres = ["Victor", "Pedro", "Pablo", "Arturo", 52, true];
//coleccion de datos agrupados, pueden ser diferentes datos

var lenguajes = new Array("PHP", "JS", "GO", "JAVA");

/*
console.log(nombres.length); //saber cuantos elementos tiene metido

var elemento = parseInt(prompt("Que numero de elemento queires sacar del array??",0));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que: "+nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento])
}
*/
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/*
for(var i=0; i<=lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>")
}

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+"-"+elemento+"</li>")
});
*/

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lennguaje]+"</li>")
}

document.write("</ul>");

//Busquedas
var lenguajes = new Array("PHP", "JS", "GO", "JAVA");
var precios = [10,20,50,80,12];

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP7"; //haciendo una busqueda en el array
});

var busqueda = lenguajes.find(lenguaje=> lenguaje == "PHP7");
//esto es lo mismo que arriba pero de una manera más compacta

var busqueda = lenguajes.findIndex(lenguaje=> lenguaje == "PHP7");
//nos dice el indice en el cual se encuentra ese elemento en el array

var busqueda = precios.some(precio => precio >= 50);
//nos dice si si o no, existen precios mayores o iguales a 50