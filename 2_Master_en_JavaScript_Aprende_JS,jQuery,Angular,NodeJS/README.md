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

~~~



