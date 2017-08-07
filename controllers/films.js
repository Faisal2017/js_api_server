var express = require('express');
var filmsRouter = new express.Router();

//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

filmsRouter.post('/:id/review', function(req, res) {
  var foundFilm = films[req.params.id];
  var jsFilm = new Film(foundFilm);
  jsFilm.addReview(req.body.review);
  res.json({data: films});
})

filmsRouter.post('/', function(req, res) {
  films.push(req.body.film);
  res.json({data: films});
})

filmsRouter.put('/:id', function(req, res) {
  films[req.params.id] = req.body.film;
  res.json({ data: films});
})

filmsRouter.get('/', function(req, res) {
  res.json( films );
})

filmsRouter.get('/:id', function(req, res) {
  res.json( films[req.params.id] );
})

filmsRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json({ data: films});
})

module.exports = filmsRouter;