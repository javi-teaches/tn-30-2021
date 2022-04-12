const express = require('express');
const { body, check } = require('express-validator');
const router = express.Router();

const movieController = require("../../controllers/api/movies");
const genreController = require("../../controllers/api/genres");

// === GET === http://localhost:3000/api/movies
router.get("/movies", movieController.show);

// === POST === http://localhost:3000/api/movies
router.post("/movies", movieController.store);

// === GET === http://localhost:3000/api/movies/search
router.get("/movies/search", movieController.search);

// === GET === http://localhost:3000/api/movies/search-results
router.get("/movies/search-results", movieController.searchResults);

// === GET === http://localhost:3000/api/movies/:id
router.get("/movies/:id", movieController.detail);

// === DELETE === http://localhost:3000/api/movies/:id
router.delete("/movies/:id", movieController.delete);

// === GET === http://localhost:3000/api/genres
router.get("/genres", genreController.all)

// === GET === http://localhost:3000/api/genres/:id
router.get("/genres/:id", genreController.detail)

// === GET === http://localhost:3000/api/actors
router.get("/genresView", genreController.test);
router.post("/genres", [
  check("hobbies").custom((value, {req}) => {
    console.log({ value })
    console.log({req: req.body})
    return true
  }).withMessage("Error")
], genreController.testPost);

module.exports = router;