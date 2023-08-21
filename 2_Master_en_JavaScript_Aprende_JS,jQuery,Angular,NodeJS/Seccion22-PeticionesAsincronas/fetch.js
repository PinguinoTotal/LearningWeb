'use strict'

//fetch y peticiones a servicios / api rest

var usuarios = [];
var div_usuarios = document.querySelector("#usuarios");
var div_jannet = document.querySelector("#jannet")
var div_profesor = document.querySelector("#profesor")

GetUsuarios().then(data => data.json())
    .then(data => {
        usuarios = data;
        ListadoUsuarios(usuarios);

        return GetInfo();
        
    })
    .then(data => {
        console.log(data);
        div_profesor.innerHTML = data;

        return GetJannet();
    })
    .then(data => data.json())
    .then(jannet => {
        
        MostrarJanent(jannet.data);
    });

function GetUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function GetJannet() {
    return fetch('https://reqres.in/api/users/2');
}

function GetInfo(){
    var profesor = {
        nombre: "victor",
        apellidos: "robles",
        url: "https://victorroblesweb"
    };

    return new Promise((resolve,reject) => {
        var profesor_string = "";

        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != "string") return reject("error 1");

            return resolve(profesor_string);
        }, 10000);
    });
}

function ListadoUsuarios(usuarios) {
    for (var user in usuarios) {
        var h3 = document.createElement("h3");

        h3.innerHTML = usuarios[user].name;

        div_usuarios.append(h3);

        document.querySelector(".loading").style.display = 'none';
    }
}

function MostrarJanent(user) {

    var h3 = document.createElement("h3");
    let avatar = document.createElement("img");

    h3.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;

    div_jannet.append(h3);

    div_jannet.append(avatar);

    document.querySelector("#jannet .loading").style.display = 'none';

}



