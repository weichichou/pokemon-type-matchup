const { Router } = require("express");
const autocompleteRouter = new Router();
const { PokemonList } = require("../pokemon-list");

const getPokemonsByPrefix = (prefix, database) => {
  const pokemons = database.filter(pokemon => pokemon.name.startsWith(prefix));
  return pokemons.map(pokemon => pokemon.name);
};

autocompleteRouter.get("/array/:prefix", async (req, res, _) => {
  const { prefix } = req.params;
  const pokemonArray = getPokemonsByPrefix(prefix, PokemonList);
  res.status(200).send(pokemonArray);
});

module.exports = { getPokemonsByPrefix, autocompleteRouter };
