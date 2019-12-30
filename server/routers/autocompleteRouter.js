const { Op } = require("sequelize");
const { Pokemon } = require("../db");
const { Router } = require("express");
const autocompleteRouter = new Router();

const getPokemonsByPrefix = async (prefix, database) => {
  const pokemon = await database.findAll({
    where: {
      name: {
        [Op.startsWith]: prefix
      }
    }
  });
  return pokemon.map(pokemon => pokemon.dataValues.name);
};

autocompleteRouter.get("/array/:prefix", async (req, res, _) => {
  const { prefix } = req.params;
  const pokemonArray = await getPokemonsByPrefix(prefix, Pokemon);
  res.status(200).send(pokemonArray);
});

module.exports = { getPokemonsByPrefix, autocompleteRouter };
