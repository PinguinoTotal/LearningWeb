import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Console, error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css',
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;

  public new_user:any;
  public usuarioGuardado:any;

  constructor(
    private _peticionesService: PeticionesService
  ){
    this.userId = 1;
    //creando el usuario a guardar, esto nos lo dijo la base de datos que solo necesita esto
    this.new_user = {
      "name": "",
      "job": ""
    }
  }

  ngOnInit(){
    this.fecha = new Date();
    this.cargaUsuario();
  }

  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        console.log(this.user);      
      },
      error => {
        console.log(<any>error)
      }

    )
  }

  onSubmit(form: any){
    this._peticionesService.addUser(this.new_user).subscribe(
      response =>{
        console.log(response);
        //guardando las rtespuesta de la apiRes
        this.usuarioGuardado = response;

        form.reset();
      },
      error =>{
        console.log(<any>error);
      }
    )
  }
}
