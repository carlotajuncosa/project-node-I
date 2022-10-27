const express = require('express');
const Movie = require('./movies.models');
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies)
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const allMovies = await DeviceMotionEvent.findById(id);
      return res.status(200).json(allMovies);
    } catch (error) {
      return next(error);
    }
  })

  router.get('/title/:title', async (req, res, next) => {
    try {
      const id = req.params.id;
      const allMovies = await DeviceMotionEvent.find({title: title});
      return res.status(200).json(allMovies);
    } catch (error) {
      return next(error);
    }
  })
  
  router.get('/genre/:genre', async (req, res, next) => {
    try {
      const id = req.params.id;
      const allMovies = await DeviceMotionEvent.find({genre: genre});
      return res.status(200).json(allMovies);
    } catch (error) {
      return next(error);
    }
  })
  router.get('/year/:year', async (req, res, next) => {
    try {
      const id = req.params.id;
      const allMovies = await DeviceMotionEvent.find({year:{$gte:year}});
      return res.status(200).json(allMovies);
    } catch (error) {
      return next(error);
    }
  })

module.exports = router;