import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from './articulo.model';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent implements OnInit{  
  @Input() articulo!: Articulo;

  meGusta(){
    this.articulo.meGusta()
  }
  noMeGusta(){
    this.articulo.noMeGusta()
  }

  ngOnInit(): void {
      
  }
}
