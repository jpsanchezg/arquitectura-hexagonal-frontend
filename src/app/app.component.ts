import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from "./articulo/articulo.component";
import { Articulo } from './model/articulo';
import { ArticuloService } from './service/articulo_service/articulo.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ArticuloComponent,CommonModule]
})
export class AppComponent {
  articulos: Articulo[] = [];

  constructor(private ArticuloService: ArticuloService) {
    this.ArticuloService.getListArticulos().then((articulos: Articulo[]) => {
      this.articulos = articulos
    })
  }

  agregar_articulo(titulo: HTMLInputElement, link: HTMLInputElement){
    this.ArticuloService.addArticulo(titulo.value, link.value)
    titulo.value = ''
    link.value = ''
  }

  organizarArticulos(): Articulo[]{
    return this.articulos.sort((a: Articulo, b: Articulo) => b._upvotes - a._upvotes)
  }
}
