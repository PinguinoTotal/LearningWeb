"use strict"
var numeros = 0;
var texto ="";
var saltos = 0;
var imprimeNumero = true;


for (let i = 1; i <= 493; i++) {
    if(imprimeNumero){
        texto = (texto+i+",");
    }
    if(saltos!=1){  
        saltos ++;
    }
    else{
        saltos = 0;
        imprimeNumero = !imprimeNumero;
    }
    
}
console.log(texto);