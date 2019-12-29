const getType = async (input, httpClient) => {
  let res;
  try {
    res = await httpClient.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
  const { sprites, types } = res.body;
  const result = {
    imgUrl: "",
    type: []
  };
  result.imgUrl = sprites.front_default;
  result.type = types.map(item => item.type.name);
  return result;
};

const typeMatchup = async (enemy, mine, httpClient) => {
  let res;
  try {
    res = await httpClient.get(`https://pokeapi.co/api/v2/type/${mine}`);
  } catch (error) {
    console.error(error);
  }
  const { damage_relations } = res.body;
  let result = [];
  for (const property in damage_relations) {
    const found = damage_relations[property].find(item => item.name === enemy);
    if (found) {
      result.push(property);
    }
  }
  if (result.length !== 0) {
    return result;
  } else {
    return ["normal effectiveness"];
  }
};

const superagent = require("superagent");
const typeHandler = async (req, res) => {
  const { pokemon } = req.params;
  const result = await getType(pokemon, superagent);
  res.status(200).send(result);
};

const matchupHandler = async (req, res) => {
  const { mine, enemy } = req.query;

  try {
    const myDetail = await getType(mine, superagent);
    const myType = myDetail.type[0];
    const enemyDetail = await getType(enemy, superagent);
    const enemyType = enemyDetail.type[0];
    const result = await typeMatchup(enemyType, myType, superagent);
    res.status(200).send(result);
  } catch (error) {
    if (error.status === 404) {
      res.status(404).send("Please check your input");
    }
    res.status(500).send("Failed to call the pokeapi");
  }
};

module.exports = { getType, typeMatchup, matchupHandler, typeHandler };
