'use strict'
//fetch y peticiones a servicios / apis rest
//fecth es una manera de pedir informacion a un backend

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");

var usuarios = [];
//el fetch accede a un servicio remoto, hace la peticion

getUsuarios()
    .then(data => data.json()) //obten datos y pasalo a json 
    .then(users => {
        listadoUsuarios(users.data);

        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;

        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    })
    //atrapando el error que se genera
    //cuando este caido el fetch, o que no haya internet y asi 
    .catch(error=>{
        console.log(error)
    });
    



function getUsuarios(){
    return fetch("https://reqres.in/api/users?page=1");
}    

function getJanet(){
    return fetch("https://reqres.in/api/users/2");
}

//haciendo una promesa
function getInfo(){
    
    var profesor = {
        nombre: "victor",
        apellidos: "robles",
        url: "https://victorroblesweb.es"
    }

    return new Promise((resolve, reject)=>{
        var profesor_string = JSON.stringify(profesor);
        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);
            
            if(typeof profesor_string != "string" || profesor_string == "")return reject("error 1");
            //la consola imprimira error 1 porque es lo que debe de decir si falla
        
            return resolve(profesor_string);
            //haciendo que la promesa tarde 3 minutos
        }, 3000);
    })
}

function listadoUsuarios(usuarios){
    usuarios.map((user,i) =>{
        let nombre = document.createElement("h3");
        
        nombre.innerHTML = i+" " + user.first_name + " " + user.last_name;
        div_usuarios.append(nombre);
        document.querySelector(".loading").style.display = "none";
    })
}

function mostrarJanet(user){
    console.log(user);
        let nombre = document.createElement("h4");
        let avatar = document.createElement("img");
        avatar.src= user.avatar;
        nombre.innerHTML = user.first_name + " " + user.last_name;
        div_janet.append(nombre);
        div_janet.appendChild(avatar);
        document.querySelector("#janet .loading").style.display = "none";
}