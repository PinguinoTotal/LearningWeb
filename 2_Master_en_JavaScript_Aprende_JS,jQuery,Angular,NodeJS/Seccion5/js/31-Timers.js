'use strict'

//Timers

function intervalo(){
    var tiempo = setInterval(function(){
        console.log("set interval ejecutado");
        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize ="20px";
        }else{
            encabezado.style.fontSize = "50px";
        }
    }, 500); 

    return tiempo;
}

var tiempo = intervalo();

//esto se ejecutara cada 3 segundos

/*
var tiempo = setTimeout(function(){
    console.log("set interval ejecutado");
    var encabezado = document.querySelector("h1");
    if(encabezado.style.fontSize == "50px"){
        encabezado.style.fontSize ="20px";
    }else{
        encabezado.style.fontSize = "50px";
    }
}, 100);
*/
//esto hace que solo se ejecute una vez 

var stop = document.querySelector("#stop");

stop.addEventListener("click",function(){
    clearInterval(tiempo);
    alert("Has parado el intervalo en bucle");
});
//deteniendo el timer que teniamos 

var start = document.querySelector("#start");

start.addEventListener("click",function(){
    intervalo();
    alert("Has iniciado el intervalo en bucle");
});
//comenzando el timer que teniamos, esto realmente e4s llamar a la funcion que crea el intervalo