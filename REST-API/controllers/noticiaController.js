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

async function getNoticia(req, res){

}

async function addNoticia(req, res){

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
