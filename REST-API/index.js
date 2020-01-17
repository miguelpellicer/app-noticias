// DECLARACIÓN DE VARIABLES (IMPORTS)
const express = require('express');
const mongoose = require('mongoose');
const noticiaRoutes = require('routes/noticiaRoutes');

// INICIALIZACIÓN DE EXPRESS
const app = express();

// CONEXIÓN A LA BD (mongoDB)
mongoose.connect('mongodb+srv://app-noticias-api:xzlzXWgbIw3hU4qs@app-noticias-f2gik.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, () => console.log('Conectado a la BD'));

// SE CONFIGURA EXPRESS
app.use(express.json());
app.use('/api/noticia', noticiaRoutes);

// SE INICIALIZA LA ESCUCHA EN EL PUERTO 3000
app.listen(3000, () => console.log('API REST FUNCIONANDO'));
