import {Component, OnInit, DoCheck,OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        
        this.titulo = "componente de videojuegos";
        this.listado= "listado de los juegos más populares";
        
        //console.log("se ha cargado el componente: videojuego.component.ts")
    }

    ngOnInit(){
        //console.log("OnInit ejecutado!!!!!!!!!");
    }

    ngDoCheck(): void {
        //console.log("DoCheck ejecutado");
    }

    ngOnDestroy(): void {
        //console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "nuevo titulo del componente"
    }
}