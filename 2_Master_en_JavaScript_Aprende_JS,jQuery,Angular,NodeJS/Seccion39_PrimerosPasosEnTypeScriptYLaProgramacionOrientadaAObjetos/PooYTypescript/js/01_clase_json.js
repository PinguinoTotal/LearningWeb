'use strict'

//las clases nos hacen hacer objetos que pueden ser echas a la medidada que nos permite hacer
//mas objetos del mismo tipo

var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disoc',
    velocidadMaxima: '60KM',
    //es posible tener funciones dentro de los objetos 
    cambiaColor: function(nuevo_Color){
        this.color = nuevo_Color;
        //se hace referencia al color que ya teniamos registro
        console.log(this);
        //se hace referencia a todo el objeto en si, no solo a un atributo
    }
}

bicicleta.cambiaColor("azul")