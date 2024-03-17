import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';// Ajusta la ruta si es necesario

@NgModule({
  imports: [
    BrowserModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class AppModule { }

