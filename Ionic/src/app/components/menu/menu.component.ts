import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../Models/Categoria';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  //Se crea un array con las categorias
  //cada categoria tiene un icono y donde se va a redirigir al apretar

  categorias : Categoria[] = [
    {
      'icon' : 'paper',
      'name' : 'inicio',
      'redirectTo' : '/noticias'
    },
    {
      'icon' : 'trending-up',
      'name' : 'Economia',
      'redirectTo' : '/noticias/economia'
    },
    {
      'icon' : 'people',
      'name' : 'Sociedad',
      'redirectTo' : '/noticias/sociedad'
    },
    {
      'icon' : 'leaf',
      'name' : 'Medio Ambiente',
      'redirectTo' : '/noticias/medioambiente'
    },
    {
      'icon' : 'american-football',
      'name' : 'Deporte',
      'redirectTo' : '/noticias/deporte'
    },
    {
      'icon' : 'flask',
      'name' : 'Ciencia',
      'redirectTo' : '/noticias/ciencia'
    }
  ];


  constructor() { }

  ngOnInit() {}

}
