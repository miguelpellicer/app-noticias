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
        required: true,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png'
        //por defecto tiene la imagen "sin imagen"
    },
    comentarios : {
        type: [{
            nombre: String,
            contenido: String
        }],
        required: true,
        default: []
    }
});

module.exports = mongoose.model('Noticia', noticiaSchema);
