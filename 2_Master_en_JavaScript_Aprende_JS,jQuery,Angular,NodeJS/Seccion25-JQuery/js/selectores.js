$(document).ready(function(){ //se refiere a que todos las cosas de la pagina este cargada y lista para usarse 
    //selector de ID
    var rojo = $("#rojo").css("background","red") //cambiando el css desde javaScript
                        .css("color","white"); //es posible encadenar cosas de css continuando con punto y no cerrando el punto y aparte
    //pueden guardarse en variables o simplemente seleccionarlas y cambiarlas

    

    $("#amarillo").css("background","yellow")
                 .css("color","green");

    $("#verde").css("background","green")
                .css("color","white");

    //selector de Clase
    var mi_clase = $(".zebra") /*toma los elementos que tienen la clase zebra 
    por la naturaleza de que varios elementos pueden tener la misma clase, esta funcion
    nos arrojara un array de elementos y podemos ocuparlos como un array normal*/
    
    mi_clase.css("border","5px dashed black"); /*se les pone los mismos estilos css a todos los 
    elementos del array */

    $(".sonBorde").click(()=>{ //cuando le de click a algunos de los elementos que tenga la clase sin borde
        $(this).addClass("zebra"); //'al elemento que estoy clickando añadele la clase zebra'
    });

    //selectores de etiqueta
    var parrafos = $('p').css("cursor","pointer");
    
    parrafos.click(function(){
        var that = $(this); //es mejor hacer esto si el this se usa mucho para no sobrecargar 

        if(!that.hasClass('grande')){ //pregunta si la esto tiene la clase grande
            that.addClass('grande');
        }else{
            that.removeClass('grande'); //elimina la clase grande de este elemento
        }
    })

    //selector de atributo
    $('[title="google"]').css("background", "#ccc"); //selecciona los que tienen esta caracteristica 
    $('[title="facebook"]').css("background", "blue");

    //otros
    $('p,a').addClass('margen_superior'); //aplicando clases a multiples etiquetas

    var busqueda = $("#caja").find(".resaltado"); //busca dentro de la caja la clase resaltado
    console.log(busqueda);
 });