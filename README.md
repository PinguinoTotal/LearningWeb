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
<link rel="stylesheet" type="text/css" href=styles.css> esta es la manera en que una archivo html y un css son linkeados, este codiogo debe ir en el html en la parte superior
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

3.- Discñeimer que nos dice que se trabajara con Unix e instalar Cygwing

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


