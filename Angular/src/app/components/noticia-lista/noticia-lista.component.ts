 import {Component, HostBinding, OnInit} from '@angular/core';
 import {NoticiaService} from "../../services/noticia.service";
 import {Router} from "@angular/router";

@Component({
  selector: 'app-noticia-lista',
  templateUrl: './noticia-lista.component.html',
  styleUrls: ['./noticia-lista.component.css']
})
export class NoticiaListaComponent implements OnInit {

  //se crea un array donde se guardaran las noticias
  noticias : any = [];
  @HostBinding('class') classes = 'row';

  constructor(private noticiaService : NoticiaService) { }


  ngOnInit() {
    //se cogen todas las noticias
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

  /**
   * Método que elimina una noticia
   * @param id
   */
  eliminarNoticia(id: string) {
    this.noticiaService.deleteNoticia(id).subscribe( res =>{
      this.getNoticias();
    }, error => console.log(error));
  }
}
