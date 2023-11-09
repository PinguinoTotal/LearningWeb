# Estas son las notas que he echo de los cursos tomados en Udemy (profesor victor robles web) de desarrollo web, tambien estan complementados con informacion de youtube

## Algunos extras:
con **f1** se saca un buscador de visual studio code 

## Curso de HTML5 desde 0: El más completo en español

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
<br/> salto de linea
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

21.- Los labels se asocian para que al dar clock en ellos te lleven a la parte del formulario

28.- Para el css se tienen 

_Selectores de etiqueta_ "la etiqueta"

_Selectores de id_  "#"

_Selectores de clase_ "."

~~~html
<link rel="stylesheet" type="text/css" href=styles.css> <!--esta es la manera en que una archivo html y un css son linkeados, este codiogo debe ir en el html en la parte superior-->
~~~

29.- Se validasn los formularios en HTML, en JavaScrip y en PHP

39.- Si se puede repetir los selectores de etiqueta y clase, pero no los de id

## Curso de git y la terminal de comandos para programadores 

2.- simbolos del sistema o CMD se usa en windows. por lo general se usa linux o IOS para el desarrollo, por ende me enfocare más a eso usando **Cygwin** (esta es un emulador de la terminal de linux en windows)

### Consola de windows

~~~CMD
dir : ver directorios dentro del directorio 
cd : change directory, moverse al directorio que se le indique 
cls : clean screen limpirar pantalla
shutdown : apagar equipo
mkdir : hacer una nueva carpeta
rmdir : borrar carpeta
del : borrando archivos
copy :  copiar archivo
move : mover archivos
Tab : autocompleta los rqchivos que buscas
help : todos los comandos que existen en windows
find : bsuca el archivo o cadena de caracteres que le has dado 
find "pru" *.txt : busca pru que sean archivos .txt
find "pru" *.* : busca cualqueir aqrchivo o carpeta que tenga la palabra pru 
more "archivos.txt" : ve lo que hay dentro de el archivo
time : ver la hora
tasklist : ver las tareas que hace la pc
help <comando> : ves la ayuda de ese comando
~~~

3.- Discleimer que nos dice que se trabajara con Unix e instalar Cygwing

4.- Instalacion de Cygwing

### Consola de Unix
5.-
~~~
cd : change directory moverse al directorio que se indique 
man<comando> saca el manual de ese comando 
clear : limpia la pantalla
date : fecha
cal : calendario 
history : ver el historial de comandos 
history -c : borrar el historial de comandos 
ls : ver directorio
ls -l : listar en lista
ls -lhs : listar en lista humano y archivos ocultos
ls -lhr : listar directorio y que hay dentro de los directorios
mkdir : crear carpeta
mkdir probando/imagenes -p : crea directorios probando con subdirectorios imagenes  
pwd : dice en que directorio estas
rmdir : borrar imagenes
rm -rf : borrar ficheros forzando 
mv : mover archivos
cp : copiar archivos
df -h : ver almacenamiento
du -h : ver cuando pesa un directorio
~~~

11.-
~~~
ps : ver los proicesos
kill : "pid" cierra el proceso
kill all firefox : cierra todas las ventanas de firefox
~~~

15.- los commits son versiones de nuestro programa y se puede volver a estos por si el programa llega a fallar 

17.-
~~~
git config --global user.name "abe" : nombre de usuario 
git config --global user.email "abe@abe" : correo electronico
git config --list : ver nombre de usuario y correo propio 
~~~

18.- 
~~~
git help <comando> : manual del comando que querramos saber más 
~~~

19.- 
los repositorios son proyectos de git
~~~
git init : creando un repositorio
~~~

20.- 
~~~
git clone "url" : clonar un repositorio de la web
~~~

21.-
~~~
git status : nos dice los ficheros que podran ser comiteados
git add "archivo" : archivo añadido y listo para ser comiteado
git rm --cache "archivo" : archivos eliminados que seran comiteados
~~~

22.-
Cuando modificamos los archivos que van a ser comiteados debemos hacerles "add" para que se puedan comitear y aplicar los cambios

~~~
git checkout "archivo" : vuelve a la version que ya estaba lista para ser comiteada
git diff "archivo" : me dice que cambios que he modificado
~~~

23.-
~~~
touch : puede cerrar cualquier tipo de archivo
touch "archivo.terminacion" : crea ese archivo
.gitignore : creara un archivo que dentro de este se debe poner que fichero debe ser ignorado por git
~~~

24.-
un commit es un punto de partida del codigo, una version a la cual podemos volver cuando queramos y comparar diferencias entre los codigos
~~~
git commit -m "texto descriptivo" : crea el commit con el comentario descriptivo
git log --oneline : muestra los comentarios y la "serie" del commit
git log : muestra todos los detalles de lso commits
git commit -am "texto descriptivo" : guarda el commit sin necesidad de hacer "add" a los archivos
git diff xxx yyy : compara diferentes comits con sus numeros de serie 
~~~

25.-
~~~
git add . : añade todos los archivos para ser commiteados
git reset HEAD "archivo" : devuelve el archivo antes de hacer add
git reset . : devuelve todos los archivos antes del add
git checkout "archivo" : vuelve a la version que ya estaba lista para ser commiteada 
~~~

26.-
~~~
git reset --hard HEAD ~ "index" : se coloca y borra en el commit que querramos borrando los commits anteriores la cuenta inicia desde 0 
git reset --hard "numero de serie" : se pone el numero de serie que ahora querramos que sea la cabeza de los commits
~~~

27.-
~~~
git checkout "serial del commit" : vuelve al commit seleccionado, en estos los commits anteriores no se borran
git cheackout master : cambia de donde se hacen los commits a la "principal" si se cambia la "rama" desde el que se hace commits puede que estos no se guarden al no estar en la "rama" correspondiente
~~~

28.-
~~~
git log --grep "palabras del titulo del commit" : busca el ID del commit que tenga las palabras en su titulo
git log -s "codigo" : busca dentro del codigo y entrega el commit, todo esto fue para buscar commits 
~~~

29.-
~~~
git branch "nombre de la rama" : crea una nueva rama
git branch : aparace la lista de las ramas que hay creadas en el proyecto (tambien se puede ver en que rama estamos con el "git status")
git checkout "nombre de la rama" : ve hacia una rama ya creada
git branch -D "nombre de la rama" : elimina la rama completa de commits
git merge "rama a unit" : unir la rama a la rama master, debemos estar en la rama master para esto 
~~~

30.-
~~~
git stash : guarda temporalmente los cambios que se estaba hhaciendo en esa rama, sin guardarlo definitivamente
git stash show : muestra el stash "memoria temp" pero esto es global
git stash pop : saca los cambios sin guardar para poder trabajar con ellos y guardarlos bien 
~~~

31.-
~~~
git stash clear : limpiar el stash
~~~

32.-
~~~
git cherry-pick "id del commit" : trae solo un commit en especifico a la rama en la que estoy trabajando, toma el commit de otra rama y la trae a esta
~~~

33.- 
a veces puedes crear conflictos porque más personas tocan la misma linea de codigo
~~~
git commit -m "[MERGE CONFLICT SOLVED] texto descriptivo" : despues de corregir el problema en el commit con este comando y ya deja de existir el conflicto
~~~

### Usando Github C:

34.-
~~~
git push origin master : subir los archivos
~~~
para vincular la carpeta con el github, github es muy descriptivo de que se debe hacer
~~~
git fetch --all : bajar ramas remotas
git pull origin master : baja las cosas de remoto
~~~

extras.-
~~~
git push --mirror : sirve para poder subir todas las ramas que tengo en el repo localm asi teniendo todas las ramas en github
git branch -a : muestra todas las ramas locales y remotas
git pus origin -d "nombreDeRama" : borra la rama su ya esta borrada en local, ya que le indicamos que debe borrar esa rama en remoto ya que localmente ya fue borrada 
~~~


## Mater en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap 
Datos extras:
~~~css
/**/ /*Poner comentario en css*/
~~~

---

5.- Reaprendiendo HTML

23.- el ID esta echo solo para 1 elemento del html

30.- Los fondos pueden o no repetirse y hacia donde deben repetirse 
~~~css
repeat-x : /*repetir solo en eje x*/
repeat-y : /*repetir solo en eje y*/
no repeat : /*no repetir la imagen*/
~~~

38.- 
~~~css
margin 0px auto; /*centrar una caja*/ 
~~~

40.-
para que no todo este uno detras de otro al dlotarlo se usa en un "div" con clase clearfix
~~~css
.clearfix {
    float: none;
    clear: both;
}
~~~

56.- el **Favicon** es el mini lofo que aparace en la pestaña del buscador

67.- las flechitas **>** en CSS dan a enternder especificidad, ya que si y solo su y solo si entran asu se aplicara el formato
~~~css
.list style /*cambia los iconos de las listas no organizadas*/
~~~

68.- EL **important** hace que force aparecer lo que se quiere ver 

