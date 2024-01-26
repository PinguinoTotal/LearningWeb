$(document).ready(function(){
    reloadLinks();
    $("#addButton").removeAttr('disabled') //quitar un atributo
        .click(function(){
        var linkAnadido = $("#addLink").val();
        $("#menu").append('<li><a href= "'+linkAnadido+'"></a></li>');
        //con el metodo html puedo incrustar codigo dengro del html de las cosas que programo
            //pero machaca lo que ya tene,os dentro 
        //con append lo añado al final de la lista 
        //prepend me lo añade al inicio de la lista
        //before lo añade antes del pedazo de codigo al que le estamos incustando 
        $("#addLink").val() = ''; //borra lo que hay dentro del campo de texto
        reloadLinks();
    })

});

function reloadLinks(){
    $('a').each(function(index){ //each es un for each de jQuery
        var enlace = $(this).attr("href");//obtener el atributo de algo
        var that = $(this);

        that.attr('target','_black');//añade el atributo target con valor _blanck
        //(abre en una nueva pesataña)
        //al objeto en el cual estoy trabajando

        that.removeAttr()

        that.text(enlace);
    });
}