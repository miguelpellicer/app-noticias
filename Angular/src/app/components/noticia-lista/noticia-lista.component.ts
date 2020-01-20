 import { Component, OnInit } from '@angular/core';
 import {NoticiaService} from "../../services/noticia.service";

@Component({
  selector: 'app-noticia-lista',
  templateUrl: './noticia-lista.component.html',
  styleUrls: ['./noticia-lista.component.css']
})
export class NoticiaListaComponent implements OnInit {

  noticias : any = [];

  constructor(private noticiaService : NoticiaService) { }


  ngOnInit() {
    this.getNoticias();
  }

  /**
   * Método que carga todas las noticiass y los carga en un array
   */
  getNoticias(){
    this.noticiaService.getNoticias().subscribe( res =>{
      this.noticias = res
    },error => console.log(error));
  }
}
