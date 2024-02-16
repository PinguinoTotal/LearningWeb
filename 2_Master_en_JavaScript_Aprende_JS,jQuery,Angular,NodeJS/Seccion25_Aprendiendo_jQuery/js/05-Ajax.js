$(document).ready(function(){
    //load
    //$("#datos").load('https://reqres.in');
    //cargar html's que pedimos en done queramos 

    //Get
    //consegurir el json con jquery, parecido a fetch 
    $.get("https://reqres.in/api/users", {page: 2},function(response){
        response.data.forEach((element, index) =>{
            $("#datos").append("<p>"+element.first_name+" "+ element.last_name+"</p>");
        });
    });


    //POST
    //el metodo post es para mandar valores a un servidor 
    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        /*
        //tomamos la url para hacer el post desde el html
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response)
        })
        */

        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: 'aplication/json',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando el usuario")
                //antes de mandarlo corre este codigo
            },
            success: function(response){
                console.log(response);
                //coore esro si logra mandar la peticion
            },
            error: function(){
                //corre esto si pasa un error
                console.log("ha ocurrido un error");
            },
            setTimeout: 2000 //cuanto tiempo quiero que se tarde la peticion como maximo
        });



        return false;
    });
});