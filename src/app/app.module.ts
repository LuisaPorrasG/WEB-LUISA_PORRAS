import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    ExperienciaComponent,
    ContactoComponent,
    PerfilComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
