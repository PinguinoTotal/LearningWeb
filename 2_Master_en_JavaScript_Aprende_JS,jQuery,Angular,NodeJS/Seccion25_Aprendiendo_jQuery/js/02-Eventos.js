$(document).ready(function(){

    //Mouse over y Mouse out
    var caja = $("#caja");

    /*
    caja.mouseover(function(){ //pasar sobre esta cosa
        $(this).css("background","red");
    });

    caja.mouseout(function(){ //salir de esta cosa
        $(this).css("background","green");
    });
    */

    function cambiaRojo(){ //pasar sobre esta cosa
        $(this).css("background","red");
    }

    function cambiaVerde(){ //salir de esta cosa
        $(this).css("background","green");    
    }

    //Hover
    caja.hover(cambiaRojo,cambiaVerde);
    //cuando entramos usa cambia rojo y cuando sales usa cambia verde

    //click, DobleClick
    caja.click(function(){
        $(this).css("background","blue")
               .css("color","white");  
    });

    caja.dblclick(function(){
        $(this).css("background","pink")
               .css("color","yellow");  
    });

    //fous y blur
    //cuando me enfoco la caja 
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border","2px solid green")
    });

    nombre.blur(function(){
        $(this).css("border","1px solid #ccc")
        $(this).val(); //saber lo que hay dentro de una caja de texto
        datos.text($(this).val()).show(); //mostrando algo que apague por display none

    });

    //mousedown y mouseup 
    //cuando apachurro algo 
    datos.mousedown(function(){
        $(this).css("border-color","gray")
    });

    //cuando levanto el mouse
    datos.mouseup(function(){
        $(this).css("border-color","black")
    });

    //MouseMove
    //este metodo como que persigue al raton o dice las coordenadas 
    //que tien el raton en la pantalla
    
    $(document).mousemove(function(){
        console.log(event.clientX);
        console.log(event.clientY);
        $("#sigueme").css("left",event.clientX);
    });
});
