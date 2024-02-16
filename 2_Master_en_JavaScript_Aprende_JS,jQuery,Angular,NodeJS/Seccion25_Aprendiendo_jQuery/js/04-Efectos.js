$(document).ready(function () {
    var caja = $("#caja");
    var botonMostrar = $("#mostrar");
    var botonOcultar = $("#ocultar");

    botonMostrar.hide();

    botonMostrar.click(function () {
        $(this).hide();
        botonOcultar.show();
        caja.fadeTo('slow', 1);
        //la opacidad va de algo a otro

        //slide up para bajarlo

        //caja.fadeIn('fast');
        //lo muestra con un degradado


        //caja.show('fast'); //muestra cosas
        //para que no sea tan brusco el cambio se le puede poner a que velocidad queremos
        //que algo aparezca o desaparezca
        //fast, normal, slow
    });

    botonOcultar.click(function () {
        $(this).hide();
        botonMostrar.show();
        caja.fadeTo('slow', 0);
        //slide up para subirlo

        //caja.fadeOut('fast');
        //lo oculta con un degradado

        //caja.hide('fast'); //oculta cosas
    });

    $("#todoEnUno").click(function () {
        caja.slideToggle("fast");
        //slideToggle
        //fadeToggle 
        //lo muestra y lo oculta de manera automatica
    })

    $("#animame").click(function () {
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')// podemos cambiar la velocidad de las animaciones si las 
            //encadenamos 
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow', function(){
                console.log("la animacion 3 ha terminado");
            }) //asi se hace para poder lanzar eventos mientras se ejecuta una animacion
            //o que el evento espere a que se haga la animacion 
            .animate({
                borderRadius: '100px',
            }, 'slow');
        //asi podemos animar las cosas de una manera 
        //más facil, pero debemos escribir como el css que querramos que cambie 
        //tambien colocando a la velocidad que queremos que se haga
    });
});