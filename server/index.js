const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { db, Pokemon } = require("./db");
const { autocompleteRouter } = require("./routers/autocompleteRouter");
const { matchupHandler, typeHandler } = require("./routers/pokemonRouter");
const app = express();
const corsMiddleware = cors();
const port = 3000;

app
  .use(corsMiddleware)
  .use(bodyParser.json())
  .use(autocompleteRouter)
  .get("/type/:pokemon", typeHandler)
  .get("/matchup", matchupHandler)
  .listen(port, () => console.log(`Listening on port ${port}`));

db.sync()
  .then(() => console.log("Database connected"))
  .catch(err => console.error(err));
