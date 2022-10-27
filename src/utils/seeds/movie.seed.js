const mongoose = require("mongoose");
const Movie = require("../../api/movies/movies.models"); //importa modelo
require('dotenv').config(); //dotenv es el "programa" que lee .env
const DB_URL = process.env.DB_URL; //importa direccion bd


const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica",
  },
];

mongoose
  .connect(DB_URL) //conecta base de datos
  .then(async () => {
    const allMovies = await Movie.find().lean(); //busca las pelis en la bd

    if (!allMovies.length) {
      console.log(`[seed]: no se encuentran las películas`);
    } else {
      console.log(`[seed]: encontradas ${allMovies.length} películas`); //número de pelis devuelto
      await Movie.collection.drop(); // borra toda la coleccion
      console.log(`[seed]: colección movies eliminada correctamente`);
    }
  })
  //la siguiente lineea es solo por si hay un error
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  //se sigue del .then aneterior
  .then(async () => {
    await Movie.insertMany(movies);
    console.log("[seed]: Nuevos películas añadidas con éxito");
  })
  .catch((error) => console.log("[seed]: Error añadiendo las películas", error))
  .finally(() => mongoose.disconnect());
