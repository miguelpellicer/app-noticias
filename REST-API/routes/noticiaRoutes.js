// DECLARACIÓN DE VARIABLES (IMPORTS)
const router = require('express').Router();
const noticiaController = require('../controllers/noticiaController');

// SE ESPECIFICAN TODAS LAS RUTAS
router.get('/', noticiaController.getAllNoticias);
router.get('/:id', noticiaController.getNoticia);
router.post('/', noticiaController.addNoticia);
router.put('/:id', noticiaController.updateNoticia);
router.delete('/:id', noticiaController.deleteNoticia);
router.put('/comentario/:idnoticia', noticiaController.addComentario);
router.get('/page/:page', noticiaController.getNoticiasProgresivo);
router.get('/page/:page/:categoria', noticiaController.getNoticiasProgresivoCategoria);


module.exports = router;
