$(document).ready(function(){
    var caja = $("#caja");
    $("#mostrar").hide();
    
    $("#mostrar").click(function(){
        $(this).hide(); //hide hace que el elemento no se vea (display: none)
        $("#ocultar").show(); //show hace que el elemento se vea (display: block)
        //caja.show('fast'); //existen modificadores que nos daran 'animaciones' 
        //de ocultarse o mostrarse de manera más rapida o lenta
        caja.fadeIn('fast'); //fundido del elemto que lo muestra
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        caja.fadeOut('fast', function(){
            //esta zona de codigo se ejecutara despues de terminar la animacion 
        }); //fundido del elemento que lo oculta
    });

    $("#todoEnUno").click(function(){
        caja.toggle('fast');  //muestra o oculta el elemnto dependiendo de como este 
        //existen varios para hacer cosas en los efectos, faceToggle, slideToogle, slideUp
        //se tiene que buscar en algo de data 
    });


    $("#animame").click(function(){
        caja.animate({ //esta es la manera de crear animaciones personalizadas de un elemento 
                marginLeft: '500px',    //cada animacion debe hacerse por bloques de animacion
                fontSize: '40px',   //estos alteran el css directamente en javaScript 
                height: '110px' 
            }, 'slow')  //tambien puede darseles un tiempo o velocidad en la cual se debe realizar la animacion
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '990px',
                marginTop: '0px'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow');
    });
});