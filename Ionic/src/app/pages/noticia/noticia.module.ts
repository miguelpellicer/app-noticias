import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaPageRoutingModule } from './noticia-routing.module';

import { NoticiaPage } from './noticia.page';
import {ComponentModule} from "../../components/component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NoticiaPageRoutingModule,
        ComponentModule
    ],
  declarations: [NoticiaPage]
})
export class NoticiaPageModule {}
