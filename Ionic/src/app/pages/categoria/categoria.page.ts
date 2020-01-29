import { Component, OnInit } from '@angular/core';
import {Noticia} from "../../../Models/Noticia";
import {NoticiaServiceService} from "../../Services/noticia-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  //array de las noticias
  noticias : Noticia[] = [];
  //un número para saber cuantas noticias tiene esa página (se usara en el infiniteScroll)
  perPage : number;
  //página que se esta solicitando (por defecto será la 1)
  page : number = 1;
  //la categoria que se va a buscar
  categoria : string;

  constructor(private noticiaService: NoticiaServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;
    //se captura la categoria que intentan acceder
    this.cargarNoticias()
  }

  /**
   * Metodo que carga las noticias de cierta categoria
   * @param event
   */
  cargarNoticias(event?){
    this.noticiaService.getPageCategory(this.page, this.categoria).subscribe( res => {
      //se carga una pagina de la API
      this.noticias = this.noticias.concat(res['noticias']); //se concatenan las noticias al array de noticias
      // @ts-ignore
      this.perPage = res.thisPage; //se guardan las noticias que haya en la pagina actual

      console.log(res);

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

  /**
   * metodo que dado una id va a la pagina de esa noticia
   * @param id
   */
  verNoticia(id: string) {
    this.router.navigate([`/noticia/${id}`]);
  }

}
