$(document).ready(function () {
    var caja = $('#caja');

    /*
    caja.mouseover(function(){ //mouse que entra dentro del elemento
        $(this).css("background","red"); 
    });

    caja.mouseout(function(){ //mouse que sale del elemento 
        $(this).css("background", "green");
    })
    */

    //Hover
    function CambiaRojo() { //mouse que entra dentro del elemento
        $(this).css("background", "red");
    }

    function CambiaVerde() { //mouse que sale del elemento 
        $(this).css("background", "green");
    }

    caja.hover(CambiaRojo,CambiaVerde); //el evento over toma en cuenta
    //primero cuando entra dentro del elemento y luego cuando sale 

    //Click y doble click
    caja.click(function(){ //click normla
        $(this).css("background", "blue")
            .css("color", "white");
    })

    caja.dblclick(function(){ //doble click
        $(this).css("background", "orange")
            .css("color", "yellow");
    })

    //Focus y blur
    var nombre = $('#nombre');
    var datos = $('#datos');
    nombre.focus(function(){ //cuando estoy dentro de un campo de formulario
        $(this).css("border","2px solid green");
    });

    nombre.blur(function(){ //cuando salgo de un campo de formulario
        $(this).css("border","1px solid #ccc");
        datos.show(); //enseña la caja que tiene displat block none en el css
        datos.text($(this).val()); //pondra el texto de el valor de la caja que acabamos de salir 
    });

    //Mousedown y mouseup
    datos.mousedown(function(){ //hacer click en elemento
        $(this).css("border-color", "gray") 
    });

    datos.mouseup(function(){ //dejar de hacer click en el elemento
        $(this).css("border-color", "black")
    });

    //Mousemove 
    $(document).mousemove(function(){ //detecta cuando el mouse se mueve en la pagina 
        console.log("En X:" + event.clientX); //event.clientX nos dice la coordenada en x del mouse
        console.log("En Y:" + event.clientY); //event.clientY nos dice la coordenada en y del mouse

        $('body').css("cursor", "none"); //esconde el curor en la pagina 
        var sigueme = $('#sigueme');
        sigueme.css("left", event.clientX);
        sigueme.css("top", event.clientY);
    });


});