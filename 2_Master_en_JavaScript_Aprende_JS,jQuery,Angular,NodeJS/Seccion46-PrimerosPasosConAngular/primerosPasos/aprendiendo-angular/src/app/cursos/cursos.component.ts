import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  public nombre: string = "";
  public followers: number = 0;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this._route.params.subscribe((params:Params) =>{
      this.nombre = params['nombre'];
      this.followers = +params['followers'];
      console.log(this.nombre); //si se le pasa algo por html lo toma y lo guarda 

      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }
    })
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }
}