72.- para iconos se necesita visitar la pagina [WEB SYMBOLS](https://fonts2u.com/websymbols-regular.font)

77.- Los **mediacueris** son ajustes a la pagina cuando se hace pequeña por los dispositivos moviles 

Los pasos para hecr responsive es usar porcentajes y luego los mediaqueris

78.- el **meta viewport** nos dice que sera una pagina adaptable

87.- El **transform** no hace que la web se mueva, solo se transforma el elemento

92.- 
~~~html
<label> <!--es para hacer el texto que estara asociado a un formulario-->
~~~

97.- Se pueden hacer gradientes entre colores, es posible usando:
~~~css
background: linear-gradient (to bottom, color 0%, color 100%)
Cursor pointer : /*hacer que cuando pases sobre algo el cursor se haga manita*/
~~~

98.- Para que las transmiciones o cambios por codigo no sean tan raras al cambiar se puede susar 
~~~css
transition: all 300ms;
~~~
el **all** se refiere a todos los cambios que se le hacen y los **300ms** el tiempo que se hacen los cambios  

103.- El **display block** hace que el texto[enlace] abarque todo el espacio del contenedor y asi todo pueda ser clicleable 

109.- Las animaciones pueden jacer en CSS con:
~~~css
animation: nombreDeAnim DuracionAnim tipoDeAnim
~~~

111.- para que algo no se vea se tiene que poner la opacidad
~~~css
opacity: 0;
~~~

114.- para que el sitio pueda ser responsive se debe de poner en el html
~~~html
<meta name="viewport" content="width=devcie-width; initial-scale=no" />
~~~

115.- Para poder hacer el responsiv elo mejor es hacer una nueva hoja en CSS

116.- Al parecer el profesor lo hace a ojo y como vaya quedanod y va recortando ajustando la pagina como vaya quedando

118.- para hacer **Mediaqueris** es necesario hacer
~~~css
@media (max-width: "tamaño en num px"){
    /*cambios que se haran en el la pagina cuando se alcance los pixeles mencionados*/ 
    display: none; /*hacer que lo que staba habi ya no se muestre*/
}
~~~

### SASS
***SASS es un preprocesador de css, esto quiere decir que se debe hacer un archivo .scss y este al hacer un codigo en la consola generarar el .css a partir de .scss y este css sera el que estara integrado al codigo html como css normal***

125.- **SASS y LESS** le daran más funciones de "programacion" a CSS como variables y funciones anidadas

126.- los ficheros SASS terminan en **scss**

127.- 
~~~scss
$variable: red; //asi se hacen las variables
~~~
para obtener el **codigo CSS desde SASS** debe compilarse desde la consola, con la consola se debe ur hasta donde esta el archivo (navegar a traves de la consola) .scss y ejecutar:
~~~CMD
sass --watch "nombre.scss" "nombredel.css" //con esto siempre esta viendo los cambios del codigo sass y haciendo los cambios pertinentes en el css
CTRL+C : para parar los cambios 
~~~

129.- 
~~~scss
@Use 'archivo.scss'; // esto incluye los codigos de los demas scss, esto es como incorporar una libreria SASS a tu documento SASS
~~~

130.- Los mixins son el nombre que se le dan a las funciones
~~~scss
//Poner comentario en SASS
@include function(); // haciendo la funcion
@mixin funcion(){}; //llamando la funcion
@mixin funcion($colorm $size){}; // llamando la funcion con carga
~~~

131.- las herencias son funciones sin necesidad de pasarle parametros, todos pueden usarlas **%nombre_alerta** cuando alerta **@exten de %nombre_alerta** usando herencia 

132.- pues se pueden usar las sumas, restas, multiplicacion y divisiones usando: **( + - / * )**

### LESS
***Al igual que SASS este es un preprocesador, solo que este cada que se quiera tener el codigo en css debe ser ejecutada la linea de codigo que hara que se genere el codigo, y algunas notaciones de esta cambian***


136.- 
~~~less
@variable = red;
~~~
en **LESS** cambia el como hacer variables y que se pueden hacer variables string
~~~CMD
lessc "nombre.less" "nombre.css" //hacer que genere el codigo css
~~~

137.- anidacion igual que en **SASS* 
~~~less
.funcion(@size, @color) {}; //haciendo una funcion cargada
.funcion(); //llamando la duncion
~~~


### Flexbox

141.- Flexbox solo funcuiona dentro de un div o sections o articles

143.- dentro del codigo css le pondremos _display: flex;_ esto hace que tolo lo que este dentro del div se empiece a acomodar 

la caja con flexbox se adaptan a su contenido

144.-
~~~css
flex-direction: column; /*define columnas*/
flex-direction: raw; /*define filas*/
~~~

145.-
~~~css
flex-wrap: wrap; /*que envuelva a lo que tenga dentro y no deje que se salga de la caja "flotandolo hacia abajo"*/
flex-flow: ;/*es la manera comprimida de "flex-direction y flex-wrap"*/
~~~

146.-
~~~css
Order: 1; /*depende de como se muestran las cajas en orden, con solo un numero*/
~~~

147.-
~~~css
flex-grow:1; /*este se agrega a cada una de las cajas, dice que tanto puede crecer o como deben de verse en tamaño con respecto a las demas cajas*/
~~~

148.-
~~~css
flex-shrik: ;/*lo mismo que grow pero lo hace pequeño*/
~~~

149.-
~~~css
flex-basis: ; /*la base del width que no puede ser más pequeño que esto*/
~~~

150.- 
~~~css
justify-content: left, rigth, center; /*mueve la caja a la derecha o a la izqueira o al centro*/
justify-content: space; /*le da diferentes tipos de espaciados entre kas cahas ALINEACION HORIZONTAL*/ 
~~~

151.-
~~~css
align-items: ;/*ALIEANCION VERTICAL*/
~~~

### GRID Layaout

163.- es una manera de maquetar como en "excel"

cuadricula la pagina para que sea mas "facil"

es una manera más de maquetar webs, como flexbox y flotar los elementos, ni mejor, ni peor

166.- **GRID** solo actua en los div y no en todo el body, al igual que flexbox

~~~css
grid-gap: 1px; /*dar espacio entre los elementos grid*/
grid-template-columns: 50% 50%; /*haciendo dps columnas que ocupen el 50% estas deben poner cuanto quiero en cada una de ellas, y cuanto quiero que sean*/
~~~

167.-
~~~css
grid-template-columns: repeat(4,25%); /*es lo mismop que arriba solo que se especifica cuantas columnas y que porcentaje deben de ocupar*/
grid-template-columns: 1fr; /*utilizando una fraccion que son iguales entre todas y utilizan el mismo espacio*/
~~~

168.-
~~~css
grid-template-rows: ; /*igual que colims, se les puede dar diferentes tipos de ancho en fracciones*/
~~~
es mejor usar fracciones y porcentajes por el tema del responsive 

169.- Para poder ver la rejilla de grod en el inspector de firefox del lado derecho se va a "disposicion" seleccionar superponer rejilla y mostrar número de linea

~~~css
grid-column-start: 1; /*linea en la cual empezara la caja que se expande*/ 
grid-column-end: 1; /*linea hasta la cual se expandira*/
grid-colimn: "indexInicio / indexFin" /*lo mismo que arriva pero compacto*/
~~~
si ocupamos más de las filas que tenemos se acomodara como pueda

170.-
~~~css
grid-row-start: 1; /*desde que linea vertical empieza la caja*/
grid-row-end: 1; /*hasta que linea vertical termina la caja*/
grid-row-start: "indexInicio / indexFin"; /*lo mismo que arriva pero compacto*/
~~~

173.- la caja debe llamarse **display:GRID**

175.- Se puede tener elementos grid dentro de un grid ya creado

176.- para centrar los elementos de las cajas primero debe convertirse a flex, ahi ya se ajusta 

### GRID AREAS

177.- se puede maquetar con "texto" usando areas

~~~css
grid-template-columns:
"cabecera cabecera cabecera"
"menu menu menu"
"contendio contenido contenido"
"pie pie pie";
~~~

y despues a cada elemento que usara esas areas se le coloca:

~~~css
grid-area: menu;
~~~

si se usa "." se dice que es un espacio

178.- 
~~~css
grid-columns-gap: 1px; /*espacio entre columnas*/
grid-row-gap: 1px /*espacio entre las filas*/ 
~~~

179.- 
~~~css
align-items ; /*sirve para ser usado en grid tambien*/
justify-items;
~~~

en el repeat se puede usar **auto-fill** para que llene con todos los bloques que pueda

### BOOTSTRAP

183.- Bootstrap facilita hacer paginas web ya que tiene cosas pre echas nos ayuda a no estar escribiendo tanto texto CSS que sea tan repetitivo dandonos más cosas pre echas y que solo se implementan en las paginas

184.- Para poder usar bootstrap se debe linkear los paquetes minimos de bootstrap y añadir los jquerys en la parte baja de este con sus archivos json, creo que bootstrap se usa dentro de html para darle estilos rapidos usando css prehecho 

185.- Bootstrap se sustenta en como son llamadas las clases, dependiendo de estas, se veran diferentes cosas 

~~~html
class = "row"; <!--Crea una fila-->
"col-12"; <!--Ocupa las 12 columnas-->
"col" <!--Es como auto, autorrellena el espacio que tenga-->
"bg" <!--Backgorund-->
"text" <!--text color-->
"p" <!--padding-->
"w" <!--width-->
"pr" "pl" <!--padding rigth y left-->
~~~

por defecto bootstrap tiene 12 columnas 

Lo mejor es trabajar con bootstrap y con su documentracion

188.-Cuandi se usa solamente el **"col"** la caja buscara adaptarse lo mejor posible, si se indica un **"col-y"** la o las cajas que esten en el mismo row con clase col, se adaptaran automaticamente 

~~~html
"m" <!--Margin-->
"mt" <!--Margin top-->
"justify-content-start" <!--Centrado izquierdo, derecho o centro-->
~~~
bootstrap usa por dentro flexbox asi que justify sirve aqui 

190.-
~~~html
"align-self-start o end center" <!--centra verticalmente ese solo elemento-->
~~~

192.-
~~~html
"order-1" <!--Igual que en flexbox-->
~~~

193.-
~~~html
"offset-1" <!--Mete un hueco entre el elemnto anterior y este-->
~~~

194.- puedes hacer responsive desde html poniendo el tamaño de pantalla 

---
### MEDIDAS DE LAS DIFERENTES PANTALLAS 

<table>
    <tr>
        <th> Breakpoint
        <th> Clase fix (esto es de bootstrap)
        <th> Dimensiones 
    </tr>
    <tr>
        <td> Extra small 
        <td> no existe
        <td> <576px 
    </tr>
    <tr>
        <td> Small 
        <td> sm 
        <td> >=576px 
    </tr>
    <tr>
        <td> Medium 
        <td> md
        <td> >=768px 
    </tr>
    <tr>
        <td> Large 
        <td> lg
        <td> >=996px 
    </tr>
    <tr>
        <td> Extra large 
        <td> xl
        <td> >=1200px 
    </tr>
    <tr>
        <td> Extra extra large
        <td> xxl
        <td> >=1400px 
    </tr>
</table>

---

**col-3 col-md-12** normal usa col3 en un tamaño mediano usa col 12

195.- en bootstrap en la parte de breakpoints se encuentran las medidas estandares de celulares y pantallas para hacer bien los mediaqueris

196.-
~~~html
d-sm-none : <!--culta esto en la pantalla small-->
~~~ 
d-none esta ya trabaja con el tamaño col-12 extra small

199.-
~~~html
"border" <!--agrega un borde-->
"rounded" <!--redondear los bordes de las cajas-->
"rounded-circle" <!--intenta hacer un circulo-->
~~~ 

200.-
~~~html
"float-left" <!--flota las cajas hacia la izquierda como siempre-->
"clearfix" <!--limpia los flotados-->
"float-md-none" <!--se modifica el float dependiendo del tamaño de la pantalla-->
~~~ 

201.- Los colores parecen ser limitados a ser nombres de los colores 

202.-
~~~html
"mx" <!--margenes en el eje x-->
"my" <!--margenes en el eje y-->
"m-n2" <!--margenes negativos de 2-->
"mx-auto" <!--centrar la caja dentro de la caja que lo contiene-->
"mt" "mb" "mr" "ml" <!--pos ya te lo imaginas-->
~~~ 

203.-
~~~html
"shadow" "shadow-none" "shadow-5m"
~~~

204.-
~~~html
"invisible" <!--vuelve las cosas invisibles pero ahi continuan-->
~~~ 

205.-
~~~html
"display-num" <!--tipo de letra-->
"font-wight-bold" <!--letra gorda-->
"text-center" <!--centrar el texto-->
~~~ 

207.-
para poder poner un **borde** de un colo primero se debe tener un border inicial **border border-primary**

208.-Copiar el codifo de bootstrap y editarlo

## Master en JavaScript: Aorender JS, jQuery, Angular, NodeJS


15.- JavaScript se interpreta en un buscador web 

16.- Los ficheros JavaScript deben ser linkeados o puestos en html entre las etiquetas:

~~~html
<script type="text/javascript" src="java.js">
~~~ 

los archivos **JavaScript** son archivos que tienen la terminacion **.js**

17.- en el inspector normal al darle a **consola** esto me dara al debuger de la pagina, aqui se púeden ver mensajes debugueados de javascript

18.- Es importante decir que javascript no se le pone el tipo de variable que sera, solo se le pasa su valor y ya
~~~javascript
var nombre = "nombre";  //asi se ponen las variables en javascript
console.log(nombre); //asi se hace el debug en la consola del inspector
var string = nombre + " " + nombre; //asi se unen las variables en un string
~~~ 
se pueden cambiar los valores de las variables en la consola pero solo cambian en la consola y no en el script

19.- 
~~~javascript
'use strict'  //te ayuda a que seas estricto en la manera de programar
~~~ 

20.-tambien se pueden declarar variables con **let**

el **var** hace que las variables sean totalmente globales, no importando si estan anidados, **let** son variables locales

21.- las constantes son como variables, pero estas nunca cambiaran, pues son constantes **const**, intentar cambiar el valor lanzara un error 

22.-
~~~javascript
+ - //operaciones comunes 
% //operacion que nos da el resto de una division
alert("alerta");  //manda literalmente una alerta en la pagina web que contiene el texto alerta
Number(); //combierte a unb numero flotante o entero
parseInt(); //combierte un string a int
parseFloat(); //combierte un string a un float
string(); //combierte cualquier cosa a un string
~~~ 

23.-
~~~javascript
typeof nombre; //nos dice el tipo de variable que nombre
~~~  

### Estructuras de control

24.-
~~~javascript
if(edad1 > edad2){
    console.log("el edad1 es mayor")
}
else{
    console.log("pos lo otro");
}

// > < >= <= == !=
~~~  

25.-
~~~javascript
&& //and
|| //or
! //not
~~~  
los parentesis sirven para separar los operadores osease usa normalmente los parentesis 

26.-
~~~javascript
var edad = 18;
var imprime = "";

switch(edad){
    case 18:
        imprime = "acabas de ser mayor"
    break;
    
    case 25:
        imprime = "adulto"
    break;

    case 40:
        imprime = "crisis de los 40"
    break;

    case 75:
        imprime = "anciano"
    break;

    default: //entra aqui si no encuentra el caso en el switch
        imprime = "valor no valido"
    break;
}

console.log(imprime);
~~~  

27.-
~~~javascript
for(var i=0; i<numero; i++){
    console.log(i);
}
~~~
con el **debuger** y en la pestaña **sources** se puede ver paso por paso que hace el codigo

28.-
~~~javascript
while(year <=2058){
    year--;
}
~~~

29.-
~~~javascript
//la estructura do while se usa cuando primero se debe ejecutar un pedazo de codigo antes del while
var yeats = 20;
do{
    alert("solo cuando sea menor a 25");
    years--;
}while(years>25)
~~~

y.-
~~~javascript
//esta es la estructura for in, es muy parecida a for each, pero es un poco más global 
for(var user in usuarios){
        var h3 = document.createElement("h3");
        h3.innerHTML = usuarios[user].name;
    }
~~~


30.- 
~~~javascript
break; //sirve para cortar los loops
~~~

31.-
~~~javascript
alert(""); //alerta
confirm(""); //si se le pasa como entrada una variable se obtiene true o flase del usuario
prompt("") //el usuario puede meter cualquier info como un string
~~~

33.-
~~~javascript
isNAN(); //funcion que nos dice si no es un numero no es valido
~~~

35.-
~~~javascript
document.write("<h1> Hola mundo </h1>") //documento.write puede escribir cosas en el codigo html, en este ejemplo estamos poniendo un h1
~~~

40.- para hacer un **salto de linea** en una alerta o en la consola, dentro del codigo debemos poner un **/n**

41.-
~~~javascript
function calculadoraa(){
    debug.log("esta es la manera de declarar una funcion"); 
}
~~~

las funciones pueden regresar cosas con los **return** 

42.-
~~~javascript
//esta es la manera de poner una funcion que se le deben meter valores
function calculadoraa(numero1, numero2){
    debug.log(numero1+numero2); 
}
~~~

43.-
~~~javascript
//esta es la manera de poner una funcion que se le deben meter valores y se usan datos default
function calculadoraa(numero1, numero2, mostrar = false){
    debug.log(numero1+numero2); 
}
~~~

45.-
~~~javascript
//al hacer esto creamos una funcion que no se desborda, cuando se le metan por accidante m'as elementos, ya que estos los guarda en un arry
function listadoDeFrutas(f1,f2,...restoDeFrutas){
    debug.log(f1); 
}
~~~

48.-
las variables declaradas dentro de las funciones no pueden ser utilizadas fuera de ellas 
~~~javascript
numero.tostring(); //datos a string
~~~

### transformacion de textos
49.- 
~~~javascript
numero.tostring(); //datos a string
typeof numero; //tipo de variable 
text1.toLowerCase(); //convierte a minusculas
text1.toUpperCase(); //convierte a mayusculas
nombre.lenght; //cuenta cuantas letras, nos ayuda a saber su esta vacia la variable, sirve para contar 
//los textos se unen con + o se puede usar:
texto1.concat(texto2);
~~~

### metodos de busqueda

50.- 
~~~javascript
texto1.indexof(texto1); //en donbde empieza esa palabra 
texto1.search(); //es lo mismo, si el resultado es -1 es que no se encuentra lo que se esta buscando 
texto.match("palabra"); //busca y da mucha informacion sobre esa busqueda en forma de un array
texto1.substr(14,5); //del index 14 saca los siguientes 5 caracteres 
texto1.chartAt(44); //saca la letra de esa poscision
texto1.includes("palabra"); //dice si existe en una cadena de texto
~~~

51.-
~~~javascript
texto1.replace("palabra1","palabra de remplazo"); //remplaza las palabras 
texto1.slice(14); //corta el texto hasta ese cracter empezando desde ahi 
texto.slice(4,22); //cortar desde el 4 al 22
texto1.split(" "); //separa por espacios y metelos en un array de palabras 
texto1.trim(. ); //quita los espacios por delante y por detras en el string
~~~

52.-
para meter los string o informacion que se ponga dentro de el html se hace:
~~~javascript
//las variables nombre y apellidos son tomadas con un prompt antes 
var texto = "
    <h1> Hola que tal</h1>
    <h3> Mi nombre es: ${nombre}</h3>
    <h3> Mis apellidos son: ${apellidos}</h3>
    ";
document.write(texto);
~~~

53.-
~~~javascript
var frutas = ["manzana","pera", true, 86]; //los arrays pueden tener diferentes tipos de datos
var frutas2 = new array("manzana","pera", true, 86); //otra manera de hacer un string
frutas[1]; //seleccionando el elemento 1 de la lista de futas, debe dar "pera"
~~~

54.-
~~~javascript
nombre.length(); //nos dice que tan grande o cuantos elementos tiene un array
~~~

55.-
~~~javascript
//cilo for each
nombres.foreach((nombre,indice)=>{
    document.write("<li>" + indice + "-" + nombre + "</li>")
})
~~~

56.-
se pueden meter arrays dentro de arrays 

57.-
~~~javascript
peliculas.push(); //meter cosas a un array
peliculas.pop(); //saca el ultimo elemento del array 
peliculas.splice(index); //elimina el elemento del arrat
peliculas.join(); //lo vuelve un string separado por comas 
~~~

59.-
~~~javascript
peliculas.sort(); //orden alfabetico
peliculas.reverse(); //voltea el orden del array 
~~~

60.-
~~~javascript
precios.some(); //busca si existe mayoes, menores como un if en una funcion 
~~~

62.-
~~~javascript
numeros.sort(function(a,b){return a-b}); //ordena numericamente  
~~~

### DOM 

64.-
~~~javascript
var caja = document.getElementById("micaja"); //busca el elemento con el id "mi caja" en el codigo html y lo pone como una variable
var caja = document.getElementById("micaja").innerHTML; //toma el codigo que hay dentro del id y puede ser cambiado igualandolo a algo
caja.style.backgroundcolor = "red"; //cambia el color de la caja por javascript y se puede cambiar los datos del css desde javascript
caja.ClassName = "hola"; le pone la clase hola al html de la pagina
var caja = var caja = document.querySelector("#micaja"); //esta es una mejor manera de seleccionar los elementos HTML desde javaScript ya que este puede cambiar de id, etiqueta y clase con solo cambiar el # como si fuera css
~~~

65.- 
~~~javascript
var todosLosDivs = document.getElementsByTagName("div"); // da un array de todos los divs que tiene la pagina web 
var contenidoTexto = todosLosDivs[2].text(); //da el string que tiene ese div 
document.createElement("p"); //crea un parrafo en el HTML
var texto = document.createTxtNode(valor); // convierte en texto de html
parrafo.appendChild(texto); //mete texto dentro de parrafo en el html
~~~

66.-
~~~javascript
document.getElementsByClassName("rojo"); // da un array de los elementos con clase rojo 
// al meter los elementos en arrays por lo general mete más cosas, es bueno comprabar cuando se les ponga styles sean cosas correctas
document,querySelectorAll(".rojo");
~~~

### BOM

~~~javascript
window.innerWidth; //saber ancho de la pagina
window.innerHeight; //saber alto de la pagina 
screen.width; //saber ancho de pantalla
screen.height; //sabber alto de la pantalla 
windows.location.href; //saber en que url nos encontramos 
windows.open(url); //abre una nueva ventana del navegador 
~~~

### Eventos

#### eventos de raton 

69.-despues de tener el boton en variable se puede añadir un escuchador de eventos a este 
~~~javascript
boton.addEventListener('click', funcion(){
    cambiarColor();
});

'ondblclick' //evento de doble click 
'mouseover' //pasar sobre el boton
'mouseout' //cuando el mouse sale del boton
~~~

70.-
~~~javascript
'foculs' //evento que registra cuando se esta dentro del input 
'blur' //cuando se sale del input
'keydown' //cuando se pulsa una tecla
'keypress' //cuando se pulsa una tecla
'keyup' //cuando se suelta una tecla
~~~

71.- 
~~~javascript
window.addEventListener('load',()=>{
    cambiaColor();
}) //evento que se ejecuta cuando la pagina ya esta completamente cargada
~~~

72.-
~~~javascript
setInterval(function(){...}, 3000) //se ejecuta algo despues de cierto tiempo especificado
setTimeout //solo lo hace despues de un tiempo solo una vez
clearInterval(intervalo);//hace parar el intervalo, para hacer que vuelva, se necesita rehacer la funcion que creó el intervalo
~~~

73.-
cuando se tiene un **formulario** en una variable se puede llamar un evento _submit_ en el 
~~~javascript
formulario.addEventListenerdocument.querySelector('#nombre').value; //obtener lo que hay dentro del cuadro
~~~

74.- 
~~~javascript
texto.trim() //hace qye se le quiten los espacios por delante y por detras
~~~

75.- con ***this*** es cambiar el elemento en donde estoy parado ahora, por ejemplo en el boton donde le digo que haga algo en un evento ya sabe que hablo del el "this"

### JSON
76.-
~~~javascript
var pelicula = {
    titulo: "batman"
    year: 2017
    pais: "EUA"
}

pelicula.titulo = "algo";
~~~
los objetos json se pueden recorrer con los bucles in 

### local storage informacion que se guarda en la pagina 

77.-
~~~javascript
if(typeof(storage)!= 'undefined') //esta listo para usarse el storage
localStorage.SetItem("titulo","valor"); //guarda una variable en el local storage, es como player prefs
JSON.stringify(usuario); //los objetos JSON no se pueden guardar como JSON asi que se deben pasar a string y esta funcion lo hace 
JSON.parse(localStorage:getItem("usuario")); //volver JSON un string que era un JSON antes pero fue convertido
localStorage.removeItem("usuario"); //elimina esto del local storage
localStorage.clear(); //limpia todo el local storage 
~~~

77.- para hacer el submit no recargue la pagina se pone ***onclick=return false*** en el html

### FETCH, AJAX Y PROMESAS

79.- el **fetch** es la manera de hacer peticiones a un backend

Apires serbicios o Backend que nos devuelve datos en JSON, puede recibir peticiones por post put eject delete 

~~~javascript
fetch(url); //ver usuarios = [] hace la peticion 
.then(data => data.json()) //los datos que acaba de capturar de el url lo pasa a json 
.then(data => { //luego pasa esos a un array
    usuarios = data;
    for(var user in usuarios){
        var h3 = document.createElement("h3");
        h3.innerHTML = usuarios[user].name;
    }
}) 
~~~

80.-
Asincorno: significa que no debemos recargar la pagina, ajax solo cambia el pedazo de la pagina, no recarga toda la pagina

las **promesas** pueden usar el ***then*** preo no son el then, **fetch** es una promesa

81.-
~~~javascript
return new promise((resolve,reject)=>{}) // con esto se crea una promesa
return reject("error"); //si no se cumple lo que esta dentro del callback regresara return reject
return resolve("logrado"); //si se cumple se devuelve resolve
set Timeout(function(){},1000) //hacer una funcion que espera tiempo en ms
~~~

83.-
~~~javascript
try{ }catch(error){log(error)} //intenta el codigo que esta entre corchetes y si salta un error puedo logearlo o hacer que salten alerts
~~~

### Fechas en JavaScript

~~~javascript
var fecha = new Date(); //da una fecha, más bien la fecha en la que estamos
fecha.getFullYear(); //de la variable fecha toma el año
fecha.getMonth(); //de la variable fecha toma el mes, pero empieza en el 0
fecha.getDate(); //toma de la variable fecha el dia
fecha.getHours(); //de la variable fecha toma las horas
~~~

85.- para usar ***Matematicas*** en JavaScript es necesario poner el **.Math** y usar las funciones que vienen en el manual, que son funciones mantematicas normales

### JQUERY
es una libreria para hacer cosas más rapidas

90.- para usar jQuery se mete un js y se pone con un script hasta la parte de arriba del documento

#### Selectores

91.- 
~~~javascript
    $(document).ready(function(){ //se refiere a que todos las cosas de la pagina este cargada y lista para usarse 
    //selector de ID
    var rojo = $("#rojo").css("background","red") //cambiando el css desde javaScript
                        .css("color","white"); //es posible encadenar cosas de css continuando con punto y no cerrando el punto y aparte
    //pueden guardarse en variables o simplemente seleccionarlas y cambiarlas

    console.log(rojo);

    $("#amarillo").css("background","yellow")
                 .css("color","green");

    $("#verde").css("background","green")
                .css("color","white");
});
~~~

92.-
~~~javascript
    //selecto de Clase
    var mi_clase = $(".zebra") /*toma los elementos que tienen la clase zebra 
    por la naturaleza de que varios elementos pueden tener la misma clase, esta funcion
    nos arrojara un array de elementos y podemos ocuparlos como un array normal*/
    
    mi_clase.css("border","5px dashed black"); /*se les pone los mismos estilos css a todos los 
    elementos del array */

    $(".sonBorde").click(()=>{ //cuando le de click a algunos de los elementos que tenga la clase sin borde
        $(this).addClass("zebra"); //'al elemento que estoy clickando añadele la clase zebra'
    });
~~~

93.-
~~~javascript
    //selectores de etiqueta
    var parrafos = $('p').css("cursor","pointer");
    
    parrafos.click(function(){
        var that = $(this); //es mejor hacer esto si el this se usa mucho para no sobrecargar 

        if(!that.hasClass('grande')){ //pregunta si la esto tiene la clase grande
            that.addClass('grande');
        }else{
            that.removeClass('grande'); //elimina la clase grande de este elemento
        }
    })
~~~

94.-
~~~javascript
    //selector de atributo
    $('[title="google"]').css("background", "#ccc") //selecciona los que tienen esta caracteristica 
    $('[title="facebook"]').css("background", "blue")
~~~

95.-
~~~javascript
    //selector de atributo
    $('[title="google"]').css("background", "#ccc"); //selecciona los que tienen esta caracteristica 
    $('[title="facebook"]').css("background", "blue");

    //otros
    $('p,a').addClass('margen_superior'); //aplicando clases a multiples etiquetas

    var busqueda = $("#caja").find(".resaltado"); //busca dentro de la caja la clase resaltado
    console.log(busqueda);
~~~

### Eventos en jQuery

96.- mouseover y mouseout
~~~javascript
    var caja = $('#caja');

    caja.mouseover(function(){ //mouse que entra dentro del elemento
        $(this).css("background","red"); 
    });

    caja.mouseout(function(){ //mouse que sale del elemento 
        $(this).css("background", "green");
    })
~~~

97.- hover
~~~javascript
    function CambiaRojo() { //mouse que entra dentro del elemento
        $(this).css("background", "red");
    }

    function CambiaVerde() { //mouse que sale del elemento 
        $(this).css("background", "green");
    }

    caja.hover(CambiaRojo,CambiaVerde); //el evento over toma en cuenta
    //primero cuando entra dentro del elemento y luego cuando sale
~~~

98.- click y doble click
~~~javascript
    caja.click(function(){ //click normla
        $(this).css("background", "blue")
            .css("color", "white");
    })

    caja.dblclick(function(){ //doble click
        $(this).css("background", "orange")
            .css("color", "yellow");
    })
~~~

99.- focus y blur
~~~javascript
    var nombre = $('#nombre');
    nombre.focus(function(){ //cuando estoy dentro de un campo de formulario
        $(this).css("border","2px solid green");
    });

    nombre.blur(function(){ //cuando salgo de un campo de formulario
        $(this).css("border","1px solid #ccc");
        $('#datos').show(); //enseña la caja que tiene displat block none en el css
        $('#datos').text($(this).val()); //pondra el texto de el valor de la caja que acabamos de salir 
    });
~~~

100.- 
~~~javascript
    //Mousemove 
    $(document).mousemove(function(){ //detecta cuando el mouse se mueve en la pagina 
        console.log("En X:" + event.clientX); //event.clientX nos dice la coordenada en x del mouse
        console.log("En Y:" + event.clientY); //event.clientY nos dice la coordenada en y del mouse

        $('body').css("cursor", "none"); //esconde el curor en la pagina 
        var sigueme = $('#sigueme');
        sigueme.css("left", event.clientX);
        sigueme.css("top", event.clientY);
    });
~~~

### Efectos, animaciones y más
101.-
~~~javascript
$(document).ready(function(){

    ReloadLinks();

    $('#add_button')
        .removeAttr('disabled') //elimina un atributo del elemento seleccionado 
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
~~~

102.-
~~~javascript
$(document).ready(function(){
    $("#mostrar").hide();
    
    $("#mostrar").click(function(){
        $(this).hide(); //hide hace que el elemento no se vea (display: none)
        $("#ocultar").show(); //show hace que el elemento se vea (display: block)
        //$("#caja").show('fast'); //existen modificadores que nos daran 'animaciones' 
        //de ocultarse o mostrarse de manera más rapida o lenta
        $("#caja").fadeIn('fast'); //fundido del elemto que lo muestra
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeOut('fast'); //fundido del elemento que lo oculta
    });

    $("#todoEnUno").click(function(){
        $("#caja").toggle('fast');  //muestra o oculta el elemnto dependiendo de como este 
        //existen varios para hacer cosas en los efectos, faceToggle, slideToogle, slideUp
        //se tiene que buscar en algo de data 
    });
});
~~~

103.-
~~~javascript
$("#animame").click(function(){
        caja.animate({ //esta es la manera de crear animaciones personalizadas de un elemento 
                marginLeft: '500px',    //cada animacion debe hacerse por bloques de animacion
                fontSize: '40px',   //estos alteran el css directamente en javaScript 
                height: '110px' 
            }, 'slow')  //tambien puede darseles un tiempo o velocidad en la cual se debe realizar la animacion
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '990px',
                marginTop: '0px'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow');
    });
~~~

114.-se puede hscer que despues de terminar de ejecutarse una animacion, se ejecute una linea de codigo 
~~~javascript
caja.fadeOut('fast', function(){
//esta zona de codigo se ejecutara despues de terminar la animacion 
}); //fundido del elemento que lo oculta
~~~

### Peticiones AJAX en jQuery
solo se actualiza un pedazo de la pagina 
para esta parte se utiliza un servidor ***fake*** que nos podra hacer como si tuvieramos un servidor [reqres](https://reqres.in)

105.-
~~~javascript
    // metodo load cargamos el html de una pagina 
    $('#datos').load('https://reqres.in/');
~~~

106.- metodo get (este nos sirve para pedirle informacion al servidor)
~~~javascript
    // metodo get para sacar informacion de una base de datos  
    $.get("https://reqres.in/api/users?page=2", function(response){ //obtiene los datos
        response.data.forEach((element, index) => { //del response extrae cada uno de los arrays 
            console.log(element.first_name)
            $('#datos').append("<p>"+element.first_name+" "+element.last_name+ "</p>")
        });
    });
~~~

107.- metodo post, sirve para pasarle informacion al servidor 
en este apartado ocupamos nuevas cosas del html poniendo más cosas a el html se entiende mejor con la documentacion [documentacion html](https://www.w3schools.com/tags/tag_form.asp)
~~~javascript
    $('#formulario').submit(function(){ //haciendo submit a el formulario
        var usuario = {
            name : $('input[name="name"]').val(),  //obtenemos el valor de el input con nombre name
            web : $('input[name="web"]').val()
        } 
        console.log(usuario);
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){ //despues de mandar los datos el done se ejecuta despues de resivir la respuesta ajax
            alert("usuario añadido correctamente"); 
        });

        //con $(this).attr("action") le damos la url a la cual mandaremos los datos 
        //con $.post($(this).attr("action"), usuario le damos el usuario creado anteriormente

        return false; //hacemos que el submit no nos mande a otra pagina 
    });
});
~~~

108.- usando el metodo ajax
~~~javascript
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
~~~

### jQuery UI
[documentacion jQuery UI](https://jqueryui.com/draggable/)


110.-Instalando jQuery UI

~~~ html
    <script type="text/javascript" src="js/jquery-ui-1.13.2/jquery-ui.min.js"></script> 
    <!--Agregando la libreria ui en el archivo, esta tiene que ir debajo de la libreria de jQuery-->

    <link rel="stylesheet" href="js/jquery-ui-1.13.2/jquery-ui.min.css"> 
    <link rel="stylesheet" href="js/jquery-ui-1.13.2/jquery-ui.structure.min.css">
    <link rel="stylesheet" href="js/jquery-ui-1.13.2/jquery-ui.theme.min.css"> <!--para poder usar todo-->
~~~

111.-
~~~ javascript
    $(".elemento").draggable(); //mover elemento por la pagina 
~~~

112.-
~~~ javascript
    $(".elemento").resizable(); //redimensionar la caja 
~~~

113.-
para usar el selected es necesario meter algunas reglas en el CSS
~~~ css
    ul .ui-selecting {background-color: green;} /*cuando selecciono un elemento y el cursor se estra presionando sobre el*/
    ul .ui-selected {background-color: blue;} /*cuando selecciono un elemento y ya no estoiy haciendo click en el */
~~~

para que en el javascript poner
~~~ javascript
    $(".listaSeleccionable").selectable(); //los elementos que esten dentro de esto se 
    //volveran seleccionables y se podra usar  .ui-selecting y .ui-selected
~~~

114.- para poder acomodar elementos
~~~ javascript
    $(".listaSeleccionable").sortable({//los elementos que esten dentro de esto se 
    //podran acomodar como queramos, no funciona si esta en uso selectable 
        update: function(event, ui){ //detecta cuando cambia la lista 
            console.log("ha cambiado la lista");
        }
    }); 
~~~

115.-
~~~ javascript
    $("#elementoMovido").draggable(); //hacer un cuadro que pueda moverse por la pantalla 
    $("#area").droppable({ //hacer un area que pueda resivir el objeto movible
        drop: function(){ //evento que se dispara cuando un elemento draggable se suelta en el 
            console.log("has soltado algo dentro del area");
        }
    });
~~~

116.- la mayor parte de los efectos que se ven pueden ser vistos y "probados" en la documentacion de jQuery UI y estos se pueden ver en: [efectos](https://jqueryui.com/effect/)
~~~ javascript
    $('#mostrar').click(function(){
        //$('.cajaEfectos').fadeToggle(); // mostrar de manera que aprace
        //$('.cajaEfectos').effect("explode"); // agregar el efecto explode
        //$('.cajaEfectos').toggle("explode"); //lo aparece con una mini explosion 
        //$('.cajaEfectos').toggle("blind"); //lo abre como ventana hacia abajo 
        //$('.cajaEfectos').toggle("slide"); //lo abre como ventana hacia la derecha
        //$('.cajaEfectos').toggle("drop"); //lo abre como ventana hacia la derecha pero como degradado
        //$('.cajaEfectos').toggle("fold"); //casi lo mismo que slide
        $('.cajaEfectos').toggle("puff",4000 ); //de grande a tamaño normal, tambien es posible poner el timpo en que lo querramos hacer  
    });
~~~
### plugins y widgets 
117.- el tooltip es una texto que sale cuando pasas sobre un elemento
[tooltips](https://jqueryui.com/tooltip/) // [otroDeTooltips](https://www.heteroclito.fr/modules/tooltipster/)
~~~ html
    <a href="#" title="lo que se vera sobre el enlace">enlace</a>
    <!--asi tambien se puede hacer un tooltip con html-->
~~~

116.- los cuadros de texto son los "letreritos" que te salen cuando algo falla o te queire decir algo la pagina (dialog) [popupsDeTexto](https://jqueryui.com/dialog/)

117.- los calendarios son date pickers que nos dejan seleccionar una fecha [datePickers](https://jqueryui.com/datepicker/#date-formats)

118.- las tabs me dejan ver como unos folders que puedo ver entre las pestañas y despliegan diferentes tipos de textos [tabs](https://jqueryui.com/tabs/)

125 - 130.- se maqueto toda la pagina web, si quieres verlo esta en la seccion 35

131.- buscando en internet como poner un pluggin para el slider

132.- 
~~~ javascript
    posts.forEach((item,index) =>{
        console.log(item.title);
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="#" class="button-more">Leer más</a>
    </article>
    `;
        $("#posts").append(post);
    });

    //esta es la manera de hacer una "plantilla" de html que cambie con los datos de un Json
~~~

133.- para cambiar de tema en las webs podemos cambiar el css de el html por medio de javascript, pasando todos los "colores" que se encuentran en la web a un css diferente, ya que pueden haber mas de un css cambiando los estilos a las paginas y si hacemos que uno se encarge de lo escencial los demas puden ser cambiados para cambiar los temas 

~~~ html
    <!--Estilos CSS-->
    <link rel="stylesheet" href="css/styles.css">
    <link id="theme" rel="stylesheet" href="css/green.css"> 
    <!--Este va a ser el estilo por defecto de nuestra pagina, que se cambiara
    por identificador theme-->
~~~

css de la hoja de color verde
~~~ css
    body {
    background-image: url(../img/hojas.jpg);
    background-attachment: fixed;
    /*esto para que la imagen no se mueva de como se ve */
}

#logo{
    background-color: #235E3E;
}

#menu ul li:hover{
    background-color: #235E3E;
}

.button-more{
    background-color: #235E3E;
}
~~~

css de la hoja de color rojo
~~~ css
    body {
    background-image: url(../img/rojo.jpg);
    background-attachment: fixed;
    /*esto para que la imagen no se mueva de como se ve */
}

#logo{
    background-color: #ca3413;
}

#menu ul li:hover{
    background-color: #ca3413;
}

.button-more{
    background-color: #ca3413;
}
~~~

css de la hoja de color azul
~~~ css
    body {
    background-image: url(../img/cielo.jpg);
    background-attachment: fixed;
    /*esto para que la imagen no se mueva de como se ve */
}

#logo{
    background-color: #1f87C4;
}

#menu ul li:hover{
    background-color: #1f87C4;
}

.button-more{
    background-color: #1f87C4;
}
~~~

cambiando el tema por medio de javascript
~~~ javascript
    //Selector de tema 
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
    });
~~~

134.- haciendo que se suba desde la parte de abajo de la web 
~~~ javascript
    //scroll
    $(".subir").click(function(e){
        e.preventDefault(); //que no nos lleve a ningun enlace

        $("html, body").animate({
            scrollTop: 0 //sube a lo alto de la pagina
        }, 500);

        return false;
    });
~~~

136.-tambien se pueden cargar en diferentes archivos javascript para no estar verificando si nos encontramos en esta pagina, de echo es una mejor practica separar las funcionalidades del javascript en varios javascript y agregarlos si son necesarios 
~~~ javascript
    //slider
    if(window.location.href.indexOf('index') > -1){ //comprobando si estamos en la pagina index
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }
~~~

139.- existen varias librerias que hacen ***jquery form validator***, y pues es cuestion de ver las librerias y usarlas  

### TypeScript
es un super set de javascript que se le añaden nuevas cosas que le dan nuevas funcionalidades, e sposible que navegadores antiguos no jalen al 100%, se usa para angular 

144.- hacer una tipo jsonb que pueda ser modificado por dentro 
~~~ javascript
var bicicleta = {
    color: "rojo",
    modelo: "bmx",
    frenos: "disco",
    velocidadMaxima: "60km",
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo:color
        this.color = nuevo_color;
        console.log(this);
    }
}

bicicleta.cambiaColor("azul");    
~~~

147.- descraga e instalacion de typescript

149.- typescript debe compilarse para que pueda usarse, es como less o sass 
asi que se debe ir a la ruta en la que esta y ejecutar el comando 
~~~ cmd
npx tsc archivo.ts
~~~

150.-
para usar siempre el que cambia los cambios del codigo debe ser con 

~~~ cmd
npx tsc -w *.ts
~~~

151.- si se garega un nuevo archivos ts mientras el compilador esta ejecutandose este no creara el nuevo archivo, se tiene que parar el proceso con **ctr+c** y luego volver a correr el codigo anterior 
~~~ typescript
///////////////////Tipos de datos////////////////
//string
let cadena: string = "victorRoblesWeb";

//numbre
let numero: number = 12;

//Boleano 
let verdadero_falso: boolean = true;

//Any
let cualquiera: any = "hola"; //aqui entran cualquir tipo de datos como var

//arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"]; //Array de strings 

let years: number[] = [1,2,30]; //Arrasy de numeros 
~~~

152.- si se garega un nuevo archivos ts mientras el compilador esta ejecutandose este no creara el nuevo archivo, se tiene que parar el proceso con **ctr+c** y luego volver a correr el codigo anterior 
~~~ typescript
let echizo: string | number = "echizo"; //esta variable puede ser o string o numero, pero nada más
echizo = 15;
~~~

153.-
~~~ typescript
type alfanumerico = string | number; //podemos crear nuestros propios tipos de variables
let echizo: alfanumerico = "echizo"; //esta variable puede ser o string o numero, pero nada más
echizo = 15;
~~~

154.- para que no este dando el error de **cannot redeclare block-scoped variable** lo mejor que se puede hacer es simplkemente cerrar el archivo que se compila en js en el editor de texto y deja de molestar 
~~~ typescript
//Let vs var 
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44; //el let solo llama a una variable aunque esta se llam a igual que una var, la usa y luego se destruye 
    var numero2 = 55; //el var puede redefinir la variable que estamos ocupando

    console.log(numero1, numero2);
}
console.log(numero1, numero2);
~~~

155.-
~~~ typescript
function getNumero(numero:number = 12): string{ //haciendo que solo acepte numeros
    return "el numeroi es: "+numero;            //devuelva string 
}
~~~

156.-
~~~ typescript
//clase (molde del objeto)
class Camiseta{ //siempre intentar que se llame igual que el fichero 

    //propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Métodos (funciones o acciones del objeto)
    public CambiarColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}


var camiseta = new Camiseta(); //creaando una nueva camiseta
//camiseta.color = "verde"; //si la variable de la clase fuera publica puedo cambiarla
camiseta.CambiarColor("rojo");

console.log(camiseta);

var playera = new Camiseta();
playera.CambiarColor("azul");

console.log(playera);


~~~

157.-
~~~ typescript
//Métodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){ //constructor
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public CambiarColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}


var camiseta = new Camiseta("rojo", "Manga Larga", "Nike", "L", 10); //usando un cronstructor

console.log(camiseta);
~~~

158.-
~~~ typescript
export class Camiseta{ //linea que nos dice que podra ser exportado a otro tipo de archivos 

import { Camiseta } from "./camiseta"; //importando el archivo
~~~

159.-
~~~ typescript
interface CamisetaBase{ //la interface nos dice que si o si deben existir estos metodos
    setColor(color);
    getColor();
}
~~~

160.-
~~~ typescript
class Sudadera extends Camiseta{ //diciendo que es hija de camiseta
    public capucha: boolean;

    setCapucha(capucha){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}
~~~

161.-
~~~ typescript
//Decorador
function estampar(logo:string){ //adiciona una nueva funcion a una clase 
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("camiseta estampada con el logo de: "+logo);
        }
    }
}
~~~

### Angular
166.- angular se instala con la consola 

y.-[video de referencia](https://www.youtube.com/watch?v=giw1se-cddg)  cuando se sale de un proyecto de angular se deja de "compilar" en el cmd entonces lo que se debe hacer es compilarlo de nuevo para poder trabajar sobre el, porque aunque se corra el htmnl puro este no funcionara solo por ende se debe poner en el cmd cuando ya estemos dentro de la carpeta de angular ya creado  
~~~ cmd
ng serve 
~~~
luego el cmd nos arrojara que debemos ejecutar en el buscardor ***http://localhost:4200/*** y ahi se podra ver la pagina que estamos haciendo 

170.- los componentes de angular se crearan en carpetas aparte de las que ya trae por defecto, para crear un nuevo componentes e hace asi 

~~~ typescript
import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    template: `
    <h2>Componente de Videojuegos</h2>
    <ul>
        <li>GTA</li>
        <li>Prince of Persia</li>
        <li>Tekken</li>
        <li>Mario</li>
    </ul>
    `
})

export class VideojuegoComponent{
    constructor(){
        console.log("se ha cargado el componente: videojuego.componente.ts")
    }
}
~~~

esto nos hara que cuando llamemos a este componente con html con una <videojuego></videojuego> cree lo que tiene en medio 

tambien debe de ser llamado en los componentes que se usaran en **app.module.ts** se debe ver algo como esto:

~~~ typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component'; //se debe importar 

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent //y se declara 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~

el html se modificara en el archivo **app.component.html**

171.- lo mejor es hacer que en el videjuego.component.ts se separe el html de el componente por eso se hace otro fichero llamado **videojuego.component.html** y ahi se le mete el html que tenia en 
~~~ typescript
import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    template: `
    <h2>Componente de Videojuegos</h2>
    <ul>
        <li>GTA</li>
        <li>Prince of Persia</li>
        <li>Tekken</li>
        <li>Mario</li>
    </ul>
    `
})

export class VideojuegoComponent{
    constructor(){
        console.log("se ha cargado el componente: videojuego.componente.ts")
    }
}
~~~

y se cambia por:
~~~ typescript
import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent{
    constructor(){
        console.log("se ha cargado el componente: videojuego.componente.ts")
    }
}
~~~

haciendo que el fichero **videojuego.component.html** se vea asi:
~~~ html
<h2>Componente de Videojuegos</h2>
<ul>
    <li>GTA</li>
    <li>Prince of Persia</li>
    <li>Tekken</li>
    <li>Mario</li>
</ul>
~~~

tambien se pueden hacer variables que utilice el html videojuego para que las use asi:
~~~ typescript
import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos"
        this.listado = "Listado de los Videojuegos más populares"

        console.log("se ha cargado el componente: videojuego.componente.ts")
    }
}
~~~
y en html se ve asi:
~~~ html
<h2>{{titulo}}</h2>
<h4>{{listado}}</h4>
<ul>
    <li>GTA</li>
    <li>Prince of Persia</li>
    <li>Tekken</li>
    <li>Mario</li>
</ul>
~~~

172.- se pueden poner las etiquetas creadas y cargadas en otros html de los demas componentes y estas van a cargar de manera exitosa

173.- para crear componentes por consola es necesario hacerlo con la consola nativa no emulada, con el comando 
~~~ cmd
ng generate component cursos
~~~
Aclaracion: cursos es el nombre del complemento
esto hace que nops genere los archivos que ya habiamos generado anteriormente y ya los linkea para que no haya ningun tipo de error 

174.-Los hooks son los eventos que se lanzan cuando un "elemento" de la pagina cambie  

Implementando una funcion en el codigo de html de videojuego.component.html (la funcion esta en videojuego.component.ts)
~~~ html
<h2>{{titulo}}</h2>
<h4>{{listado}}</h4>

<button (click)="CambiarTitulo()">Cambiar Titulo</button>

<ul>
    <li>GTA</li>
    <li>Prince of Persia</li>
    <li>Tekken</li>
    <li>Mario</li>
</ul>
~~~

usando metodos y variables para hacer que se muestren o no secciones de la pagina 

~~~ typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo-angular';
  public mostrar_videojuegos: boolean = true;

  OcultarVideojuegos(value: boolean){
    this.mostrar_videojuegos = value;
  }
}
~~~

~~~ html
<div>
  <h1>
    Bievenido al {{title}}
  </h1>

  <p>Vamos a aprender Angular juntos </p>

  <button (click)="OcultarVideojuegos(false)" *ngIf="mostrar_videojuegos">Ocultar</button>
  <button (click)="OcultarVideojuegos(true)" *ngIf="!mostrar_videojuegos">Mostrar</button>

  <videojuego *ngIf="mostrar_videojuegos"></videojuego> <!--muestra esto si es verdadero-->>
  <zapatillas></zapatillas>
</div>
~~~

se pueden llamar diferentes funciones que se lanzaran como eventos que ocuerren cuando pazan cosas en la pagina 

~~~ typescript
import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){ // el constructor sera siempre el primer hook que se lanzara 
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los Videojuegos más populares";

        console.log("se ha cargado el componente: videojuego.componente.ts");
    }

    ngOnInit(): void {
        console.log("on init ejecutado"); //hook que se lanza cuando el componente se carga
    }

    ngDoCheck(): void {
        console.log("docheck ejecutado");  //hook que se lanza cuando algo cambia dentro del codigo
    }

    ngOnDestroy(): void {
        console.log("ondestroy ejecutado"); //hook que se lanza cuando el elemento deja de aparecer
    }

    CambiarTitulo(){
        this.titulo = "Nuevo Titulo Del componente";
    }
}
~~~

175.- Se pueden crear elementos que son posibles de importar a otros scripts para ser usados en otras cosas, este objeto jason puede ser llamado y tomar sus datos 
~~~ typescript
export var Configuracion ={
    color: "red",
    fondo: "blue",
    titulo: "aplicacion con angular",
    descripcion: "Aprendiendo Angular con Victor Robles"
};
~~~
usandolo asi:
~~~ typescript
import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo-angular';
  public mostrar_videojuegos: boolean = true;
  public config = Configuracion;

  constructor(){
    this.title = Configuracion.titulo;
  }

  OcultarVideojuegos(value: boolean){
    this.mostrar_videojuegos = value;
  }
}
~~~

176.- Los ***Models** son las bases o los __scriptableObjects__ ya que estos pueden ser muchos y solo cambian sus caracteristicas

es la base o el pre modelo de como se construiran, tambien estas cuentan con un constructor para cuando sean credas las clases estas se llamen y se construllan como sea requerido 

~~~ typescript
export class Zapatilla{

    //esto se puede hacer, es crear variables y darles valores en el constructor
    /*
    public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;

    constructor(nombre:string, marca:string, color:string, precio:number, stock:boolean){
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
    */

    //pero se puede hacer esto tambien 
    constructor(
        public nombre:string,
        public marca:string,
        public color:string,
        public precio:number,
        public stock:boolean
    ){}
}
~~~

~~~ typescript
import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatillas"; //importando la clase zapatillas

@Component({
    selector:'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = 'componente de zapatillas'
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla("Nike Airmax", "Nike", "Rojas", 190, true),
            new Zapatilla("Reebok Classic", "Reebok", "Blanco", 80, true),
            new Zapatilla("Nike Runner MD", "Nike", "Negras", 60, true),
            new Zapatilla("Adidas Yezzy", "Adidas", "Gris", 180, false),
        ]
    }

    ngOnInit() {
        console.log(this.zapatillas);
    }
}
~~~

~~~ html
<h2>{{titulo}}</h2>
<ul>
    <li *ngFor="let deportiva of zapatillas"> <!--Directiva para hacer un for en html y angular-->
        {{deportiva.nombre}} - <strong>{{deportiva.precio}}</strong>
    </li>
</ul>
~~~

#### Directivas en Angular
Las directivas son como funciones extra que se le dan a html o a las etiquetas, haciendo que estas sean más poderosas y se peudan hacer muchas más cosas 

178.- Directiva **ngIf**

se pueden hacer condiconales en las etiquetas o si no en los estilos tambien, osease que se apliquen ciertos estilos si el if logra cumplirse 

~~~ html
<h2>{{titulo}}</h2>
<ul>
    <li *ngFor="let deportiva of zapatillas"> <!--Directiva para hacer un for en html y angular-->
        {{deportiva.nombre}} - <strong>{{deportiva.precio}}</strong>
        
        <span *ngIf="deportiva.precio <= 80"
                [style.background] = "deportiva.precio <= 80 ? 'green' : 'transparent' " 
                [style.color] = "deportiva.precio <= 80 ? 'white' : 'black'"
                > ¡EN OFERTA!</span>
                <!--si deportiva es menor o igual que 80 el background pintalo de verde si no trasnparente-->
                <!--si deportiva es menor o igual que 80 el color pintalo de blanco si no negro-->

    </li>
</ul>
~~~

179.- Directiva **ngFor**

~~~ typescript
import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatillas"; //importando la clase zapatillas

@Component({
    selector:'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = 'componente de zapatillas'
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];

    constructor(){
        this.marcas = Array(); //inicializando marcas 
        this.zapatillas = [
            new Zapatilla("Nike Airmax", "Nike", "Rojas", 190, true),
            new Zapatilla("Reebok Classic", "Reebok", "Blanco", 80, true),
            new Zapatilla("Reebok Spartan", "Reebok", "Negra", 180, true),
            new Zapatilla("Nike Runner MD", "Nike", "Negras", 60, true),
            new Zapatilla("Adidas Yezzy", "Adidas", "Gris", 180, false),
        ]
    }

    ngOnInit() {
        console.log(this.zapatillas);

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{ //añadiendo marcas a un string
            if(this.marcas.indexOf(zapatilla.marca)<0){
                this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }
}
~~~



~~~ html
<h2>{{titulo}}</h2>
<p>Compra las zapatillas de las mejores marcas</p>
<ul>
    <li *ngFor="let marca of marcas">{{marca}}</li>
</ul>

<p>Las zapatillas que tenemos disponibles son:</p>
<ul>
    <li *ngFor="let deportiva of zapatillas"> <!--Directiva para hacer un for en html y angular-->
        <span [ngStyle]="{
            'text-decoration': !deportiva.stock ? 'line-through' : 'none'
        }"></span>
        {{deportiva.nombre}} - <strong>{{deportiva.precio}}</strong>
        
        <span *ngIf="deportiva.precio <= 80"
                [style.background] = "deportiva.precio <= 80 ? 'green' : 'transparent' " 
                [style.color] = "deportiva.precio <= 80 ? 'white' : 'black'"
                > ¡EN OFERTA!</span>
                <!--si deportiva es menor o igual que 80 el background pintalo de verde si no trasnparente-->
                <!--si deportiva es menor o igual que 80 el color pintalo de blanco si no negro-->

    </li>
</ul>
~~~

180.- Directiva **ngSwitch** el switch de toda la vida

181.- Two way data Binding 
es que algo resiva informacion y se comnunique de manera inmediata en angular, que puede ser el css de la pagina y el html en este caso se neceitan nuevas librerias para unirlas, estas se deben de poner en el app.component.ts 

~~~ typescript
import { FormsModule } from '@angular/forms';
~~~
esto es la libreria que nos dara más libertad en lso formularios 

~~~ html
<p>Añadir marca</p>
<p>
<input type="text" [(ngModel)] = "mi_marca" />
</p>

<p>{{mi_marca}}</p>
~~~
con esta linea de codigo es la conexion entre el css y el html haciendo que cada vez que se cambie las letras en el input de tipo texto estos se reflegen en lo que se escribe en el html

~~~ typescript
export class ZapatillasComponent implements OnInit {
    public titulo: string = 'componente de zapatillas'
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string; //el campo marca tiene que estar inicializado antes en el ts

    constructor(){
        this.mi_marca = "Fila";
        this.marcas = Array(); //inicializando marcas 
        this.color = "blue";
        this.zapatillas = [
            new Zapatilla("Nike Airmax", "Nike", "Rojas", 190, true),
            new Zapatilla("Reebok Classic", "Reebok", "Blanco", 80, true),
            new Zapatilla("Reebok Spartan", "Reebok", "Negra", 180, true),
            new Zapatilla("Nike Runner MD", "Nike", "Negras", 60, true),
            new Zapatilla("Adidas Yezzy", "Adidas", "Gris", 180, false),
        ]
    }

    ngOnInit() {
        console.log(this.zapatillas);

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{ //añadiendo marcas a un string
            if(this.marcas.indexOf(zapatilla.marca)<0){
                this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }
}
~~~

evento click, pues cuando damos un click se llama uno de los metodos del archivo .ts
~~~ html
<p>Añadir marca</p>
<p>
<input type="text" [(ngModel)] = "mi_marca" />
<button (click)="getMarca()">Mostrar marca</button> <!--Este-->
</p>
~~~

~~~ typescript
export class ZapatillasComponent implements OnInit {
    public titulo: string = 'componente de zapatillas'
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string; //el campo marca tiene que estar inicializado antes en el ts

    constructor(){
        this.mi_marca = "Fila";
        this.marcas = Array(); //inicializando marcas 
        this.color = "blue";
        this.zapatillas = [
            new Zapatilla("Nike Airmax", "Nike", "Rojas", 190, true),
            new Zapatilla("Reebok Classic", "Reebok", "Blanco", 80, true),
            new Zapatilla("Reebok Spartan", "Reebok", "Negra", 180, true),
            new Zapatilla("Nike Runner MD", "Nike", "Negras", 60, true),
            new Zapatilla("Adidas Yezzy", "Adidas", "Gris", 180, false),
        ]
    }

    ngOnInit() {
        console.log(this.zapatillas);

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{ //añadiendo marcas a un string
            if(this.marcas.indexOf(zapatilla.marca)<0){
                this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca) //metodo que lanza la alerta que tiene le valor de mi marca 
    }
}
~~~

183.- para quitar un elemento de las listas y este se vea correctamente reflejado en la pagina es necesario hacer:
~~~ typescript
    borrarMarca(index: any){
        //delete this.marcas[index]; elimina el elemento pero lo deja indefinido 
        this.marcas.splice(index,1); //quita el elemento totalmente 
    }
~~~

184.- el evento blur se dispara cuando sales del recuadro o dejas de estar parado sobre el recuadro, tiene que tener un  punto y coma al final para que funcione, no se muy bien porque 
~~~ html
<input type="text" [(ngModel)] = "mi_marca" (blur)="onBlur();"/>
~~~

se puede detectar las teclas como en unity asi como se muestra:
~~~ html
<input type="text" [(ngModel)] = "mi_marca" (keyup.enter)="mostrarPalabra();"/>
~~~

185.- darle una clase a algo cuando algo se cumpla 

si las zapatillas son mayores a 80 se les aplicara la clase altoPrecio
~~~ html
        <strong [class.altoPrecio]="deportiva.precio >= 80">
            {{deportiva.precio}}
        </strong>
~~~

**Hojas de estilo el CSS pa los compas** se puede hacer una hoja de estilos para cada uno de los elementos, pero en esta ocacion haremos uno global dentro de la carpeta __assets__ 

los archivos css se agregan directamente a la hoja Index.html que aparece en las raices del programa, si este no carga correcatmente podemos ir directamente a cargarlo en angular.json en apartado styles 

186.- con ngClass se le ponen las clases que queramos a las etiquetas 
~~~ html
        <strong [class.altoPrecio]="deportiva.precio >= 80"
                class= "['fondoRojo','subrayado']">
            {{deportiva.precio}}
        </strong>
~~~
aunque es lo mismo que esto y más comprensible para los que leen el codigo:
~~~ html
        <strong [class.altoPrecio]="deportiva.precio >= 80"
                class="fondoRojo subrayado">
            {{deportiva.precio}}
        </strong>
~~~

pero para lo que realmente nos sirve es para agregar varios tipos de clases a el html con condiciones, y no hacer un if para cada uno
~~~ html
        <strong [class.altoPrecio]="deportiva.precio >= 80"
                [ngClass]="{
                    'fondoRojo': deportiva.precio > 100,
                    'subrayado': deportiva.marca == 'Nike'
                }"
                >
            {{deportiva.precio}}
        </strong>
~~~

187.- para poder _rootear_ la pagina de angular o "hacer que tenga más pestañas" es necesario que este tenga 
~~~ html
        <base href="/">
~~~
en el index html, si no no funcionara 

se deber crear un documento que sera el encargado de el root de las paginas este lo llamaremos **app.routing.ts** este tendra toda la informacion de las rutas
~~~ typescript
//IMPORTAR LOS MODULOS DEL ROUTER DE ANGULAR
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//IMPORTAR COMPONENTES 
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";

//ARRAY DE RUTAS
const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: '**', component: HomeComponent}, //cuando no se ejecuta algo correcto
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

//EXPORTAR EL MODULO DEL ROUTER
export class appRoutingModule{}
~~~

luego dentro del **app.module.ts** vamos a cargar el archivo que se encargara de el root
~~~ typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    appRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~

y al final de todo se debe imp´lementar en **app.component.html** con la etiqueta 
~~~ html
<router-outlet></router-outlet>
~~~

esto ya hace que podamos navegar entre los diferentes componentes de la pagina, cargando los elementos que sean necesarios o armando nuevos componentes que mostraran cosas especificas 

188.- hacer barra de navegacion de angular 
~~~ html
<nav>
    <a [routerLink]="['/home']" [routerLinkActive]="['active']">Home</a>
    &nbsp;
    <a [routerLink]="['/zapatillas']" [routerLinkActive]="['active']">zapatillas</a>
    &nbsp;
    <a [routerLink]="['/cursos']" [routerLinkActive]="['active']">cursos</a>
    &nbsp;
    <a [routerLink]="['/videojuego']" [routerLinkActive]="['active']">videojuego</a>
    
  </nav>
~~~
el [routerLinkActive]="['active']" nos dice que se se le aplicara la clase "active" a la pasteña y esta podra ser modificada en el css

tambien es posible hacerlo de esta manera, que me gusta más
**app.routing.ts**
~~~ typescript
//IMPORTAR LOS MODULOS DEL ROUTER DE ANGULAR
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//IMPORTAR COMPONENTES 
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";

//ARRAY DE RUTAS
const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:nombre', component: CursosComponent},
    {path: '**', component: HomeComponent}, //cuando no se ejecuta algo correcto
];

//EXPORTAR EL MODULO DEL ROUTER
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
~~~

**app.module.ts**
~~~ typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

~~~

-------------------------------------------------------------------------------------------------

189.-
pasar parametros por url, primero se necesita "crear" una ruta que pueda oibtener los datos asi:
 **app.routing.ts**
~~~ typescript
//ARRAY DE RUTAS
const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:nombre', component: CursosComponent},
    {path: 'cursos/:nombre/:followers', component: CursosComponent},
    {path: '**', component: HomeComponent}, //cuando no se ejecuta algo correcto
];
~~~
estos pueden soportar "sobrecargas" de la pagina cursos, que obtendran los parametros "nombre y followers respectivamente"

para poder capturarlos necesitamos inyectar el codigo que es capaz de obtener la informacion del html 

~~~ typescript
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //importar para poder usar la ruta 

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  public nombre: string = "";
  public followers: number = 0; //variables que resiviran los valores del html

  constructor(
    private _route: ActivatedRoute, //inyeccion del codigo 
    private _router: Router //inyeccion del codigo
  ){}

  ngOnInit(){
    this._route.params.subscribe((params:Params) =>{ //cuando inicie el programa esto va a tomar los parametrso que vienen en el html
    //el params es un tipo "json" que contiene los valores
      this.nombre = params['nombre']; //aqui se obtienen los pedazos del html y se guardan 
      this.followers = +params['followers']; //se le pone el "+" para que se vuelva de tipo numero
      console.log(this.nombre); //si se le pasa algo por html lo toma y lo guarda 
    })
  }
}
~~~ 

y estos valores se pueden usar en el html como siempre los hemos usado 
~~~ html
<h3 *ngIf="nombre">Bievenido {{nombre}}</h3>
<h3 *ngIf="followers">Tienes: {{followers}} seguidores</h3>
~~~ 

191.- con esta liena de codigo podemos redirigir a el usuario, esto es importante ya que esta nos hara que cuando se ejecute algo, cuando entre a alguna condicion o alguna cosa similar esto pueda llevarlos a otra parte de la pagina 
~~~ typescript
    ngOnInit(){
    this._route.params.subscribe((params:Params) =>{
      this.nombre = params['nombre'];
      this.followers = +params['followers'];
      console.log(this.nombre); 

      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']); //redirigiendo si se cumple un if
      }
    })
  }

  redirigir(){
    this._router.navigate(['/zapatillas']); //redirigiendo con un metodo
  }
~~~ 

192.- para usar un else if se puede usar:
~~~ html
<h2>Pagina principal</h2>

<div *ngIf="identificado; else noIdentificado">
    <h3>Estas identificado en la aplicacion</h3>
    <button (click)="unsetIdentificado()">Borrar Identificacion</button>
</div>

<ng-template #noIdentificado>
    <p>No estas identificado, pulsa este boton para identificarte</p>
    <button (click)="setIdentificado()">Identificarce</button>
</ng-template>
~~~ 

y 

~~~ typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public identificado: boolean;

  constructor(){
    this.identificado = false;
  }

  setIdentificado(){
    this.identificado = true;
  }

  unsetIdentificado(){
    this.identificado = false;
  }
}
~~~ 

193.- una manera de tener mejor organizado el codigo cuando se hace un else e if es esta: donde se separa el codigo qeu mostrara de la logica 
~~~ html
<h2>Pagina principal</h2>

<div *ngIf="identificado; then siIdentificado else noIdentificado"></div>

<ng-template #siIdentificado>
    <h3>Estas identificado en la aplicacion</h3>
    <button (click)="unsetIdentificado()">Borrar Identificacion</button>
</ng-template>

<ng-template #noIdentificado>
    <p>No estas identificado, pulsa este boton para identificarte</p>
    <button (click)="setIdentificado()">Identificarce</button>
</ng-template>
~~~ 

cambiando remplate para learning web  