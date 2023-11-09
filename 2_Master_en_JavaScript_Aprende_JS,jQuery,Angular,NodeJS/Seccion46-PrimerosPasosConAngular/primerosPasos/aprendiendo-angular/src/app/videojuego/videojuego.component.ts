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

        //console.log("se ha cargado el componente: videojuego.componente.ts");
    }

    ngOnInit(): void {
        //console.log("on init ejecutado"); //hook que se lanza cuando el componente se carga
    }

    ngDoCheck(): void {
        //console.log("docheck ejecutado");  //hook que se lanza cuando algo cambia dentro del codigo
    }

    ngOnDestroy(): void {
        //console.log("ondestroy ejecutado"); //hook que se lanza cuando el elemento deja de aparecer
    }

    CambiarTitulo(){
        this.titulo = "Nuevo Titulo Del componente";
    }
}