import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  //Se crea un array con las categorias

  categorias = [
    'Economia',
    'Sociedad',
    'Medio Ambiente',
    'Deporte',
    'Ciencia'
  ];

  constructor() { }

  ngOnInit() {}

}
