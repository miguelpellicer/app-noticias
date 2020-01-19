// DECLARACIÓN DE VARIABLES (IMPORTS)
const router = require('express').Router();
const multer = require('multer'); //multer lo voy a utilizar para el almacenamiento local de imagenes
const noticiaController = require('../controllers/noticiaController');

//TODO IMAGENES

// SE ESPECIFICAN TODAS LAS RUTAS
router.get('/', noticiaController.getAllNoticias);
router.get('/:id', noticiaController.getNoticia);
router.post('/', subirImagen.single('imagen'), noticiaController.addNoticia);
router.put('/:id', noticiaController.updateNoticia);
router.put('/img/:id', subirImagen.single('imagen'), noticiaController.cambiarImg);
router.delete('/:id', noticiaController.deleteNoticia);


module.exports = router;
