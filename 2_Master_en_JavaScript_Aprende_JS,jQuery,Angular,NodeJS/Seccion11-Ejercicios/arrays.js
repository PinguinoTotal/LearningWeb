"use strict"

var numeros = new Array(); 

function MostrarArray(array, textoGenerico = ""){
    document.write("<h1>La lista" +textoGenerico+ " es :</h1>");
    array.forEach(object => {
        document.write("<strong>" + object  + "</strong> <br/>"); 
    });
}

for (let i = 0; i < 6; i++){
    var numero = parseInt(prompt("introduce el numero "+ (i+1) + " al array", 0));
    numeros.push(numero);

}

MostrarArray(numeros);

//Ordenarlos y mostrarlos
document.write("================Ordenar y mostrar====================<br/>");

var numerosOrdenados = numeros.sort(function(a,b){return a-b});
MostrarArray(numerosOrdenados, " ordenada");

//Invertir y mostrar
var numerosInvertidos = numerosOrdenados.reverse();
MostrarArray(numerosOrdenados, " invertida");

//conr elementos

document.write("la lista tiene: " +numeros.length+ "elementos <br/>")



console.log(numeros);