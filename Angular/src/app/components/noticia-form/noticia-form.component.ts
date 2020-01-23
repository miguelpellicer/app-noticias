import {Component, HostBinding, OnInit} from '@angular/core';
import {Noticia} from "../../../models/Noticia";
import {NoticiaService} from "../../services/noticia.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Comentario} from "../../../models/Comentario";

@Component({
  selector: 'app-noticia-form',
  templateUrl: './noticia-form.component.html',
  styleUrls: ['./noticia-form.component.css']
})
export class NoticiaFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';


  noticia: Noticia = {
    _id : '0',
    titulo : '',
    resumen: '',
    cuerpo: '',
    imagen: '',
    autor: '',
    comentarios : [{}],
    created_at: new Date(),
    categoria: ''
  };

  comentarios: Comentario[] = [];

  edit: boolean = false;

  constructor(private noticiaService: NoticiaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  /**
   * Cuando se ejecuta el modulo se comprueba si se viene de editar una noticia, si es el caso se coge dicha noticia
   */
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.noticiaService.getNoticia(params.id).subscribe( res => {
        console.log(res);
        this.noticia = <Noticia>res;
        this.edit = true;
        this.comentarios = this.noticia.comentarios;
      }, error => console.log(error));
    }
  }

  /**
   * Método que actualiza una noticia
   */
  actualizarNoticia() {
    delete this.noticia.created_at;
    this.noticiaService.updateNoticia(this.noticia._id, this.noticia).subscribe( res =>{
      console.log(res);
      this.router.navigate(['/']);
    }, error => console.log(error))
  }

  /**
   * Método que crea una noticia nueva
   */
  nuevaNoticia() {
    delete this.noticia._id;
    delete this.noticia.comentarios;
    delete this.noticia.created_at;
    this.noticiaService.saveNoticia(this.noticia).subscribe( res =>{
      this.router.navigate(['/noticias']);
    }, error => console.log(error)
    );
  }

}
