//DECLARACIÓN DE VARIABLES (IMPORTS)
const Noticia = require('../models/Noticia');

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
    noticia = await Noticia.findOne({_id: req.params.id});
    if (!noticia)
        return res.status(404).send('No se ha encontrado la noticia');

    res.status(200).send({
        "_id": noticia._id,
        "titulo": noticia.titulo,
        "resumen": noticia.resumen,
        "cuerpo": noticia.cuerpo,
        "imagen": noticia.imagen,
        "comentarios": noticia.comentarios,
        "created_at" : noticia.created_at
    });
}

/**
 * Metodo que añade una Noticia
 * @param req
 * @param res
 */
async function addNoticia(req, res){

    //Se crea la nueva noticia
    noticia = new Noticia({
        titulo: req.body.titulo,
        resumen: req.body.resumen,
        cuerpo: req.body.cuerpo,
        imagen: req.body.imagen
    });

    try{
        const noticiaGuardada =  await noticia.save();
        res.status(200).send({id: noticiaGuardada._id});
    }catch (err) {
        res.status(500).send('Error al añadir la noticia')
    }
}

/**
 * Método que actualiza una noticia
 * @param req
 * @param res
 */
async function updateNoticia(req, res){
    const noticiaId = req.params.id;
    const update = req.body;

    await Noticia.findByIdAndUpdate(noticiaId, update, (err, noticiaActualizada) => {
        if (err)
            return res.status(500).send(err);

        res.status(200).send('okey makey');
    });
}

/**
 * Método que dado el id de una noticia se elimina
 * @param req
 * @param res
 */
async function deleteNoticia(req, res){
    noticia = await Noticia.findOne({_id: req.params.id});
    if (!noticia)
        return res.status(404).send('No se ha encontrado la noticia');

    await noticia.deleteOne(err => {
        if (err)
            res.status(500).send('Error al eliminar la noticia');
        else
            res.status(200).send('Noticia eliminada con exito')
    });
}

/**
 * Método que dado el id de una noticia añade un comentario
 * @param req
 * @param res
 */
async function addComentario(req, res){
    noticia = await Noticia.findOne({_id: req.params.idnoticia});
    if (!noticia)
        return res.status(404).send('Esa noticia no existe');

    const comentario = {
        nombre : req.body.nombre,
        contenido : req.body.contenido
    };
    let comentarios = noticia.comentarios;
    comentarios.push(comentario);
    comentariosActualizados = await Noticia.updateOne({_id : noticia._id}, {$set : { comentarios: comentarios}});
    res.status(200).send('Comentario agregado con exito');


}

/**
 * Método que dado los id de un comentario y de una noticia elimina ese comentario
 * @param req
 * @param res
 */
async function deleteComentario(req, res){
    noticia = await Noticia.findOne({_id: req.params.idnoticia});
    if (!noticia)
        return res.status(404).send('Esa noticia no existe');

    let comentarios = noticia.comentarios;

    for (let c of comentarios){
        //se encuentra el comentario y se elimina
        if (req.params.idcomentario == c._id){
            comentarios.splice( comentarios.indexOf(c), 1 );
            break;
        }
    }
    comentariosActualizados = await Noticia.updateOne({_id : noticia._id}, {$set : { comentarios: comentarios}});
    res.status(200).send('Comentario eliminado con exito');


}

//Se exportan todos los metodos
module.exports = {
    getAllNoticias,
    getNoticia,
    addNoticia,
    updateNoticia,
    deleteNoticia,
    deleteComentario,
    addComentario
};
