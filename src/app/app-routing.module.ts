import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'estudios', component: EducacionComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'experiencia', component: PortafolioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/perfil', pathMatch: 'full' }, // Ruta por defecto


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
