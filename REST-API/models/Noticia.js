// DECLARACIÓN DE VARIABLES (IMPORTS)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREACION DEL TIPO DE DATO NOTICIA
const noticiaSchema = Schema({
    // tod os los datos excepto la imagen serán obligatorios, algunos como el titulo tendran longitud minima y maxima
    titulo: {
        type: String,
        required: true,
        min: 1,
        max: 100
    },
    resumen: {
        type: String,
        required: true,
        min: 1,
        max: 150
    },
    cuerpo: {
        type: String,
        required: true,
        min: 1
    },
    imagen: {
        type: String,
        required: false,
        default: 'images/sinImagen.png' //si no hay imagen se introducira por defecto la imagen de "imagen no disponible"
    }
});

module.exports = mongoose.model('Noticia', noticiaSchema);
