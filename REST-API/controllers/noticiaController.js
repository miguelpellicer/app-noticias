//DECLARACIÓN DE VARIABLES (IMPORTS)
const Noticia = require('../models/Noticia');
//fs es una clase de node que ayuda a la hora de tratar con ficheros, en este caso lo utilizare para eliminar imagenes
const fs = require('fs');

/**
 * Método que devuelve todas las noticias
 * @param req
 * @param res
 */
async function getAllNoticias(req, res) {
    const noticias = await Noticia.find({});

    if (!noticias)
        return res.status(404).send('No hay noticias')

    res.status(200).send(noticias);
}

/**
 * Metodo que te devuelve una noticia dado el ID
 * @param req
 * @param res
 */
async function getNoticia(req, res){
    const noticia = await Noticia.findOne({_id: req.user});
    if (!noticia)
        return res.status(404).send('No se ha encontrado la noticia');

    res.status(200).send({
        "titulo": noticia.titulo,
        "resumen": noticia.resumen,
        "cuerpo": noticia.cuerpo,
        "imagen": noticia.imagen
    });
}

/**
 * Metodo que añade una Noticia
 * @param req
 * @param res
 */
async function addNoticia(req, res){
    const noticia = new Noticia({
        titulo: res.body.titulo,
        resumen: res.body.resumen,
        cuerpo: res.body.cuerpo,
        imagen: res.body.imagen
    });
    //TODO terminar esto y guardar la imagen
}

async function updateNoticia(req, res){

}

async function deleteNoticia(req, res){

}

//Se exportan todos los metodos
module.exports = {
    getAllNoticias,
    getNoticia,
    addNoticia,
    updateNoticia,
    deleteNoticia
};
