# Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS

## 6.-
para poner el salto en html es necesario poner, todo completo
~~~ html
<br> <br/>  
~~~
---------
## 8.-
para poner imagenes en html:
~~~ html
<img src="imagenes/lobo.jpg" alt="imagen de un lobo" title="foto de un lobo"> 
~~~
siendo que el src es el soruce de donde se obtendra la imagen, el alt sera el texto alternativo que se mostrara si no se encuentra la imagen, y el title el titulo que se mostrara cuando estemos sobre la imagen con el mouse

lo mejor es usar una ruta relativa en lugar de usar una ruta absoluta 

(se puede definir la altura y el ancho de la imagen con with y heigth)

## 9.- Tablas
~~~ html
    <table border="1"> <!--Es necsario poner el border para que se vea la tabla como tabla-->
        <tr>
            <th>Nombre</th> <!--Estos son los encabezados de las tablas porque van primero-->
            <th>Apellidos</th> <!--El th pone el texto en negritas cuando es una tabla-->
            <th>Pais</th>
        </tr>

        <tr>
            <td>Victor</td>
            <td>Robles</td>
            <td>España</td>
        </tr>

        <tr>
            <td>Kevin</td>
            <td colspan="2">Lopez</td> <!--El colspan nos dice que la tabla se expande-->
        </tr>
    </table>
~~~

## 10.- Formularios
~~~ html
    <form action="">
        <p> <!--caja donde solo entra poca informacion-->
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" placeholder="Escribe tu nombre">
        </p>
        
        <p> <!--Caja donde entra mucha informacion-->
            <label for="descripcion">Descripcion</label>
            <textarea name="descripcion" id="" cols="30" rows="10"></textarea>
        </p>
        
        <!--Los radiobutons son las casillas que deben marcarse-->
        <input type="radio" name="genero" value="hombre"> Hombre <br/>
        <input type="radio" name="genero" value="mujer"> Mujer <br/>
        <input type="radio" name="genero" value="nada"> Nada <br/>

        <select name="" id=""> <!--Menu desplegable con las diferentes opciones-->
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="nada">Nada</option>
        </select>
        
        <!--Boton de submit para cuando ya se termine de llenar el formulario-->
        <input type="submit" value="Enviar formulario"/>

    </form>
~~~

## 12.- 
para hacer un enlace de los url se usa la etiqueta 
~~~ html

    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="contenidos.html">Contenidos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>
~~~

## 15.- 
javascript es un lenguaje debilmente tipado, osease no se le pone que tipo de variable se le esta poniendo solo se interpreta la variable y es necesario abrirlo en un navegador para que este sea leido de manera correcta 

## 16.- 
para usar los archivos javascript en el html debe ser cargado debajo del titulo y se cargan los archivos como:
~~~ html
    <script type="text/javascript" src="HolaMundo.js">      
    </script>
~~~
los archivos javascript terminan en **archivo.js**

## 17.-
para debugear lo que queremos hacer en la consola es con:
~~~ javascript
    console.log(88+4);
~~~

## 18.-
~~~ javascript
    //una variable es un contenedor de información

    var pais = "México";
    var continente = "America";
    var antiguedad = 2024;

    //es importante definir bien el nombre para que no haya confuciones despues 

    var pais_y_continente = pais + '' + continente;
    //asi se hacen las concatenaciones de los strings 

    antiguedad = 2030; //cambiando el contenido de lo que tiene la variable 
~~~

## 19.- Modo estricto
~~~ javascript
    'use strict'

    pais = "México"; //sin el use strict esto es correcto ya que nos deja declarar lo que queramos
    //de una manera mas laxa y sin tanto problema

    var pais = "México"; //con el use strict debemos especificarle exactamente que es 
    //lo que estamos declarando y para que lo vamos a usar (una mejor practica de programación)
~~~

## 20.- Let y var
let es la forma de declarar una variable que solo se podra usar dentro de un parrafo, estas pueden ser nombradas igual que que las variables globales "var" pero son diferentes

## 21.- Constantes
pues su valor no puede cambiar nunca, por eso se les llama constantes 
~~~ javascript
    const ip= "15.21.5"; // declarando una constante 
~~~

## 22.-
~~~ javascript
    'use strict'

//Operadores
var numero1 = 7;
var numero2 = 12;

var operacionSuma = numero1 + numero2;
var operacionResta = numero1 - numero2;
var operacionDivision = numero1 / numero2;
var operacionMultiplicacion = numero1 * numero2;

var operacionResto = numero1 % numero2; 
//hace la division y la variable toma el valor del residuo de la division 

alert("El resultado de la operacion es: " + operacionSuma);

//Tipos de datos
var numero_entero = 44;
var cadenaDeTexto = "Hola que tal"; 
// un string pero las "" son mas importantes que las ''

var verdadero_o_falso = true; // o false este es un booleano

var numero_falso = "33.4";
console.log(parseInt(numero_falso) + 7); //vuelve el numero string en un entero con parseInt

console.log(String(numero_entero)); //cambia la variable a un string
~~~

## 23.-
~~~ javascript
console.log(typeof(verdadero_o_falso)); // saber el tipo de dato de nuestras variables
~~~

## 24.- Condicional If
~~~ javascript
'use strict'

//Condicional IF 
//Si A es igual a B entoncesa haz algo

var edad1 = 30;
var edad2 = 12;

//si pasa esto
if(edad1 > edad2){
    console.log("edad 1 es mayor que edad 2");
    //ejecuta esto
}else{
    console.log("edad 2 es mayor que edad 1");
}

var edad = 18;
var nombre = "David Suarez";

/*
//Operadores relaciuonales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

//los if puden ser anidados
if(edad >= 18){
    console.log(nombre + "tiene: "+ edad + " años, ya es mayor de edad");
    if(edad <= 33){
        console.log("Todavia eres milenuial");
    }else if(edad>=70){
        console.log("eres un anciano");
    }else{
        console.log("ya no eres milenial");
    }
}else{
    console.log(nombre + "tiene: "+ edad + " años, es menor de edad");
}
~~~

## 25.- Operadores Logicos
~~~ javascript
/*
Operadores logicos
AND: &&
OR: ||
Negacion: !
*/
var year = 2018;

