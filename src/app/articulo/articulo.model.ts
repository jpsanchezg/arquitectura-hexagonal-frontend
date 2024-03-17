export class Articulo{
    titulo: string;
    link: string;
    votos:  number;

    constructor(titulo: string,link: string, votos?: number){
        this.titulo = titulo
        this.link = link
        this.votos = votos || 0
    }

    meGusta(){
        this.votos += 1
    }

    noMeGusta(){
        this.votos -= 1
    }
}