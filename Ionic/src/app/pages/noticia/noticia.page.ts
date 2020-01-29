import { Component, OnInit } from '@angular/core';
import {Noticia} from "../../../Models/Noticia";
import {NoticiaServiceService} from "../../Services/noticia-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  noticia: Noticia;
  titulo: string = "cargando"; //fijo un texto por defecto para que se cambie luego cuando ya tengo la noticia cargada

  constructor(private noticiaService: NoticiaServiceService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.getNoticia(params.id);

  }

  /**
   * Metodo que dado un id carga una noticia
   * @param id
   */
  getNoticia(id:string){
    this.noticiaService.getNoticia(id).subscribe(res => {
      this.noticia = <Noticia>res;
      this.titulo = this.noticia.titulo; //asigno el titulo de la noticia al titulo de la pagina
    });
  }

}