//NEGACION
if(year != 2016){
    console.log("el año no es 2016");
}

//AND
if(year >= 2000 && year <= 2020){ //las sentencias deben ser true
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos despues del año 2020");
}

//OR
if(year == 2008 || (year >= 2018 && year == 2028)){ //solo es necesario que una sentencia sea true
    console.log("el año termina en 8");
}else{
    console.log("AÑO NO REGISTRADO");
}
~~~

## 26.- SWITCH
~~~ javascript
//switch 
var edad= 18;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Eres un anciano";
    break;
    default: //caso de que no agarre las otras opciones
        imprime = "Tu edad es neutra";
    break;
}

console.log(imprime);
~~~

## 27.- Bucle FOR
~~~ javascript
'use strict'

//Bucle for
//Bucle es una estructura de control que se repite varias veces

var numero = 100;

for(var i=0; i<numero; i++){ //contador; sentencia; aumento al contador
    console.log("Vamos en el numero: " + i);
}
~~~ 

## 28.- Bucle   WHILE
~~~ javascript
'use strict'

var year = 2018;

while(year <= 20510){
    console.log("Estamos en el año: " + year);
    year ++;
} 

//year -- operador de decremento (va pa tras pues)
~~~ 

## 29.- DO WHILE
~~~ javascript
//Do while

var years = 21;

//primero hace el do y comprueba que ya lo hizo
do{
    alert("Solo cuando sea diferente a 20")
    years = 20;
}while(years != 20)

//year -- operador de decremento (va pa tras pues)
~~~ 

## 30.- BREAK
se le pone break a dentro de un iterador cuando quiere que se detenga, pase lo que pase

## 31 .- Alertas y ventanas
~~~ javascript
'use strict'

//Alerta
alert("Esta es mi alerta");

//Alertas de confirmacion
var mi_resultado = confirm("estas seguro de querer continuar?"); 
//funcion que saca una alerta de true o false
console.log(mi_resultado);


//Ingreso de informacion
prompt("¿Que edad tienes?", 18); //se le da un dato por default (18)
~~~ 

## 32.- Ejercicio1
~~~ javascript
'use strict'
// porgrama que pida dos numeros y que nos diga cual es mayor, el menor y si son iguales

var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));

if(numero1 == numero2){
    alert("los numeros son iguales: "+ numero1);
}else if(numero1>numero2){
    alert("el numero mayor es: " + numero1);
    alert("el numero menor es: " + numero2);
}else if (numero2>numero1){
    alert("el numero mayor es: " + numero2);
    alert("el numero menor es: " + numero1);
}else{
    alert("introduce un numero");
}
~~~ 

## 33.- Ejercicio1 PLUS
~~~ javascript
'use strict'
// porgrama que pida dos numeros y que nos diga cual es mayor, el menor y si son iguales
//PLUS: si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir

do{
    alert("introduce un numero valido")
    var numero1 = parseInt(prompt("Introduce el primer numero",0));
    var numero2 = parseInt(prompt("Introduce el segundo numero",0));
}while(numero1 <= 0 || numero2 <= 0 || numero1 == NaN || numero2 == NaN)

if(numero1 == numero2){
    alert("los numeros son iguales: "+ numero1);
}else if(numero1>numero2){
    alert("el numero mayor es: " + numero1);
    alert("el numero menor es: " + numero2);
}else if (numero2>numero1){
    alert("el numero mayor es: " + numero2);
    alert("el numero menor es: " + numero1);
}else{
    alert("introduce un numero");
}
~~~

## 34.- Ejercicio2
~~~ javascript
'use strict'

/*
Utilizar un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar ek resultado 
*/ 

var suma = 0;
var contador = 0;
var numero = 0;

do{
    numero = parseInt(prompt("Introduce un numero o un negativo para terminar",0));
    if(numero == NaN){
        numero = 0;

    }else if(numero >= 0){
        suma += numero;
        contador++;
    }

}while(numero >= 0)

alert("la suma es: "+suma+" y la media es: " + suma/contador);
~~~

## 35.- Ejercicio3
~~~ javascript
'use strict'
/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/ 

var numero1 = parseInt(prompt("Introduce un numero desde el que quieras contar",0));
var numero2 = parseInt(prompt("Introduce un numero hasta el que quieras contar",0));

document.write("<h1>De "+numero1+" hasta " +numero2+"</h1>")

for(var i = numero1 ; i< numero2; i++){
    console.log(i);
    document.write(i + " </br>")
}
~~~

## 36.- Ejercicio4
~~~ javascript
'use strict'

/*
Mostar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce un numero desde el que quieras contar",0));
var numero2 = parseInt(prompt("Introduce un numero hasta el que quieras contar",0));

document.write("<h1>Numeros impares de "+numero1+" hasta " +numero2+"</h1>")

for(var i = numero1 ; i< numero2; i++){

    if(!(i%2 == 0))
    document.write(i + " </br>")
}
~~~

## 37.- Ejercicio5
~~~ javascript
'use strict'

/*
Mostar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce un numero desde el que quieras contar",0));
var numero2 = parseInt(prompt("Introduce un numero hasta el que quieras contar",0));

document.write("<h1>Numeros impares de "+numero1+" hasta " +numero2+"</h1>")

for(var i = numero1 ; i< numero2; i++){

    if(!(i%2 == 0))
    document.write(i + " </br>")
}
~~~

## 38.- Ejercicio6
~~~ javascript
'use strict'

/*
Programa si un numero es par o impar
1.- ventana prompt
2.- si no es valido que nos pida de nuevo el numero
*/

do{
    var numero = parseInt(prompt("introduce un numero: ",0));
}while(isNaN(numero)) //asi se ve sdi es nan un numero

if(numero%2==0){
    alert("El numero: "+ numero +" es un numero par");
}else{
    alert("El numero: "+ numero +" es un numero impar");
}
~~~

