$(document).ready(function(){
    $(".elemento").draggable();
    /* volviendo los elementos que se pueden tomar y poner donde sea, es importnate
    decir que antes debemos poner la libreria jQueryUI para que los elementos puedan
    ser implementados de manera facil y correcta*/

    //Resizable
    $(".elemento").resizable();
    /* volviendo los elementos que se puedan hacer mas grandes o pqueños
    es importante cargar los css min de la carpeta jQueryUI*/

    //Seleccionar elementos
    //$(".lista_seleccionable").selectable();

    //Seleccionar y ordenar los elementos 
    $(".lista_seleccionable").sortable({
        update: function(event,ui){
            console.log("ha cambiado la lista");
            //esto hace que cada vez que cambiemos la lista salte esta 
            //funcion para poder implementarla en más cosas
        }
    });
    //este nos deja tomar los elementos y arreglarlos como nosotros querramos
    //como un drag and dropp pero utilizando una "lista"


    //es importante decir que cuando se utiliza este metodo no se puede usar el
    //selectable ya que interfiere en algunas cosillas

    //Drop
    $("#elemento-movido").draggable(); //hacemos que este elemento se pueda tomar
    $("#area").droppable({
        drop: function(){
            console.log("has soltado dentro del area");
        }
    });//hacemos que este elemento sea una cajita que le puedan meter cosas

    //Efectos
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("shake", 4000); //4 segundos
        //$(".caja-efectos").toggle("shake", "slow");
            //a los efectos se les puede dar la duracion especifica que querramos
            //ya sea en palabra o en segundos  
        //$(".caja-efectos").toggle("scale");
        //$(".caja-efectos").toggle("puff");
        //$(".caja-efectos").toggle("fall");
        //$(".caja-efectos").toggle("drop");
        //$(".caja-efectos").toggle("slide");
        //$(".caja-efectos").toggle("blind");
        //$(".caja-efectos").toggle("explode");
        //$(".caja-efectos").toggle("fade");
    });

    $(document).tooltip();
    //este nos muestra el "title" que tiene un enlace en la pagina|

    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
        //crea el cuadro de dialogo
    })

    //date picker
    $("#calendario").datepicker();
    
    //Tabs
    $("#pestanas").tabs();
});