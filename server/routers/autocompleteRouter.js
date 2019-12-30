const { Op } = require("sequelize");
const { Pokemon } = require("../db");
const { Router } = require("express");
const autocompleteRouter = new Router();

autocompleteRouter.get("/array/:prefix", (req, res, next) => {
  Pokemon.findAll({
    where: {
      name: {
        [Op.startsWith]: req.params.prefix
      }
    }
  })
    .then(pokemon => {
      const array = pokemon.map(pokemon => pokemon.dataValues.name);
      res.status(200).send(array);
    })
    .catch(next);
});

module.exports = { autocompleteRouter };
