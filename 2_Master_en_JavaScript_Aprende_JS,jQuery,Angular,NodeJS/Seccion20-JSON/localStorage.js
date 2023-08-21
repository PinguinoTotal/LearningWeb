"use strict"
if(typeof Storage != "undefined"){
    console.log("se puede usar el storage");
}

localStorage.setItem("titulo", "curso");

var usuario = {
    nombre: "nombre",
    email: "email@email.com",
    web: "web"
}

localStorage.setItem("Usuario", JSON.stringify(usuario));