## 39.- Ejercicio7
~~~ javascript
'use strict'

//Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("¿De que numero quieres la tabla?",1));

document.write("<h1>Tabla de multiplicar de: " +numero+"</h1>")
for(var i=0; i<=10; i++){
    document.write("<p>" +numero+ " X " +i+  " = " + numero*i + "</p>")
}
~~~


## 40.- Ejercicio8
~~~ javascript
'use strict'

/*
Calculadorea
- Pida dos numeros por pantalla
- Si metemos mal un numero que nos los vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por consola el resultado de 
sumar, restar, multiplicar y dividir esas dos cifras 
*/

do{
    var numero1 = parseInt(prompt("introduce un numero: ",0));
    var numero2 = parseInt(prompt("introduce otro numer numero: ",0));
}while(isNaN(numero1) || isNaN(numero2))

var suma = "la suma de "+ numero1 +" y " + numero2 +" es: " + (numero1+numero2);
var resta = "la resta de "+ numero1 +" y " + numero2 +" es: " + (numero1-numero2);
var multiplicacion = "la multiplicacion de "+ numero1 +" y " + numero2 +" es: " + (numero1*numero2);
var division = "la division de "+ numero1 +" y " + numero2 +" es: " + (numero1/numero2);

document.write("<p> "+suma+"</p>");
document.write("<p> "+resta+"</p>");
document.write("<p> "+multiplicacion+"</p>");
document.write("<p> "+division+"</p>");

alert(suma);
alert(resta);
alert(multiplicacion);
alert(division);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
~~~

## 41.- Crear funciones
~~~ javascript
'use strict'

//Funciones 
//Una funcion es una garupacion reutilizable de un conjunto de instrucciones 

function calculadora(){
    console.log("Hola soy la calculadora");
    console.log("si soy yo");

    return "La calculadora" //regresa esto como un valor, esta funcion arroja un string
}

calculadora();
~~~

## 42.- Parametros
~~~ javascript
'use strict'

//Funciones 
//Una funcion es una garupacion reutilizable de un conjunto de instrucciones 
//Es posible hacer que las funciones reciban parametros para que hagan más cosas dentro de ellas
function calculadora(numero1,numero2){
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("-------------------------------")
}

/*
calculadora(10,4);
calculadora(50,30);
*/

for(var i=1; i<=10; i++){
    console.log(i);
    calculadora(i,8);
}

~~~

## 43.- Parametros opcionales
~~~ javascript
'use strict'

//Funciones 
//hay funciones que se le spuede dar un valor por default y no es necesario
//darle otro valor cuando se invoca
function calculadora(numero1, numero2, mostrar = false) {
    if (!mostrar) {
        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicacion: " + (numero1 * numero2));
        console.log("Division: " + (numero1 / numero2));
        console.log("-------------------------------")
    } else {
        document.write("Suma: " + (numero1 + numero2) + "</br>");
        document.write("Resta: " + (numero1 - numero2) + "</br>");
        document.write("Multiplicacion: " + (numero1 * numero2) + "</br>");
        document.write("Division: " + (numero1 / numero2) + "</br>");
        document.write("-------------------------------" + "</br>")
    }

}

for (var i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8, true);
}
~~~

## 44.- Funciones dentro de funciones
~~~ javascript
'use strict'

//Funciones 
function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("-------------------------------")
}

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "</br>");
    document.write("Resta: " + (numero1 - numero2) + "</br>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "</br>");
    document.write("Division: " + (numero1 / numero2) + "</br>");
    document.write("-------------------------------" + "</br>")
}

function calculadora(numero1, numero2, mostrar = false) {
    if (!mostrar) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }

}

for (var i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8, true);
}
~~~

## 45.- Parametros rest y spread
~~~ javascript
'use strict'

//parametros REST y SPREAD

function listadoDeFrutas(fruta1, fruta2,...restoDeFrutas){
    console.log("Fruta1: ", fruta1);
    console.log("Fruta2: ", fruta2);
    console.log(restoDeFrutas);
}

listadoDeFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

/*
los parametros REST o el "...restoDeFrutas", se definen con ..., estos almacenaran
los datos que desbordan a la funcion y estos los mete en una lista
*/

var frutas=["Naranja","Manzana"]
listadoDeFrutas(...frutas,"Sandia","Pera","Melon","Coco");
/*
los valores SPREAD son arrays que se meten dentro de una funcion pero colocando
los ... delante del array hacemos que se "desdoble" y meta correctamente los datos
de manera ordenada como si lo metieramos (array[0], array[1])
*/
~~~

## 46.- Funciones anonimas y callbacks
~~~ javascript
'use strict'

//Funciones anonimas
//Es una funcion que no tiene nombre 

var pelicula = function(nombre){
    console.log("la Pelicula es: "+nombre);
}

//los callbacks son funciones anonimas que se les pasan como parametros a otras
//funciones y esa funcion dentro de ella se ejecuta 
function sumame(numero1,numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
} 

sumame(4,10,function(dato){
    /*esta es la funcion llamada "suma y muestra" que declaramos en la funcion
    pero esta se la estamos apsando como parametro
    el dato nos lo esta dando dentro de la funcion*/
    console.log("la suma es: " + dato);
},function(dato){
    /*esta es la funcion llamada "suma por dos" que declaramos en la funcion
    pero esta se la estamos apsando como parametro
    el dato nos lo esta dando dentro de la funcion*/
    console.log("la suma multiplciada por dos es: "+ dato)
})
~~~

## 47.- Funciones de flecha 
~~~ javascript
    sumame(4,10,dato=>{
    //la flecha es quitar el "function" por una flecha, 
    //si es más de un parametro sid ebe ir entre parentesis
    console.log("la suma es: " + dato);
    },dato=>{
    console.log("la suma multiplciada por dos es: "+ dato)
    })
~~~

## 48.- Ambito de las variables 
~~~ javascript
'use strict'

