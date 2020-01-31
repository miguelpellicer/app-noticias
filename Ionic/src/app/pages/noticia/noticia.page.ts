import { Component, OnInit } from '@angular/core';
import {Noticia} from "../../../Models/Noticia";
import {NoticiaServiceService} from "../../Services/noticia-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {templateJitUrl} from "@angular/compiler";
import {Comentario} from "../../../Models/Comentario";
import {ToastController} from "@ionic/angular";
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  //se añaden las opciones del navegador
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no'
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only
    toolbar: 'yes', //iOS only
    enableViewportScale: 'no', //iOS only
    allowInlineMediaPlayback: 'no',//iOS only
    presentationstyle: 'pagesheet',//iOS only
    fullscreen: 'yes',//Windows only
  };


  //Se le da valores iniciales a la noticia para que pueda cargar
  noticia: Noticia = {
    _id: "",
    autor: "",
    categoria: "",
    comentarios: [undefined],
    created_at: undefined,
    cuerpo: "",
    imagen: "",
    resumen: "",
    titulo: ""

  };

  comentarios: Comentario[] = []; //creo un array vacio de comentarios
  titulo: string = "cargando"; //fijo un texto por defecto para que se cambie luego cuando ya tengo la noticia cargada

  fecha: string = "";

  //creo el comentario vacio para cuando se vaya a añadir comentarios
  comentario: Comentario = {
    _id: '',
    nombre: '',
    correo: '',
    contenido: ''
  };

  // ESTAS VARIABLES SON PARA PODER VACIAR EL TEXTO DESPUES, IGNORAR
  txtEmail: string;
  txtNombre: string;
  txtContenido: string;


  constructor(private noticiaService: NoticiaServiceService, private activatedRoute: ActivatedRoute, public toastController: ToastController, private router: Router, private iab: InAppBrowser) {
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.getNoticia(params.id);

  }

  /**
   * Metodo que dado un id carga una noticia
   * @param id
   */
  getNoticia(id: string) {
    this.noticiaService.getNoticia(id).subscribe(res => {
      this.noticia = <Noticia>res;
      this.titulo = this.noticia.titulo; //asigno el titulo de la noticia al titulo de la pagina
      this.comentarios = this.noticia.comentarios;
      const fecha = new Date(this.noticia.created_at); //creo una fecha a partir de la fecha de la noticia
      this.fecha = fecha.toLocaleString(); //convierto la fecha a un string para mostrarlo
    });
  }

  /***
   * METODOS PARA GESTIONAR LOS COMENTARIOS
   */


  addEmailComentario(event: any) {
    this.comentario.correo = event.target.value;
  }

  addNombreComentario(event: any) {
    this.comentario.nombre = event.target.value;
  }

  addContenidoComentario(event: any) {
    this.comentario.contenido = event.target.value;
  }

  /**
   * Metodo que se llama cuando pulsan el boton
   * @param event
   */
  crearComentario(event: any) {
    const controller = this.toastController;
    if (this.comentario.correo !== '' && this.comentario.contenido !== '' && this.comentario.nombre !== '') {
      //se comprueba que esten todos los campos rellenos

      delete this.comentario._id;//se elimina el id del comentario

      //se llama a la API
      this.noticiaService.addComentario(this.comentario, this.noticia._id).subscribe(res => {
        controller.create({
          color: 'dark',
          duration: 1500,
          message: 'Comentario agregado con exito',
          position: 'middle',
          showCloseButton: false
        }).then(toast => {
          toast.present(); //se muestra el Toast
          this.comentarios.push(this.comentario); //se añade el comentario a la lista
          this.limpiarValores(); //se limpian los valores de los txt
        });
      });

    } else {
      controller.create({
        color: 'warning',
        duration: 1500,
        message: 'Debes rellenar todos los campos',
        position: 'middle',
        showCloseButton: false
      }).then(toast => {
        toast.present();
      })
    }

  }

  /**
   * Metodo que vacia los campos de texto del formulario de añadir comentarios
   */
  private limpiarValores() {
    this.txtContenido = '';
    this.txtEmail = '';
    this.txtNombre = '';
  }

  /**
   * Método que te abre una URL en el navegador por defecto del terminal
   * @param url
   */
  public openWithSystemBrowser(url: string) {
    let target = "_system";
    this.iab.create(url, target, this.options);
  }

}
