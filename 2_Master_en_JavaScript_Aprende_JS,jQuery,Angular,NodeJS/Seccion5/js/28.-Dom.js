'use strict'
//ojo, el dom debe ser cargado despues de el html si no no podra hacer uso del codigo html
//ya que este no "existe" aun

//Dom
//sirve para modificar el html de la pagina a traves de javascript

var caja = document.querySelector("#miCaja");
//seleccionando la caja que tenemos en html de otra manera como si fuera css 

var caja = document.getElementById("miCaja"); 
//Seleccionando la caja que tenemos en el html
//con innerHTML se saca el HTML que tiene dentro la caja

caja.innerHTML = "Texto desde JavaScript"; //cambiando lo uqe hay dentro del HMTL
caja.style.background = "red"; //cambiando el color a traves de javascript
caja.style.padding = "20px"; 
caja.style.color = "white";

caja.className = "hola hola2";//cambiando la clase de una etiqueta desde javascript

//CONSEGUIR ELEMENTOS POR SU ETIQUETA 
var todosLosDivs = document.getElementsByTagName("div");
//obteniendo todas las etiquetas que sean divs
//esto mete todos los divs en un array y se entra a ellos de manera norma

var valor;
for(valor in todosLosDivs){
    if(typeof(todosLosDivs[valor].textContent) == 'string'){
        var parrafo = document.createElement("p"); //creando un parrafo en html
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        //tambien puede utilizarse prepend, para que se coloque antes en el html 
        //agrega algo dentro de un elemento de html
        document.querySelector("#miSeccion").appendChild(parrafo);
    }
    
}

//CONSEGUIR ELEMENTOS POR SU CLASE

var divsRojos = document.querySelectorAll('#rojo')
console.log(divsRojos);
var div;
for (div in divsRojos) {
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
    
}

//console.log(todosLosDivs);