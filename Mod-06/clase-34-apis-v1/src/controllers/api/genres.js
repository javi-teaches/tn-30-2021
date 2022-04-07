const { Genre } = require("../../database/models");

module.exports = {
  all: async (req, res) => {
    const genresList = await Genre.findAll({});
    return res.json(genresList);
  },
  detail: async (req, res) => {
    try {
      const oneGenre = await Genre.findByPk(req.params.id);
      if (oneGenre) {
        return res.status(200).json({
          status: 200,
          genreInfo: oneGenre
        });
      }
      return res.status(404).json({
        status: 404,
        message: "No se encontró un género",
        genreInfo: null
      })
    } catch (error) {
      return res.status(500).json({
        status: 500,
        pepinito: "Se parecé a su papá",
        message: error,
      })
    }
    
  },
  test: async (req, res) => {
    return res.render("genres");
  },
  testPost: async (req, res) => {

  }
};
