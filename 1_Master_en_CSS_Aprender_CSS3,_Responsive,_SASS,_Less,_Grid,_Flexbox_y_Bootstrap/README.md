# Mater en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap 
Datos extras:
~~~css
/**/ /*Poner comentario en css*/
~~~

---



5.- Reaprendiendo HTML

6.- 
~~~HTML
<span> esta etiqueta sirve para hacer maquetacion, ya que esta no modifica el texto, solo sirve para ponerle clases o 
~~~

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