//formulario que nos permita añadir peliculas

var formulario = document.querySelector("#formPeliculas");
formulario.addEventListener('submit',function(){
    var titulo = document.querySelector("#addpelicula").value;
    if (titulo.length >= 1) {   
        localStorage.setItem(titulo,titulo);
    }
});

var formularioBorrar = document.querySelector("#formBorrarPeliculas");
formularioBorrar.addEventListener('submit',function(){
    var eraseKey = document.querySelector("#borrarPelicula").value;
    if (eraseKey.length >= 1) {   
        //eliminar elemento que este en el local storage
        localStorage.removeItem(eraseKey);
        // para eliminar el elemento debemos saber su key 
    }
})


var peliculas_list = document.querySelector("#peliculas-list")
var index;
for (index in localStorage) {
    if(typeof localStorage[index] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[index]);
        peliculas_list.append(li);
    }
}