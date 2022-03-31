const { Genre } = require("../../database/models");

module.exports = {
  all: async (req, res) => {
    const genresList = await Genre.findAll({});
    return res.json(genresList)
  }
};
