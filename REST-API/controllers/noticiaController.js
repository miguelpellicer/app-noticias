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
        return res.status(404).send('No hay noticias');

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
    //se guarda la imagen en una variable
    console.log(req.file);

    /*const imagen = req.file;
    let noticia;

    if(!imagen){
        //si la imagen no existe se crea una noticia sin imagen (se insertara la imagen por defecto automaticamente)
        noticia = new Noticia({
            titulo: req.body.titulo,
            resumen: req.body.resumen,
            cuerpo: req.body.cuerpo,
        });

    }else{
        noticia = new Noticia({
            titulo: req.body.titulo,
            resumen: req.body.resumen,
            cuerpo: req.body.cuerpo,
            imagen: imagen.path
        });
    }

    try{
        const noticiaGuardada =  await noticia.save();
        res.status(200).send({id: noticiaGuardada._id});
    }catch (err) {
        res.status(500).send('Error al añadir la noticia')
    }*/
}

/**
 * Método que actualiza una noticia
 * @param req
 * @param res
 */
async function updateNoticia(req, res){

    await Noticia.findByIdAndUpdate(req.params.id, req.body, (err, nuevaNoticia) => {
        if (err)
             res.status(500).send('Error al actualizar la noticia');
        else
             res.status(200).send({noticia: nuevaNoticia});
    });

}

/**
 * Método que cambia la imagen de una noticia
 * @param req
 * @param res
 */
async function cambiarImg(req, res){
    const noticia = Noticia.findOne({_id: req.params.id});
    if (!noticia){
        return res.status(404).send('No se ha encontrado la noticia');
    }

    //se coge la nueva imagen
    const imagen = req.file;
    if(!imagen){
        //si no es correcta se devuelve un codigo 415  (Unsupported Media Type)
        return res.status(415).send('No puedes utilizar esta imagen');
    }

    if (noticia.imagen !== 'images/sinImagen.png')
        //si la imagen anterior no es la por defecto se elimina del servidor
        fs.unlinkSync(noticia.imagen);

    //se actualiza la imagen
    imagenActualizada = await Noticia.updateOne({_id: noticia._id}, {$set: {imagen: imagen.path}});
    res.status(200).send('imagen actualiada con exito');
}

/**
 * Método que dado el id de una noticia se elimina
 * @param req
 * @param res
 */
async function deleteNoticia(req, res){
    const noticia = Noticia.findOne({_id: req.params.id});
    if (!noticia)
        return res.status(404).send('No se ha encontrado la noticia');

    if (noticia.imagen !== 'images/sinImagen.png')
        //si la imagen de la noticia no es la por defecto se elimina del servidor
        fs.unlinkSync(noticia.imagen);

    await Noticia.remove(err => {
        if (err)
            res.status(500).send('Error al eliminar la noticia');
        else
            res.status(200).send('Noticia eliminada con exito')
    });
}

//Se exportan todos los metodos
module.exports = {
    getAllNoticias,
    getNoticia,
    addNoticia,
    updateNoticia,
    deleteNoticia,
    cambiarImg
};
