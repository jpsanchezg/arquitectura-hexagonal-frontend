import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articulo } from '../../model/articulo';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ArticuloService {
  private listArticulos: Articulo[] = []
  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) {
    this.getListArticulos();
  }
  async getListArticulos(): Promise<Articulo[]> {
    var json: any = await this.http.get(`${environment.baseURL}/reddit/article`).toPromise();
    this.listArticulos = [];
    var body = JSON.parse(JSON.stringify(json.articles));
    body.forEach((element: any) => {
      var articulo: Articulo = new Articulo(element.id, element.title, element.content, element.upvotes, element.downvotes);
      this.listArticulos.push(articulo);
    });
    return this.listArticulos;
  }

  async addArticulo(title: string, content: string) {
    var responseBody = await this.http.post(`${environment.baseURL}/reddit/article`, { title: title, content: content }).toPromise();
    console.log(responseBody);
    if (responseBody != null) {
      this.getListArticulos();
    }
    else {
      console.log("Error al añadir el articulo");
    }
  }
  async votarArticulo(id: string, upvotes: string) {
    try {
      const responseBody = await this.http.post(`${environment.baseURL}/reddit/article/${id}/vote`, { vote_type: upvotes }).toPromise();
      window.location.reload();
      this.getListArticulos();
    } catch (error) {
      console.error("Error al votar el artículo:", error);
    }
  }
}
