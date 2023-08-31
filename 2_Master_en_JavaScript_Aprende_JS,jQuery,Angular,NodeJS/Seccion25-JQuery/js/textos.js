$(document).ready(function(){

    ReloadLinks();

    $('#add_button')
        .removeAttr('disabled') //alimina un atributo del elemento seleccionado 
        .click(function(){
        var newLink = $('#add_link').val();
        //$('#menu').html('<li><a href="'+ newLink + '"></a></li>'); //con este metodo se introduce al 
        //html del elemento que hemos seleccionado, pero machaca todo lo que hay dentro 
        //$('#menu').append('<li><a href="'+ newLink + '"></a></li>'); //este añade a el html hasta abajo de todo
        $('#menu').prepend('<li><a href="'+ newLink + '"></a></li>'); //este añade al el html hasta arriba de todo
        //$('#menu').before('<li><a href="'+ newLink + '"></a></li>'); //lo mete antes del elemento menu osease afuera de la lista 
        //$('#menu').after('<li><a href="'+ newLink + '"></a></li>'); //lo mete despues del elemento menu osease afuera de la lista
        $('#add_link').val(''); //vaciando la caja de texto
        ReloadLinks();
    });

    

    function ReloadLinks(){
        $('a').each(function(index){ //funcion que recorre elemento por elemento de jquery
            var that = $(this)
            var enlace = (that.attr("href")); //tomar el atributo "href" de cada elemto de los elementos a
            
            that.attr('target', '_blank'); //el atributo target has que abra una nueva pestaña
            
            that.text(enlace); //añade como texto lo que le pongas ahi 
        });
    }
});