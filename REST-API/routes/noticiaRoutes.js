// DECLARACIÓN DE VARIABLES (IMPORTS)
const router = require('express').Router();
const multer = require('multer'); //multer lo voy a utilizar para el almacenamiento local de imagenes
const noticiaController = require('../controllers/noticiaController');


// SE ESPECIFICAN TODAS LAS RUTAS
router.get('/', noticiaController.getAllNoticias);
router.get('/:id', noticiaController.getNoticia);
router.post('/', subirImagen.single('imagen'), noticiaController.addNoticia);
router.put('/:id', noticiaController.updateNoticia);
router.put('/img/:id', subirImagen.single('imagen'), noticiaController.cambiarImg);
router.delete('/:id', noticiaController.deleteNoticia);

// SE CONFIGURA EL MULTER
const almacenamiento = multer.diskStorage({
    destination: function (req, file, cb) {
        //se estipula donde se guardaran las imagenes
        cb(null, '../../images/')
    },
    filename: function (req, file, cb) {
        // se estipula con que nombre se van a guardar las imagenes
        // en este caso el nombre será un timestamp de la hora de subida con un substring de la parte final del nombre
        // original para mantener la extensión
        const extension = (file.originalname.substring(file.originalname.lastIndexOf('.')+1, file.originalname.length) || file.originalname);
        cb(null, new Date().toISOString()+"."+extension)
    }
});

// SE ESTIPULA QUE TIPOS DE IMAGENES SE PUEDEN SUBIR
function filtrosImagenes(req, file, cb) {
    const extension = (file.originalname.substring(file.originalname.lastIndexOf('.')+1, file.originalname.length) || file.originalname);
    if (extension === 'png' || extension === 'jpeg' || extension === 'jpg')
        cb(null, true);
    else
        cb('esa extension no esta permitida', false);
}

// FINALMENTE SE CREA EL OBJETO MULTER CON TODA SU CONFIGURACION EN LA VARIABLE subirImagen
const subirImagen = multer(
    {
        storage: almacenamiento,
        limits: {
            fileSize: 1024 * 1020 * 5 // se estipula un tamaño maximo de imagen de 5 MB
        },
        fileFilter: filtrosImagenes
    });

module.exports = router;
