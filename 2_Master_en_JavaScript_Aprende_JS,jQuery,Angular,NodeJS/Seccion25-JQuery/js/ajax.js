$(document).ready(function(){
    // metodo load cargamos el html de una pagina 
    //$('#datos').load('https://reqres.in/');

    //get
    $.get("https://reqres.in/api/users?page=2", function(response){ //
        response.data.forEach((element, index) => {
            console.log(element.first_name)
            $('#datos').append("<p>"+element.first_name+" "+element.last_name+ "</p>")
        });
    });

    $('#formulario').submit(function(){ //haciendo submit a el formulario
        var usuario = {
            name : $('input[name="name"]').val(),  //obtenemos el valor de el input con nombre name
            web : $('input[name="web"]').val()
        } 
        /*
        console.log(usuario);
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){ //despues de mandar los datos el done se ejecuta despues de resivir la respuesta ajax
            alert("usuario añadido correctamente"); 
        });*/

        //con $(this).attr("action") le damos la url a la cual mandaremos los datos 
        //con $.post($(this).attr("action"), usuario le damos el usuario creado anteriormente

        $.ajax({ //el metodo ajax es el metodo "extendido de los metodos get y post, 
                //en este ya tenemos casi todo el control de los datos que mandamos y la  respuesta que tenemos 
                type: 'POST', // eligiendo que tipo de metodo sera
                ulr: $(this).attr("action"), //eligiendo la url a la que le enviaremos los datos 
                data: usuario, //datos que le enviaremos a la url
                beforeSend: function(){ //antes de mandar lod datos 
                    console.log("Enviando usuario.....");
                },
                succes: function(response){ //si el envio de datos es exitoso
                    console.log(response);
                },
                error: function(){ //por si ocurre un error en el envio de datos
                    console.log("a ocurrido un error");
                }, 
                Timeout: 2000 //el tiempo quiero que tarde como maximo la peticion


        });

        return false; //hacemos que el submit no nos mande a otra pagina 
    });
});