function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion"
    console.log(hola_Mundo);
    /*esta variable no podra ser llamada fuera de la funcion ya que es local */
    console.log(texto);
    console.log(numero.toString());
    /*aunque "numero" no esta sindo introducido al llamar al metodo, este puede leerlo 
    toString es una funcion aplicada a un objeto, este lo vuelve un string */
}

var numero = 12;
var texto = "hola mundo soy una variable global"
holaMundo(texto);
~~~

## 49.- Metodos para procesar textos 
~~~ javascript
'use strict'

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenidos al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString(); //convertir numero a un string
    dato = texto1.toUpperCase(); //convertir letras en mayusculas
    dato = texto1.toLocaleLowerCase(); //convertir letras en minusculas

console.log(dato);

// CALCULAR LONGITUD
var nombre = "";

console.log(nombre.length); //nos dice que tan lago es un texto, sirve para contar cosas
//cuenta cuantas cosa hay dentro de un array o cuantas letras tiene un string 

// CONCATENAR - UNIR TEXTOS

var textoTotal = texto1 + texto2;
var textoTotal = texto1.concat(" "+ texto2); //esto es lo mismo que lo de arriba 
console.log(textoTotal);
~~~

## 50.- Metodos de busqueda
~~~ javascript
'use strict'

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenidos al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var busqueda = texto1.indexOf("curso");
//encuentra la primer coincidencia donde empieza la palabra 

    busqueda = texto1.search("curso");
    //lo mismo de arriba, arrola "-1" si no encuentra la palabra

    busqueda = texto1.match("curso");
    //busca la primer coincidencia y arroja mucha informacion sobre donde lo encontro

    busqueda = texto1.match(/curso/gi);
    //busca todas las coinbcidencias y arroja mucha informacion sobre su ubicacion

    busqueda = texto1.substring(14,5);
    //saca un pedazo de texto determinado por el index y cuantos caracteres

    busqueda = texto1.charAt(44); 
    //saca la letra que esta en la posicion 44

    busqueda = texto1.startsWith("Bi");
    //arroja true o false si el string completo inicia con lo que pongamos 

    busqueda = texto1.endsWith("es");
    //arroja true o false si el string completo termina con lo que pongamos

    busqueda = texto1.includes("JavaScript");
    //esta es keysensitive (diferncia entre M y m), dice si existe o no lo que buscamos en el string
console.log(busqueda);
~~~

## 51.- Funciones de reemplazo
~~~ javascript
'use strict'

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenidos al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var busqueda = texto1.replace("JavaScript", "Symfony");
    //reemplaza lo que tenemos con lo que queremos

    busqueda = texto1.slice(14);
    //corta los caracteres antes del 14 y deja lo que sobra en el string

    busqueda = texto1.slice(14,22);
    //corta los caracteres del 14 al 22

    busqueda = texto1.split(" ");
    //separa el string por espacios y lo mete en un array

    busqueda = texto1.trim();
    //quita espacios por delante y por detras de los strings
console.log(busqueda);
~~~

## 52.- Plantillas de Texto en Javascript 
~~~ javascript
'use strict'

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus apellidos");

