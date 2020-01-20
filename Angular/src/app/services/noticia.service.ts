import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comentario} from "../../models/Comentario";
import {Noticia} from "../../models/Noticia";

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

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

  addComentario(id: string, comentario: Comentario){
    return this.http.put(`${this.API_URI}/comentarios/${id}`, comentario)
  }

  deleteComentario(idNoticia: string, idComentario: string){
    return this.http.put(`${this.API_URI}/${idNoticia}/${idComentario}`, null);
  }

}
