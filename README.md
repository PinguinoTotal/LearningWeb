# Estas son las notas que he echo de los cursos tomados en Udemy (profesor victor robles web) de desarrollo web, tambien estan complementados con informacion de youtube

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

91.- 
~~~javascript
$(document).ready(function(){}); //esto es para que el documento cuando este listo, ya se puede utilizar y el signo "$" significa jQuery
var cajaRoja = $("#rojo"); //asi se seleccionan cosas en jQuery es posible ponerlos en una variable 
$("#rojo").css("background","red"); //cambiando el css del elemento rojo en jQuery
~~~