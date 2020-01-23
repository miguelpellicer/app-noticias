import { Injectable } from '@angular/core';
import {Componente} from "../../Models/Componente";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  /**
   * Método que coge las opciones de cada categoría
   */
  getOptions(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

}

