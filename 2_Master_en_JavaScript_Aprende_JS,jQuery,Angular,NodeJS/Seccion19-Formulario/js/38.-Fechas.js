'use strict'

//obtener la fecha que es en ese momento
var fecha = new Date();

var year = fecha.getFullYear(); // obtener le año

var mes = fecha.getMonth(); //obtener el mes, el mes 0 es enero

var dia = fecha.getDate(); //obtener el dia

var hour = fecha.getHours(); //obtener la hora

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hour}
`;

console.log(textoHora);

console.log(Math.random());