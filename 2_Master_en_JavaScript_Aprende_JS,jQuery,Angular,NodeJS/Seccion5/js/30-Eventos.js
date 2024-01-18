'use strict'

//Eventos de raton


window.addEventListener('load', ()=>{
    //aqui se debe de poner todo el codigo que accede al dom, ya que esto se va a ejecutar despues
    //de que la pagina ya cargue de manera correcta
});

function cambiaColor(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
}

var boton = document.querySelector("#boton");

//captura el evento click
boton.addEventListener('click', function(){
    cambiaColor();
});
 
//mouse over 
boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
});

//mouse out
boton.addEventListener('mouseout', function(){
    boton.style.background = "black";
});

//focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
    console.log("[focus] estas dentro del input");
});

//blur 
input.addEventListener('blur',function(){
    console.log("[blur] estas fuera del input");
});

//keydown 
input.addEventListener('keydown',function(event){
    console.log("[keydown] Pulsando la tecla: ", String.fromCharCode(event.KeyCode));
});

//keypress
input.addEventListener('keypress',function(event){
    console.log("[keypress] Tecla presionada: ", String.fromCharCode(event.KeyCode));
});

//keyup
input.addEventListener('keyup',function(event){
    console.log("[keyup] Tecla levantada: ", String.fromCharCode(event.KeyCode));
});