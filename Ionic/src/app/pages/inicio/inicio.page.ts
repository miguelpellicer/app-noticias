import { Component, OnInit } from '@angular/core';
import {Noticia} from "../../../Models/Noticia";
import {NoticiaServiceService} from "../../Services/noticia-service.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //array de las noticias
  noticias : Noticia[];
  //un número para saber cuantas noticias tiene esa página (se usara en el infiniteScroll)
  perPage : number;
  //página que se esta solicitando (por defecto será la 1)
  page : number = 1;

  data : data1 = {
    'page' : 0,
    'thisPage' : 0,
    'noticias': [{_id : '0',
      titulo : '',
      resumen: '',
      cuerpo: '',
      imagen: '',
      autor: '',
      comentarios : [{}],
      created_at: new Date(),
      categoria: ''}],
  };

  constructor(private noticiaService: NoticiaServiceService) { }

  ngOnInit() {
    this.getNoticiaPage(this.page);
  }

  getNoticiaPage(page: number){
    this.noticiaService.getPage(page).subscribe( res =>{
      console.log(res);
      console.log(res.noticias[0]);
      //TODO noticias = res.noticias
      this.perPage = res.thisPage;
      console.log('perPage:' + this.perPage);
    })
  }

}

export interface data1 {
  "page": number,
  "thisPage": number,
  "noticias": Noticia[]
}
