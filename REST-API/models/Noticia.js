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
    autor: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
        default: './assets/images/imagen-no-disponible.png'
        //por defecto tiene la imagen "sin imagen"
    },
    comentarios : {
        type: [{
            nombre: String,
            correo: String,
            contenido: String
        }],
        required: true,
        default: []
    },
    created_at: {
        type: Date,
        required: true,
        default: new Date()
    },
    categoria: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Noticia', noticiaSchema);
