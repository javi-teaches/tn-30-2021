const express = require('express');
const router = express.Router();

const movieController = require("../../controllers/api/movies");

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
// router.get("/genres")

// === GET === http://localhost:3000/api/actors
// router.get("/actors")

module.exports = router;