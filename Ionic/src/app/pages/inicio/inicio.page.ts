import { Component, OnInit } from '@angular/core';
import {Noticia} from "../../../Models/Noticia";
import {NoticiaServiceService} from "../../Services/noticia-service.service";
import {log} from "util";
import {source} from "@angular-devkit/schematics";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //array de las noticias
  noticias : Noticia[] = [];
  //un número para saber cuantas noticias tiene esa página (se usara en el infiniteScroll)
  perPage : number;
  //página que se esta solicitando (por defecto será la 1)
  page : number = 1;

  constructor(private noticiaService: NoticiaServiceService) { }

  ngOnInit() {
    this.cargarNoticias();
  }

  /**
   * Método para cargar una página de noticias
   *
   * el evento es opcional porque la primera vez no lo recibe pero el resto si
   */
  cargarNoticias(event?){
    this.noticiaService.getPage(this.page).subscribe( res => {
      console.log(res);
      //se carga una pagina de la API
      this.noticias = this.noticias.concat(res['noticias']); //se concatenan las noticias al array de noticias
      // @ts-ignore
      this.perPage = res.thisPage; //se guardan las noticias que haya en la pagina actual

      //si hay evento lo marca como completado una vez ha hecho lo necesario
      if (event){
        event.target.complete();
      }

    });
  }

  /**
   * Método que es llamado por el infiniteScroll para cargar mas noticias
   * @param event
   */
  cargarMas(event) {
    this.page++;
    this.cargarNoticias(event);

    //Si la página actual tiene menos de 5 elementos se desactiva el infiniteScroll porque ya no hay mas noticias
    if (this.perPage < 5)
      event.target.disabled = true;
  }

}
