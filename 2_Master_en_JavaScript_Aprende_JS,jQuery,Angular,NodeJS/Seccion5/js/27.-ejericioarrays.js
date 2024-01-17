'use strict'

/*
1.- Pida 6 numeros por pantalla y los meta en un array
2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3.- Ordenarlo y mostrarlo
4.- Invertir su orden y mostrarlo
5.- Mostrar cuantos elementos tiene el array 
6.- Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(se valorara el uso de funciones)
*/

var numeros = [];

function mostrarPorPantalla(Texto){
    document.write("<h1>"+Texto+"</h1>");
    document.write("<ul>");
    for (let i = 0; i < numeros.length; i++) {
        document.write("<li>"+numeros[i]+"</li>");
    }
    document.write("</ul>");
}

function mostrarPorConsola(){
    console.log(numeros);
}

for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("Introduce un numero",0));
    numeros.push(numero);  
}

mostrarPorPantalla("Lista de numeros");
mostrarPorConsola();

//ordenarlos

numeros.sort((a,b) => a-b); //ordenarlo de manera numerica
mostrarPorPantalla("Lista ordenada");

//invertir 
numeros.reverse();
mostrarPorPantalla("Invertidos");

//contar cuantos elementos tiene el array 
document.write("<h1>el array tiene: "+numeros.length+" dentro</h1>");



//buscar en el array
var buscando = parseInt(prompt("Cual numero buscas?",0));
var busqueda = numeros.indexOf(buscando);

if(busqueda!=-1){
    document.write("<h1>Numero encontrado, esta en la posicion: "+busqueda+" del array</h1>");
}else{
    document.write("<h1>Numero no encontrado en el array</h1>");
}
