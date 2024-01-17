'use strict'

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus apellidos");

//las comillas invertidas van con alt + 96
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son es: ${apellidos}</h3>
`;

document.write(texto);