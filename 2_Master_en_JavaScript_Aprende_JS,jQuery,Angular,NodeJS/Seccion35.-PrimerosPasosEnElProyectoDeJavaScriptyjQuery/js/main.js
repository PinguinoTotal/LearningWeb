$(document).ready(function () {

    //slider
    if (window.location.href.indexOf('index') > -1) { //comprobando si estamos en la pagina index
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }


    //posts
    var posts = [
        {
            title: "prueba de titulo 1",
            date: new Date(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sollicitudin nunc, quis vestibulum nulla. Praesent varius, felis vel luctus vulputate, mi felis dapibus mi, et finibus mauris risus eu enim. Ut ac scelerisque risus. Sed eu vestibulum lorem. Donec euismod risus sit amet ligula tincidunt, et pretium mauris venenatis. Morbi id nisi quis nulla suscipit aliquam ac eu nunc. Suspendisse consectetur nunc at diam suscipit vestibulum. Donec vitae gravida leo, sed hendrerit dui. Aliquam lobortis erat nec tellus sollicitudin, vel finibus ligula maximus. In id massa tristique, tristique quam et, dapibus leo. Donec dignissim hendrerit lacus, eu tristique quam laoreet nec."
        },
        {
            title: "prueba de titulo 2",
            date: new Date(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sollicitudin nunc, quis vestibulum nulla. Praesent varius, felis vel luctus vulputate, mi felis dapibus mi, et finibus mauris risus eu enim. Ut ac scelerisque risus. Sed eu vestibulum lorem. Donec euismod risus sit amet ligula tincidunt, et pretium mauris venenatis. Morbi id nisi quis nulla suscipit aliquam ac eu nunc. Suspendisse consectetur nunc at diam suscipit vestibulum. Donec vitae gravida leo, sed hendrerit dui. Aliquam lobortis erat nec tellus sollicitudin, vel finibus ligula maximus. In id massa tristique, tristique quam et, dapibus leo. Donec dignissim hendrerit lacus, eu tristique quam laoreet nec."
        },
        {
            title: "prueba de titulo 3",
            date: new Date(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sollicitudin nunc, quis vestibulum nulla. Praesent varius, felis vel luctus vulputate, mi felis dapibus mi, et finibus mauris risus eu enim. Ut ac scelerisque risus. Sed eu vestibulum lorem. Donec euismod risus sit amet ligula tincidunt, et pretium mauris venenatis. Morbi id nisi quis nulla suscipit aliquam ac eu nunc. Suspendisse consectetur nunc at diam suscipit vestibulum. Donec vitae gravida leo, sed hendrerit dui. Aliquam lobortis erat nec tellus sollicitudin, vel finibus ligula maximus. In id massa tristique, tristique quam et, dapibus leo. Donec dignissim hendrerit lacus, eu tristique quam laoreet nec."
        },
        {
            title: "prueba de titulo 4",
            date: new Date(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sollicitudin nunc, quis vestibulum nulla. Praesent varius, felis vel luctus vulputate, mi felis dapibus mi, et finibus mauris risus eu enim. Ut ac scelerisque risus. Sed eu vestibulum lorem. Donec euismod risus sit amet ligula tincidunt, et pretium mauris venenatis. Morbi id nisi quis nulla suscipit aliquam ac eu nunc. Suspendisse consectetur nunc at diam suscipit vestibulum. Donec vitae gravida leo, sed hendrerit dui. Aliquam lobortis erat nec tellus sollicitudin, vel finibus ligula maximus. In id massa tristique, tristique quam et, dapibus leo. Donec dignissim hendrerit lacus, eu tristique quam laoreet nec."
        },
        {
            title: "prueba de titulo 5",
            date: new Date(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sollicitudin nunc, quis vestibulum nulla. Praesent varius, felis vel luctus vulputate, mi felis dapibus mi, et finibus mauris risus eu enim. Ut ac scelerisque risus. Sed eu vestibulum lorem. Donec euismod risus sit amet ligula tincidunt, et pretium mauris venenatis. Morbi id nisi quis nulla suscipit aliquam ac eu nunc. Suspendisse consectetur nunc at diam suscipit vestibulum. Donec vitae gravida leo, sed hendrerit dui. Aliquam lobortis erat nec tellus sollicitudin, vel finibus ligula maximus. In id massa tristique, tristique quam et, dapibus leo. Donec dignissim hendrerit lacus, eu tristique quam laoreet nec."
        },
    ];

    console.log(posts);

    posts.forEach((item, index) => {
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

    //Selector de tema 
    var theme = $("#theme");

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css")
    });

    //evento de scroll

    $(".subir").click(function (e) {
        e.preventDefault(); //que no nos lleve a ningun enlace

        $("html, body").animate({
            scrollTop: 0 //sube a lo alto de la pagina
        }, 500);

        return false;
    });

    //login falso
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<strong>bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'> Cerrar sesión</a>");

        $('#login').hide();

        $("#logout").click(function () { //se pueden usar elementos creados en javascript insertados al html
            localStorage.clear();
            location.reload(); //recargar la pagina web 
        });
    }

    //acordeon
    if (window.location.href.indexOf('about') > -1) {
        $("#accordion").accordion();
    }

    //reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () { //cada cierto tiempo ejecuta este pedazo de codigo
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }

    //validacion 
    if (window.location.href.indexOf('contact') > -1) {
        $.validate({
            lanng: 'es'
        })
    }
});

