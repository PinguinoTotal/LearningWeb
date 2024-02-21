import { Component } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  public usuario: ContactoUsuario;

  constructor(){
    this.usuario = new ContactoUsuario('','','','');
  }

  onSubmit(form:any){
    
    console.log(this.usuario);

    form.reset() //receteando el formulario
  }
}
