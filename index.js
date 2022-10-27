//crear servidor:
const express = require("express");
//importar dotenv
require('dotenv').config();

const {connectDb} = require('./src/utils/database/db');
//importamos la función que conecta con la base de datos que está dentro de un objeto
//en db.js y por esto la sintaxis es con llaves

connectDb();

//llamada del env:
const PORT = process.env.PORT || 8080;
//llamada base datos:
const DB_URL = process.env.DB_URL;

//asigna a server toda funcionalidad de express
const server = express();
//importar la función router del paquete express:
const router = express.Router();

const moviesRouter = require('./src/api/movies/movies.routes')

//viene del archivo de routes porque es un json y se pueda usar
server.use(express.json());

//acceso las rutas
server.use('/movies', moviesRouter);



//Hacer que el servidor escuche:
server.listen(PORT, () => {
  console.log(`Servidor a la espera de órdenes en http://localhost:${PORT}`);
});

