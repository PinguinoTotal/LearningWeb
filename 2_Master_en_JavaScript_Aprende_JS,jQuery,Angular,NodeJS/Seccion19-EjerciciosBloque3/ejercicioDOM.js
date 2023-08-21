"use strict"

var formulario = document.querySelector("#formulario");
var box_dashed = document.querySelector(".dashed");
box_dashed.style.display = "none";

formulario.addEventListener("submit", function(){
    console.log("evento submit lanzado");

    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellidos").value;
    var edad = document.querySelector("#edad").value;

    box_dashed.style.display = "block";

    /*
    var parrafo = document.createElement("p");
    parrafo.append(nombre);
    parrafo.append(apellido);
    parrafo.append(edad);
    box_dashed.append(parrafo);
    */

    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellido;
    p_edad.innerHTML = edad;
})