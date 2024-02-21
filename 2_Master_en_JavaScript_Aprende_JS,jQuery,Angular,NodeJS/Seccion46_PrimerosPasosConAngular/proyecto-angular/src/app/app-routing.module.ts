import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZapatillasComponent } from './Zapatillas/zapatillas.component';
import { VideojuegoComponent } from './Videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component'; 
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
//improtando el componente de contacto
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'zapatillas', component: ZapatillasComponent},
  {path:'videojuego', component: VideojuegoComponent},
  {path:'cursos', component: CursosComponent},
  {path:'cursos/:nombre/:followers', component: CursosComponent},
  {path: 'externo', component: ExternoComponent},
  //creando la ruta para ccesar a el
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
