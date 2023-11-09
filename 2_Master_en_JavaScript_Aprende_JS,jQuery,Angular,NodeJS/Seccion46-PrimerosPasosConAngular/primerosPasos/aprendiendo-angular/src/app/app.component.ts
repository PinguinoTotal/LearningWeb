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


