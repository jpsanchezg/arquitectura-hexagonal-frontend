import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../model/articulo';
import { ArticuloService } from '../service/articulo_service/articulo.service';
@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent implements OnInit{
  @Input() articulo!: Articulo;
  constructor(private ArticuloService: ArticuloService){
  }

  meGusta(){
    this.ArticuloService.votarArticulo(this.articulo.id, "upvote")
  }
  noMeGusta(){
    this.ArticuloService.votarArticulo(this.articulo.id, "downvote")
  }

  ngOnInit(): void {

  }
}
