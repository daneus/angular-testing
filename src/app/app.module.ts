import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraBusquedaComponent } from './componentes/barra-busqueda/barra-busqueda.component';

@NgModule({
  declarations: [AppComponent, BarraBusquedaComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
