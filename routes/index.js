const express = require('express');
const router = express.Router();
const movieModel = require("./../models/Movie.model")
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    movieModel.find()
    .then((dbResult) => {
        res.render('movies', {
            movies: dbResult,
        });
    });
});

module.exports = router;
