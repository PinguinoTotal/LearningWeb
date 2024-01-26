$(document).ready(function(){
    var caja = $("#caja");  
    var botonMostrar = $("#mostrar");
    var botonOcultar = $("#ocultar");

    botonMostrar.hide();

    botonMostrar.click(function(){
        $(this).hide();
        botonOcultar.show();
        caja.fadeTo('slow',1);
        //la opacidad va de algo a otro

        //slide up para bajarlo
        
        //caja.fadeIn('fast');
        //lo muestra con un degradado


        //caja.show('fast'); //muestra cosas
        //para que no sea tan brusco el cambio se le puede poner a que velocidad queremos
        //que algo aparezca o desaparezca
        //fast, normal, slow
    });

    botonOcultar.click(function(){
        $(this).hide();
        botonMostrar.show();
        caja.fadeTo('slow',0);
        //slide up para subirlo

        //caja.fadeOut('fast');
        //lo oculta con un degradado

        //caja.hide('fast'); //oculta cosas
    });

    $("#todoEnUno").click(function(){
        caja.slideToggle("fast");
        //slideToggle
        //fadeToggle
        //lo muestra y lo oculta de manera automatica
    })
});