'use strict'

//el local storage es una memoria que almacena por unos momentos en el navegador
//en cada pagina web tenemos un lcoal storage diferentre

//comprobar disponibilidad del local storage
if (typeof(Storage) != 'undefined') {
    console.log("local storage disponible");
}else{
    console.log("local storage no disponible");
}

//guardar datos en el local storage 
localStorage.setItem("titulo","Curso de Symfony de Victor Robles");
//titulo es la key como se llama donde guardamos la info
//se guarda en almacenamiento/almacenamiento local

//Recuperar elemento
var valor = localStorage.getItem("titulo");
document.querySelector("#peliculas").innerHTML = valor;

//Guardar objetos
var usuario = {
    nombre: "victor",
    email: "victor@victor.com",
    web: "victor@victor.com"
};

// para guardar datos o mandarlos es combertirlo en string
localStorage.setItem("usuario",JSON.stringify(usuario));

//recuperar objetos
var userJS = JSON.parse(localStorage.getItem("usuario"));
console.log(userJS);

document.querySelector("#peliculas").append(" " + userJS.nombre);