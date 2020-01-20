import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoticiaListaComponent} from "./components/noticia-lista/noticia-lista.component";
import {NoticiaFormComponent} from "./components/noticia-form/noticia-form.component";


// SE CONFIGURAN LAS RUTAS
const routes: Routes = [
  {
    path: '',
    redirectTo: '/noticias',
    pathMatch: 'full'
  },
  {
    path: 'noticias',
    component: NoticiaListaComponent
  },
  {
    path: 'noticias/add',
    component: NoticiaFormComponent
  },
  {
    path: 'noticias/edit/:id',
    component: NoticiaFormComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
