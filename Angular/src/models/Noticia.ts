import {Comentario} from "./Comentario";

export interface Noticia {
  _id: string,
  titulo: string,
  resumen: string,
  cuerpo: string,
  imagen?: string,
  autor: string,
  comentarios?: [Comentario],
  created_at: Date,
  categoria: string
}
