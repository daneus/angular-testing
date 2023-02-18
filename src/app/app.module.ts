import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraBusquedaComponent } from './componentes/barra-busqueda/barra-busqueda.component';
import { TablaItemsComponent } from './componentes/tabla-items/tabla-items.component';
import { BotonesTotalComponent } from './componentes/botones-total/botones-total.component';
import { ComponenteDerechaComponent } from './componentes/componente-derecha/componente-derecha.component';

@NgModule({
  declarations: [AppComponent, BarraBusquedaComponent, TablaItemsComponent, BotonesTotalComponent, ComponenteDerechaComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