//las comillas invertidas van con alt + 96
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son es: ${apellidos}</h3>
`;

document.write(texto);
~~~

## 53.- Arrays basicos
~~~ javascript
'use strict'

//Arrays, Arreglos, Matrices

var nombres = ["Victor", "Pedro", "Pablo", "Arturo", 52, true];
//coleccion de datos agrupados, pueden ser diferentes datos

var lenguajes = new Array("PHP", "JS", "GO", "JAVA");

console.log(nombres);
console.log(lenguajes);
console.log(nombres[2]);
~~~

## 54.- Arrays Avanzados 
~~~ javascript
'use strict'

//Arrays, Arreglos, Matrices

var nombres = ["Victor", "Pedro", "Pablo", "Arturo", 52, true];
//coleccion de datos agrupados, pueden ser diferentes datos

var lenguajes = new Array("PHP", "JS", "GO", "JAVA");

console.log(nombres.length); //saber cuantos elementos tiene metido

var elemento = parseInt(prompt("Que numero de elemento queires sacar del array??",0));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que: "+nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento])
}

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
for(var i=0; i<=lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>")
}
document.write("</ul>");
~~~

## 55.- Recorrer arrays: for, forEach 
~~~ javascript
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+"-"+elemento+"</li>")
});

document.write("</ul>");
~~~

## 56.- Arrays multidimensionales 
~~~ javascript
'use strict'

var categorias = ["accion","terror","comedias"];
var peliculas = ["la vida es bella","amar te duele","gran torino"];

var cine = [categorias,peliculas];

console.log(cine[0][1]);
//asi se accede a un elemento de un array mutidimencional
~~~

## 57.- Operaciones con arrays 
~~~ javascript
'use strict'

var categorias = ["accion","terror","comedias"];
var peliculas = ["la vida es bella","amar te duele","gran torino"];

var cine = [categorias,peliculas];


peliculas.push("Batman");
//añade un elemento a un array existente

peliculas.pop();
//elimina el ultimo elemento de un array


console.log(peliculas);

peliculas.splice(2,1);
//elimina el elemento que seleccione
//de la posicion 2 borrame 1 elemento, osease solo borrame el 2


var pelis = peliculas.join();
//el array lo vuelve un string dividido por comas 
~~~

## 58.- Convertir un string en un array 
~~~ javascript
var cadena = "texto1, texto2, texto3";
var cadema_array = cadena.split(", ")
//vuelve un string a array ceparandolo como querramos
~~~

## 59.- Ordenar arreglos 
~~~ javascript

peliculas.sort(); //ordena de forma alfabetica el array 

peliculas.reverse(); //darle la vuelta al array en el orden inverso
~~~

## 60.- Recorrer arreglos: for in 
~~~ javascript
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lennguaje]+"</li>")
    //lenguaje es el index
}

document.write("</ul>");
~~~

## 61.- Buscar en array 
~~~ javascript
//Busquedas
var lenguajes = new Array("PHP", "JS", "GO", "JAVA");
var precios = [10,20,50,80,12];

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP7"; //haciendo una busqueda en el array
});

var busqueda = lenguajes.find(lenguaje=> lenguaje == "PHP7");
//esto es lo mismo que arriba pero de una manera más compacta

var busqueda = lenguajes.findIndex(lenguaje=> lenguaje == "PHP7");
//nos dice el indice en el cual se encuentra ese elemento en el array

var busqueda = precios.some(precio => precio >= 50);
//nos dice si si o no, existen precios mayores o iguales a 50
~~~

## 62.- Ejercicios de Arrays y Funciones
~~~ javascript
'use strict'

/*
1.- Pida 6 numeros por pantalla y los meta en un array
2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3.- Ordenarlo y mostrarlo
4.- Invertir su orden y mostrarlo
5.- Mostrar cuantos elementos tiene el array 
6.- Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(se valorara el uso de funciones)
*/

var numeros = [];

function mostrarPorPantalla(Texto){
    document.write("<h1>"+Texto+"</h1>");
    document.write("<ul>");
    for (let i = 0; i < numeros.length; i++) {
        document.write("<li>"+numeros[i]+"</li>");
    }
    document.write("</ul>");
}

function mostrarPorConsola(){
    console.log(numeros);
}

for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("Introduce un numero",0));
    numeros.push(numero);  
}

mostrarPorPantalla("Lista de numeros");
mostrarPorConsola();

//ordenarlos

numeros.sort((a,b) => a-b); //ordenarlo de manera numerica
mostrarPorPantalla("Lista ordenada");

//invertir 
numeros.reverse();
mostrarPorPantalla("Invertidos");

//contar cuantos elementos tiene el array 
document.write("<h1>el array tiene: "+numeros.length+" dentro</h1>");



//buscar en el array
var buscando = parseInt(prompt("Cual numero buscas?",0));
var busqueda = numeros.indexOf(buscando);

if(busqueda!=-1){
    document.write("<h1>Numero encontrado, esta en la posicion: "+busqueda+" del array</h1>");
}else{
    document.write("<h1>Numero no encontrado en el array</h1>");
}
~~~

## 64.- Introduccion al DOM- Document Object Model en JavaScript
~~~ HTML
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola mundo javaScript</title>
    
        
    </script>
</head>
<body>
    <h1>Curso javaScript victorRoblesweb</h1>
    <p>Nuestro primer script en JS</p>

    <div id="miCaja">Esta es mi caja</div>

    <script type="text/javascript" src="js/28.-Dom.js"></script>
</body>
</html>
~~~

~~~ javascript
'use strict'
//ojo, el dom debe ser cargado despues de el html si no no podra hacer uso del codigo html
//ya que este no "existe" aun

//Dom
//sirve para modificar el html de la pagina a traves de javascript

var caja = document.querySelector("#miCaja");
//seleccionando la caja que tenemos en html de otra manera como si fuera css 

var caja = document.getElementById("miCaja"); 
//Seleccionando la caja que tenemos en el html
//con innerHTML se saca el HTML que tiene dentro la caja

caja.innerHTML = "Texto desde JavaScript"; //cambiando lo uqe hay dentro del HMTL
caja.style.background = "red"; //cambiando el color a traves de javascript
caja.style.padding = "20px"; 
caja.style.color = "white";

caja.className = "hola hola2";//cambiando la clase de una etiqueta desde javascript

console.log(caja);
~~~

## 65.- Seleccionar y modificar elementos de la pagina
~~~ javascript
'use strict'
//ojo, el dom debe ser cargado despues de el html si no no podra hacer uso del codigo html
//ya que este no "existe" aun

//Dom
//sirve para modificar el html de la pagina a traves de javascript

var caja = document.querySelector("#miCaja");
//seleccionando la caja que tenemos en html de otra manera como si fuera css 

var caja = document.getElementById("miCaja"); 
//Seleccionando la caja que tenemos en el html
//con innerHTML se saca el HTML que tiene dentro la caja

caja.innerHTML = "Texto desde JavaScript"; //cambiando lo uqe hay dentro del HMTL
caja.style.background = "red"; //cambiando el color a traves de javascript
caja.style.padding = "20px"; 
caja.style.color = "white";

caja.className = "hola hola2";//cambiando la clase de una etiqueta desde javascript

//CONSEGUIR ELEMENTOS POR SU ETIQUETA 
var todosLosDivs = document.getElementsByTagName("div");
//obteniendo todas las etiquetas que sean divs
//esto mete todos los divs en un array y se entra a ellos de manera norma

var valor;
for(valor in todosLosDivs){
    if(typeof(todosLosDivs[valor].textContent) == 'string'){
        var parrafo = document.createElement("p"); //creando un parrafo en html
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        //tambien puede utilizarse prepend, para que se coloque antes en el html 
        //agrega algo dentro de un elemento de html
        document.querySelector("#miSeccion").appendChild(parrafo);
    }
    
}

//CONSEGUIR ELEMENTOS POR SU CLASE
~~~

## 66.- Practicando con el DOM - Query Selector, getElementBYld, getElementNyClassName
~~~ javascript
'use strict'
//ojo, el dom debe ser cargado despues de el html si no no podra hacer uso del codigo html
//ya que este no "existe" aun

//Dom
//sirve para modificar el html de la pagina a traves de javascript

var caja = document.querySelector("#miCaja");
//seleccionando la caja que tenemos en html de otra manera como si fuera css 

var caja = document.getElementById("miCaja"); 
//Seleccionando la caja que tenemos en el html
//con innerHTML se saca el HTML que tiene dentro la caja

caja.innerHTML = "Texto desde JavaScript"; //cambiando lo uqe hay dentro del HMTL
caja.style.background = "red"; //cambiando el color a traves de javascript
caja.style.padding = "20px"; 
caja.style.color = "white";

caja.className = "hola hola2";//cambiando la clase de una etiqueta desde javascript

//CONSEGUIR ELEMENTOS POR SU ETIQUETA 
var todosLosDivs = document.getElementsByTagName("div");
//obteniendo todas las etiquetas que sean divs
//esto mete todos los divs en un array y se entra a ellos de manera norma

var valor;
for(valor in todosLosDivs){
    if(typeof(todosLosDivs[valor].textContent) == 'string'){
        var parrafo = document.createElement("p"); //creando un parrafo en html
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        //tambien puede utilizarse prepend, para que se coloque antes en el html 
        //agrega algo dentro de un elemento de html
        document.querySelector("#miSeccion").appendChild(parrafo);
    }
    
}

//CONSEGUIR ELEMENTOS POR SU CLASE

var divsRojos = document.querySelectorAll('#rojo')
console.log(divsRojos);
var div;
for (div in divsRojos) {
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
    
}

//console.log(todosLosDivs);
~~~

## 68.- Manipular el navegador y obtener datos con JavaScript
~~~ javascript
'use strict'

//Browser objct model

console.log(window.innerHeight);//saber la altura de la pagina web
console.log(window.innerWidth); //saber lo ancho de la pagina web
console.log(screen.height);//saber la altura de la pantalla
console.log(screen.width); //saber lo ancho de la pantalla
console.log(window.location.href); //saber en uqe url nos encontramos 

//window.location.href = url //redirige hacia donde querramos ir

//window.open(url) //abre una nueva pestaña que te manda a la url que queremos 
~~~

## 69.- ¿Que es un evento?+Eventos de raton
~~~ HTML
<p>
    <button id="boton" onclick="cambiaColor();">Presioname</button>
    <!--Cuando le damos click al boton el html llama a una funcion de javaScript-->
    </p>

    <p>
    <button id="boton" ondblclick="cambiaColor();">Presioname</button>
    <!--Cuando le damos doble click al boton el html llama a una funcion de javaScript-->
    </p>
~~~

no es lo mejor hacerlo en la parte de html para que no tengamos un codigo "sucio" o un codigo espagueti

~~~ javascript
'use strict'

//Eventos de raton

function cambiaColor(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
}

var boton = document.querySelector("#boton");

//captura el evento click
boton.addEventListener('click', function(){
    cambiaColor();
});
 
//mouse over 
boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
});

//mouse out
boton.addEventListener('mouseout', function(){
    boton.style.background = "black";
});
~~~

## 70.- Eventos de teclado y foco, etc
~~~ javascript
'use strict'

//Eventos de raton

function cambiaColor(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
}

var boton = document.querySelector("#boton");

//captura el evento click
boton.addEventListener('click', function(){
    cambiaColor();
});
 
//mouse over 
boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
});

//mouse out
boton.addEventListener('mouseout', function(){
    boton.style.background = "black";
});

//focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
    console.log("[focus] estas dentro del input");
});

//blur 
input.addEventListener('blur',function(){
    console.log("[blur] estas fuera del input");
});

//keydown 
input.addEventListener('keydown',function(event){
    console.log("[keydown] Pulsando la tecla: ", String.fromCharCode(event.KeyCode));
});

//keypress
input.addEventListener('keypress',function(event){
    console.log("[keypress] Tecla presionada: ", String.fromCharCode(event.KeyCode));
});

//keyup
input.addEventListener('keyup',function(event){
    console.log("[keyup] Tecla levantada: ", String.fromCharCode(event.KeyCode));
});
~~~

## 71.- Evento Load
~~~ javascript
window.addEventListener('load', ()=>{
    //aqui se debe de poner todo el codigo que accede al dom, ya que esto se va a ejecutar despues
    //de que la pagina ya cargue de manera correcta
});
~~~

## 72.- Timers
~~~ javascript
'use strict'

//Timers

function intervalo(){
    var tiempo = setInterval(function(){
        console.log("set interval ejecutado");
        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize ="20px";
        }else{
            encabezado.style.fontSize = "50px";
        }
    }, 500); 

    return tiempo;
}

var tiempo = intervalo();

//esto se ejecutara cada 3 segundos

/*
var tiempo = setTimeout(function(){
    console.log("set interval ejecutado");
    var encabezado = document.querySelector("h1");
    if(encabezado.style.fontSize == "50px"){
        encabezado.style.fontSize ="20px";
    }else{
        encabezado.style.fontSize = "50px";
    }
}, 100);
*/
//esto hace que solo se ejecute una vez 

var stop = document.querySelector("#stop");

stop.addEventListener("click",function(){
    clearInterval(tiempo);
    alert("Has parado el intervalo en bucle");
});
//deteniendo el timer que teniamos 

var start = document.querySelector("#start");

start.addEventListener("click",function(){
    intervalo();
    alert("Has iniciado el intervalo en bucle");
});
//comenzando el timer que teniamos, esto realmente e4s llamar a la funcion que crea el intervalo
~~~

## 73.- Ejercicio completo con el DOM, Eventos y funciones
~~~ html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
    <script type="text/javascript" src="js/32-ejercicio-dom.js"></script>
    <!--
        1. Formulario campos: Nombre, Apellidos y edad
        2. Boton de enviar el formulario: evntos submit
        3. Mostrar datos por pantalla
        4. Tener un boton que al darle click nos muestra datos actuales del formulario
    -->

    <h1>Ejercicio DOM, Eventos y funciones</h1>
    <div class="box">
        <form action="#" id="formulario" onsubmit="return false">
            <!--con el return false hacemos que la pagina no reediriga-->
            <label for="nombre">Nombre</label></br>
            <input type="text" name="nombre" id="nombre"> </br>


            <label for="apellidos">Apellidos</label> </br>
            <input type="text" name="nombre" id="apellidos"> </br>


            <label for="edad">Edad</label> </br>
            <input type="number" name="edad" id="edad"> </br>


            <input type="submit" value="Enviar" id="submit">
        </form>
    </div>

    <div class="box dashed">
        <h3>Información del usuario</h3>
        <hr>
    </div>
</body>
</html>
~~~
~~~ css
.box{
    width: 250px;
    float: left;
    margin: 20px;
    height: 250px;
}

.dashed{
    border: 3px dashed black;
    padding: 5px;
}
~~~
~~~ javascript
'use strict'

window.addEventListener('load', function(){
    console.log("dom cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none"; //ocultar algo por codigo javascript

    //capturar evento submit
    formulario.addEventListener('submit',function(){
        console.log("enviando formulario")

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        //con el value sacamos o obtenemos la inbformacion que esta dentro de 
        //el formulario

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
~~~

## 74.- Validar formulario con JavaScript puro
~~~ javascript
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
~~~

## 75.- Operador this
el operador dthis hace referencia en el elemento que estoy haciendo click en ese momento o en el cual estoy en su evento 
~~~ javascript
//mouse out
boton.addEventListener('mouseout', function(){
    boton.style.background = "black";
});

//puedo poner:
boton.addEventListener('mouseout', function(){
    this.style.background = "black";
});
~~~

## 76.- JSON - ¿Que es y como usar los objetos?
~~~ javascript
'use strict'

// JSON - JavaScript Object Notation

var pelicula = {
    titulo: "Batman vs Superman",
    year: 2017,
    pais: "Estados Unidos" 
}

console.log(pelicula.titulo); //accedemos a la informacion de esta manera

var peliculas = [
    {titulo: "la verdad duele", year: 2016, pais: "francia"},
    pelicula
];
//se pueden meter json dentro de los json 

console.log(peliculas);
var caja_Peliculas = document.querySelector("#peliculas");
var index;
for (index in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_Peliculas.append(p);
}
~~~

## 77.- Como trabajar con el LocalStorage
~~~ javascript
'use strict'

//el local storage es una memoria que almacena por unos momentos en el navegador
//en cada pagina web tenemos un lcoal storage diferentre

//comprobar disponibilidad del local storage
if (typeof(Storage) != 'undefined') {
    console.log("local storage disponible");
}else{
    console.log("local storage no disponible");
}

//guardar datos en el local storage 
localStorage.setItem("titulo","Curso de Symfony de Victor Robles");
//titulo es la key como se llama donde guardamos la info
//se guarda en almacenamiento/almacenamiento local

//Recuperar elemento
var valor = localStorage.getItem("titulo");
document.querySelector("#peliculas").innerHTML = valor;

//Guardar objetos
var usuario = {
    nombre: "victor",
    email: "victor@victor.com",
    web: "victor@victor.com"
};

// para guardar datos o mandarlos es combertirlo en string
localStorage.setItem("usuario",JSON.stringify(usuario));

//recuperar objetos
var userJS = JSON.parse(localStorage.getItem("usuario"));
console.log(userJS);

document.querySelector("#peliculas").append(" " + userJS.nombre);
~~~

## 78.- Ejercicio completo con el LocalStorage
~~~ HTML
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de JS</title>
</head>
<body>
    

    <h1>Añade tu pelicula</h1>
    <form action="" id="formPeliculas">
        <input type="text" name="addpelicula" id="addpelicula">
        <input type="submit" value="Guardar">
    </form>

    <h2>Peliuclas</h2>
    <div id="peliculas">
        <ul id="peliculas-list">

        </ul>
    </div>


    <h1>Borra tu pelicula</h1>
    <form action="" id="formBorrarPeliculas">
        <input type="text" name="borrarPelicula" id="borrarPelicula">
        <input type="submit" value="Borrar">
    </form>

    <script type="text/javascript" src="js/35.-ejercicioLocalStorage.js"></script>
</body>
</html>
~~~


~~~ javascript
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
~~~

## 79.- Fetch y peticiones asincronas
para hacer peticiones necesitamos una API que nos mande los datos, utilizamos: [REQRES](https://reqres.in)
~~~ HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consumo servicio rest con fetch</title>
</head>
<body>
    <h1>Listado de usuarios</h1>
    <div id="usuarios">
        <span class="loading">Cargando... </span>
    </div>

    <!--Fetch es la manera de hacer peticiones a un backend-->
    
    <script type="text/javascript" src="js/36.-Fetch.js"></script>
</body>
</html>
~~~

~~~ javascript
'use strict'
//fetch y peticiones a servicios / apis rest
//fecth es una manera de pedir informacion a un backend

var div_usuarios = document.querySelector("#usuarios");

var usuarios = [];
//el fetch accede a un servicio remoto, hace la peticion
fetch("https://reqres.in/api/users?page=1")
    .then(data => data.json()) //obten datos y pasalo a json 
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((user,i) =>{
            let nombre = document.createElement("h3");
            nombre.innerHTML = i+" " + user.first_name + " " + user.last_name;
            div_usuarios.append(nombre);
            document.querySelector(".loading").style.display = "none";
        })
    });
~~~
## 80.- Promesas y fetch
como fetch regresa una promesa podemos encadenarlas para que se hagan una despues de la otra de esta manera
~~~ javascript
'use strict'
//fetch y peticiones a servicios / apis rest
//fecth es una manera de pedir informacion a un backend

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

var usuarios = [];
//el fetch accede a un servicio remoto, hace la peticion

getUsuarios()
    .then(data => data.json()) //obten datos y pasalo a json 
    .then(users => {
        listadoUsuarios(users.data);

        return getJanet();
    })
    .then(data => data.json())
    .then(user => mostrarJanet(user.data));



function getUsuarios(){
    return fetch("https://reqres.in/api/users?page=1");
}    

function getJanet(){
    return fetch("https://reqres.in/api/users/2");
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
~~~

## 81.- Como crear Promesas
~~~ HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consumo servicio rest con fetch</title>
</head>
<body>
    <h1>Listado de usuarios</h1>
    <div id="usuarios">
        <span class="loading">Cargando datos globales... </span>
    </div>

    <hr>
    <div id="profesor">
        Cargando profesor
    </div>
    <hr>
    <div id="janet">
        <span class="loading">Cargando usuario... </span>
    </div>

    <!--Fetch es la manera de hacer peticiones a un backend-->
    
    <script type="text/javascript" src="js/36.-Fetch.js"></script>
</body>
</html>
~~~

~~~ javascript
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
~~~

## 82.- Capturar error en las promesas
~~~ javascript
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
    
~~~

## 83.- Capturar errores
~~~ javascript
'use strict'

try {
    /*en este pedazo de codigo pondremos el codigo 
    que pueda llegar a fallar y querramos atrapar el error*/

    var year = 2019;
    alert (yea);
    //asi el porgrama no colapsa y solo como "encapsula los errores"
} catch (error) {
    //atrapo el error
    console.log(error);
}
~~~

## 84.- Fechas en JavaScript
~~~ javascript
'use strict'

//obtener la fecha que es en ese momento
var fecha = new Date();

var year = fecha.getFullYear(); // obtener le año

var mes = fecha.getMonth(); //obtener el mes, el mes 0 es enero

var dia = fecha.getDate(); //obtener el dia

var hour = fecha.getHours(); //obtener la hora

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hour}
`;

