import {Comentario} from "./Comentario";

export interface Noticia {
  id: string,
  title: string,
  resumen: string,
  cuerpo: string
  comentarios : [Comentario];
}
