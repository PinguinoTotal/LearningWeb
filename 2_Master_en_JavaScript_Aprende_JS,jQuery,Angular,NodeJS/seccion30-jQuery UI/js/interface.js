$(document).ready(function(){
    $(".elemento").draggable(); //mover elemento por la pagina 

    //redimensionar 
    $(".elemento").resizable(); //redimensionar la caja

    //$(".listaSeleccionable").selectable(); //los elementos que esten dentro de esto se 
    //volveran seleccionables y se podra usar  .ui-selecting y .ui-selected

    $(".listaSeleccionable").sortable({//los elementos que esten dentro de esto se 
    //podran acomodar como queramos, no funciona si esta en uso selectable 
        update: function(event, ui){ //detecta cuando cambia la lista 
            console.log("ha cambiado la lista");
        }
    }); 

    $("#elementoMovido").draggable(); //hacer un cuadro que pueda moverse por la pantalla 
    $("#area").droppable({ //hacer un area que pueda resivir el objeto movible
        drop: function(){ //evento que se dispara cuando un elemento draggable se suelta en el 
            console.log("has soltado algo dentro del area");
        }
    });

    $('#mostrar').click(function(){
        //$('.cajaEfectos').fadeToggle(); // mostrar de manera que aprace
        //$('.cajaEfectos').effect("explode"); // agregar el efecto explode
        //$('.cajaEfectos').toggle("explode"); //lo aparece con una mini explosion 
        //$('.cajaEfectos').toggle("blind"); //lo abre como ventana hacia abajo 
        //$('.cajaEfectos').toggle("slide"); //lo abre como ventana hacia la derecha
        //$('.cajaEfectos').toggle("drop"); //lo abre como ventana hacia la derecha pero como degradado
        //$('.cajaEfectos').toggle("fold"); //casi lo mismo que slide
        $('.cajaEfectos').toggle("puff",4000 ); //de grande a tamaño normal, tambien es posible poner el timpo en que lo querramos hacer  
    });
});