console.log(textoHora);
~~~

## 85.- Funciones matemáticas en JS
para usar las funciones matematicas es necesario usar la libreria **math** [Referencia](https://www.w3schools.com/js/js_math.asp)
~~~ javascript
console.log(Math.random());
~~~

---
hasta este momento solo he visto javascript de manera nativa sin ningun tipo de libreria que nutra el javascript
---

## 87.- jQuery - ¿Que aprenderé?
es una libreria para javascript 

## 89.- Integrar jQuery
~~~ javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprendiendo jQuery</title>
</head>
<body>
    <h1>Aprendiendo jQuery con Victor Robles WEB</h1>
    <p>Ejercicios de jQuery</p>

    <!--Cargando o integrando jQuery a los proyectos-->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <!--Es importante decir que se puede de dos maneras:
        copiar el link y introducirlo como si fuera un script como lo hago ahora
        o descargar todo lo que tiene ese url pegarlo en un archivo de js y 
        luego cargarlo como cualquier archivo de javaScript
    -->

    <script>
        $(document).ready(function(){
            console.log("jQuery y la WEB cargados");
        });
    </script>
</body>
</html>
~~~

## 90.- Diferencias entre jQuery 1, 2 y 3 - Que cambian en las diferentes versiones
la compatibilidad con buscadores antiguos

## 91.- Selector de ID
~~~ javascript
'use strict'

//con esto podemos saber si ya esta listo el jQuery
//el objeto dolar se refiera a jquery
$(document).ready(function(){
    
    //selector de ID
    var rojo = $("#rojo");

    //con la funcion css puedo cambiar el css desde javaScript
    rojo.css("background","red")
        .css("color","white"); 

    $("#amarillo").css("background","yellow")
                  .css("color","green");  

    $("#verde").css("background","green")
               .css("color","white");

})
~~~

## 92.- Selectores de Clases
~~~ javascript
//selector de Clase
    //seleccionar las cosas como si fueran css
    var mi_clase = $(".zebra");
    console.log(mi_clase);

    //le pone este css a todos los elementos que esten en mi_clase
    mi_clase.css("border","5px dashed black")

    $(".sin_borde").click(function(){
        console.log("click dado");
    });
~~~

## 93.- Seleccionar etiquetas
~~~ javascript
//selectores de etiqueta
    var parrafos = $("p");

    parrafos.click(function(){// usando evento click
        $(this).removeClass("zebra");
    });
~~~

## 94.- Selector de Atributo
~~~ HTML
    <ul>
        <li><a href="#" title="google">Ir a Google</a></li>
        <li><a href="#" title="facebook">Ir a facebook</a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
    </ul>
~~~

~~~ javascript
//selector de atributo
    //seleccionamos loq ue es su titulo tengan...
    $('[title="google"]').css("background","yellow");
~~~

## 95.- Find y parent
~~~ javascript
//otros
    $('p,a').addClass("margen_superior"); //seleccionar varias cosas

    //dentro de el div caja busca coincidencias con resaltado
    var busqueda = $("#caja").find(".resaltado");

    //sal de la caja donde estas y busca fuera del anidamiento que ya tiene 
    var busqueda = $("#caja").eq(0).parent().parent().parent().find(".resaltado");
    console.log(busqueda);
~~~

## 96.- Eventos Mouse y Hover
~~~ javascript
    //Mouse over y Mouse out
    var caja = $("#caja");

    caja.mouseover(function(){ //pasar sobre esta cosa
        $(this).css("background","red");
    });

    caja.mouseout(function(){ //salir de esta cosa
        $(this).css("background","green");
    });
~~~

## 97.- Hover
~~~ javascript
function cambiaRojo(){ //pasar sobre esta cosa
        $(this).css("background","red");
    }

    function cambiaVerde(){ //salir de esta cosa
        $(this).css("background","green");    
    }

    //Hover
    caja.hover(cambiaRojo,cambiaVerde);
    //cuando entramos usa cambia rojo y cuando sales usa cambia verde
~~~

## 98.- Click y doble click
~~~ javascript
//click, DobleClick
    caja.click(function(){
        $(this).css("background","blue")
               .css("color","white");  
    });

    caja.dblclick(function(){
        $(this).css("background","pink")
               .css("color","yellow");  
    });
~~~

## 99.- Blur y focus
~~~ javascript
    //fous y blur
    //cuando me enfoco la caja 
    var nombre = $("#nombre");

    nombre.focus(function(){
        $(this).css("border","2px solid green")
    });

    nombre.blur(function(){
        $(this).css("border","1px solid #ccc")
        $(this).val(); //saber lo que hay dentro de una caja de texto
        $("#datos").text($(this).val()).show(); //mostrando algo que apague por display none

    });
~~~

## 100.- Mouse move y más ejemplos
~~~ javascript
//MouseMove
    //este metodo como que persigue al raton o dice las coordenadas 
    //que tien el raton en la pantalla
    
    $(document).mousemove(function(){
        console.log(event.clientX);
        console.log(event.clientY);
        $("#sigueme").css("left",event.clientX);
    });
~~~

## 101.- Trabajar con el DOM y los textos
~~~ javascript
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
~~~

## 102.- Efectos en jQuery
~~~ javascript

~~~
*****************************************************
## XX.- 
~~~ javascript

~~~
