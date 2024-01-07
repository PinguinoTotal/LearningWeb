## Curso de HTML5 desde 0: El más completo en español

extras: 

poner imagenes en HTML

clase 8 curso: Master en JavaScript
~~~html
<img src = "imagenes/perro.jp" alt = "imagen de un perro" title = "Foto de perro" width = "225px" height = "450px">
~~~
el **src** nos dice cual es la ruta que tiene la imagen
el **alt** sirve para que se muestre ese texto si la imagen no carga 
el **title** sera lo que se muestre cuando pasamos frente a la imagen con el raton 
el **width** es el ancho que tendra la imagen 
el **height** es la altura que tendra la imagen
se tiene que usar solo una de estas para que la imagen no se deforme de una manera tan fea

clase 10 curso: MAster en JavaScript
Formularios
~~~html
    <form action="">
        <!--Type text nos hace una caja donde se podra meter texto -->
        <p>
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" placeholder="escribe tu nombre">
        </p>
        
        <!--Type textarea nos hace una caja donde se podra meter más texto -->
        <p>
            <label for="descripcion">Descripcion</label>
            <textarea name="descripcion"></textarea>
        </p>
    
        <!--Type radio nos da opciones que solo podemos seleccionar una -->
        <input type="radio" name="genero" value="hombre"> Hombre <br/>
        <input type="radio" name="genero" value="mujer"> Mujer <br/>
        <input type="radio" name="genero" value="nada"> Nada <br/>

        <!--select nos da una caja que despliega diferentes opciones que ya definimos-->
        <select name="generodos" id="">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="nada">Nada</option>

        </select>

        <!--type submit nos da un boton para enviar el formulario-->
        <input type="submit" value="">
        
    </form>
~~~



3.- (observaciones) Usar firefox, visual stuidio code, poner extendiones en firefox, tambien ya puede utulizar completamente visual studio code

4.- El index.html indica a donde entrar primero

5.- En html esta echo con etiquetas

todas las etiquetas se abren y se cierran, excepto las que no tienen   

6.- La base de HTML es el Doctype este especifica que HTML esta siendo usado

**ctrl + u** deja ver los cofigos fuentes de las paginas 

El "tittle" es como se ve en la pestaña y el nombre eb google

7.- 
~~~html
<hr/> hace una linea 
~~~

8.- 
~~~html
<br/> salto de linea (por lo general se usa dentro de las etiquetas <p>)
&xxxx poner simbologia 
&nbsp poner espacios en un parrafo 
<strong> negritas
<em> cursiva 
<i> cursiva
<blockquote> hacer una cita
~~~

9.- 
~~~html
<header> un titulo 
<nav> menu
<!----> comentario
~~~

10.- 
~~~html
<ol> listas ordenadas
<li> elementos de la lista
<ul> listas desordenadas se le puede indicar la figura que queremos que aprezca 
~~~

11.- 
~~~html
<dl> listas de definicion
<dt> cosas a definir
<dd> definicion 
~~~
  
19.- 
~~~html
<table>
    <tr>
        <th> 
        <th> (th)
        <th> (th) 
    </tr>
    <tr>
        <td> (tr) 
        <td> (th)
        <td> (th) 
    </tr>
    <tr>
        <td> (tr) 
        <td> (th)
        <td> (th) 
    </tr>
</table>
~~~

<table>
    <tr>
        <th> 
        <th> (th)
        <th> (th) 
    </tr>
    <tr>
        <td> (tr) 
        <td> (th)
        <td> (th) 
    </tr>
    <tr>
        <td> (tr) 
        <td> (th)
        <td> (th) 
    </tr>
</table>

dentro de esta seccion puede verse el codigo con el que nse hizo la tabla 

20.- los bloques toman todo el ancho de la pagina 

los elementos en linea se ponen uno detras de otro 

21.- Los labels se asocian para que al dar clic en ellos te lleven a la parte del formulario

28.- Para el css se tienen 

_Selectores de etiqueta_ "la etiqueta"

_Selectores de id_  "#"

_Selectores de clase_ "."

~~~html
<link rel="stylesheet" type="text/css" href=styles.css> <!--esta es la manera en que una archivo html y un css son linkeados, este codiogo debe ir en el html en la parte superior-->
~~~

29.- Se validasn los formularios en HTML, en JavaScrip y en PHP

39.- Si se puede repetir los selectores de etiqueta y clase, pero no los de id