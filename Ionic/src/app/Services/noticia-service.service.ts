import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Noticia} from "../../../../Angular/src/models/Noticia";
import {Comentario} from "../../Models/Comentario";
import {data1} from "../pages/inicio/inicio.page";

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

  saveNoticia(noticia: Noticia){
    return this.http.post(`${this.API_URI}/noticia`, noticia);
  }

  updateNoticia(id: string, noticia: Noticia){
    return this.http.put(`${this.API_URI}/noticia/${id}`, noticia);
  }

  deleteNoticia(id: string){
    return this.http.delete(`${this.API_URI}/noticia/${id}`);
  }

  addComentario(comentario: Comentario, idNoticia: string){
    return this.http.put(`${this.API_URI}/noticia/comentario/${idNoticia}`, comentario);
  }

  //metooo que dado un numrero de pagina devuelve esa página
  getPage(pagina : number){
    return this.http.get<data1>(`${this.API_URI}/noticia/page/${pagina}`);
  }
}
