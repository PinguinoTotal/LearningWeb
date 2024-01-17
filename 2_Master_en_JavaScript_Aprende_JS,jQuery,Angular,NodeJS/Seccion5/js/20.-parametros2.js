'use strict'

//parametros REST y SPREAD

function listadoDeFrutas(fruta1, fruta2,...restoDeFrutas){
    console.log("Fruta1: ", fruta1);
    console.log("Fruta2: ", fruta2);
    console.log(restoDeFrutas);
}

listadoDeFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

/*
los parametros REST o el "...restoDeFrutas", se definen con ..., estos almacenaran
los datos que desbordan a la funcion y estos los mete en una lista
*/

var frutas=["Naranja","Manzana"]
listadoDeFrutas(...frutas,"Sandia","Pera","Melon","Coco");
/*
los valores SPREAD son arrays que se meten dentro de una funcion pero colocando
los ... delante del array hacemos que se "desdoble" y meta correctamente los datos
de manera ordenada como si lo metieramos (array[0], array[1])
*/