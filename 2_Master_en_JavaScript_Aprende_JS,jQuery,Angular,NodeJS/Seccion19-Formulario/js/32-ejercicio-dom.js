'use strict'

window.addEventListener('load', function(){
    console.log("dom cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none"; //ocultar algo por codigo javascript
    
    var error_nombre = document.querySelector("#error_nombre");
    error_nombre.style.display = "none";

    //capturar evento submit
    formulario.addEventListener('submit',function(){
        console.log("enviando formulario")

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        //con el value sacamos o obtenemos la inbformacion que esta dentro de 
        //el formulario

        if (nombre == null || nombre.trim().length == 0){
            alert("el nombre no es valido");
            error_nombre.style.display = "block";
            return false;
        }

        if (apellidos == null || apellidos.trim().length == 0){
            alert("los apellidos no son valido");
            return false;
        }

        if (edad == null || edad <=0 || isNaN(edad) ){
            //is Nan nos diec que no es un numero
            alert("la edad no es valida");
            return false;
        }

        box_dashed.style.display = "block";

        var datos_usuario = [nombre,apellidos,edad];

        var indice;
        for (indice  in datos_usuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
    });
});