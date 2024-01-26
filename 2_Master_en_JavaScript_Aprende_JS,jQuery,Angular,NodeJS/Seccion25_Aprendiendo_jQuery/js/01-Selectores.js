'use strict'

//con esto podemos saber si ya esta listo el jQuery
//el objeto dolar se refiera a jquery
$(document).ready(function(){
    
    //selector de ID
    var rojo = $("#rojo");

    //con la funcion css puedo cambiar el css desde javaScript
    rojo.css("background","red")
        .css("color","white"); 

    $("#amarillo").css("background","yellow")
                  .css("color","green");  

    $("#verde").css("background","green")
               .css("color","white");

    //selector de Clase
    //seleccionar las cosas como si fueran css
    var mi_clase = $(".zebra");
    console.log(mi_clase);

    //le pone este css a todos los elementos que esten en mi_clase

    $(".sin_borde").click(function(){
        console.log("click dado");
        $(this).addClass('zebra');
        console.log("clase zebra añadida")
    });
    
    //selectores de etiqueta
    var parrafos = $("p");

    parrafos.click(function(){// usando evento click
        $(this).removeClass("zebra");
    });

    //selector de atributo
    //seleccionamos loq ue es su titulo tengan...
    $('[title="google"]').css("background","yellow");

    //otros
    $('p,a').addClass("margen_superior"); //seleccionar varias cosas

    //dentro de el div caja busca coincidencias con resaltado
    var busqueda = $("#caja").find(".resaltado");

    //sal de la caja donde estas y busca fuera del anidamiento que ya tiene 
    var busqueda = $("#caja").eq(0).parent().parent().parent().find(".resaltado");
    console.log(busqueda);
});