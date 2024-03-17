import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from "./articulo/articulo.component";
import { Articulo } from './articulo/articulo.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ArticuloComponent,CommonModule]
})
export class AppComponent {
  articulos: Articulo[];

  constructor(){
    this.articulos = [
      new Articulo('Angular', 'http://angular.io', 3),
      new Articulo('fullStack', 'http://fullstack.io', 2),
      new Articulo('Angular homepage', 'http://angular.io', 1),
    ]
  }

  agregar_articulo(titulo: HTMLInputElement, link: HTMLInputElement){
    this.articulos.push(new Articulo(titulo.value, link.value))
    titulo.value = ''
    link.value = ''
  }

  organizarArticulos(): Articulo[]{
    return this.articulos.sort((a: Articulo, b: Articulo)=> b.votos - a.votos)
  }
}