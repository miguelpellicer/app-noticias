import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Noticia} from "../../../../Angular/src/models/Noticia";
import {Comentario} from "../../Models/Comentario";

@Injectable({
  providedIn: 'root'
})

/***
 * EN ESTA CLASE SE GESTIONAN TODAS LAS POSIBLES PETICIONES A LA API
 */
export class NoticiaServiceService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getNoticias(){
    return this.http.get(`${this.API_URI}/noticia`);
  }

  getNoticia(id: string){
    return this.http.get(`${this.API_URI}/noticia/${id}`);
  }

  //metodo que añade un comentario a una noticia
  addComentario(comentario: Comentario, idNoticia: string){
    return this.http.put(`${this.API_URI}/noticia/comentario/${idNoticia}`,comentario);
  }

  //metooo que dado un numero de pagina devuelve esa página
  getPage(pagina : number){
    return this.http.get(`${this.API_URI}/noticia/page/${pagina}`);
  }

  //metodo que dado un numero de pagina y una categoria devuelve una página con noticias de ese tipo
  getPageCategory(pagina : number, categoria: string){
    return this.http.get(`${this.API_URI}/noticia/page/${pagina}/${categoria}`);
  }
}
