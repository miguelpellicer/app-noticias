// DECLARACIÓN DE VARIABLES (IMPORTS)
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const noticiaRoutes = require('./routes/noticiaRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

// SE CONFIGURA CORS
app.use(cors());
// SE CONFIGURAN LAS VARIABLES DE ENTORNO
dotenv.config();

// COSAS QUE ESPECIFICA LA DOCUMENTACION DE MONGOOSE QUE HAY QUE HACER
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// CONEXIÓN A LA BD (mongoDB)
mongoose.connect(process.env.DB_CONNECT, () => console.log('Conectado a la BD'));


// SE CONFIGURA EXPRESS
app.use(express.json());
app.use('/api/noticia', noticiaRoutes);

// SE INICIALIZA LA ESCUCHA EN EL PUERTO 3000
app.listen(3000, () => console.log('API REST FUNCIONANDO'));
