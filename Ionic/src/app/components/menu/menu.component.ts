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
      'redirectTo' : '/inicio'
    },
    {
      'icon' : 'trending-up',
      'name' : 'Economia',
      'redirectTo' : '/economia'
    },
    {
      'icon' : 'people',
      'name' : 'Sociedad',
      'redirectTo' : '/sociedad'
    },
    {
      'icon' : 'leaf',
      'name' : 'Medio Ambiente',
      'redirectTo' : '/medioambiente'
    },
    {
      'icon' : 'american-football',
      'name' : 'Deporte',
      'redirectTo' : '/deporte'
    },
    {
      'icon' : 'flask',
      'name' : 'Ciencia',
      'redirectTo' : '/ciencia'
    }
  ];


  constructor() { }

  ngOnInit() {}

}
