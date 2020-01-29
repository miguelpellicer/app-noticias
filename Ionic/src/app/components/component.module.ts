import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {HeaderComponent} from "./header/header.component";



@NgModule({
  declarations: [
      MenuComponent,
      HeaderComponent
  ],
  exports: [
      MenuComponent,
      HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class ComponentModule { }
