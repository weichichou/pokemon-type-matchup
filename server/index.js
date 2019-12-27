const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { matchupHandler } = require("./routers/pokemonRouter");
const app = express();
const corsMiddleware = cors();
const port = 3000;

app
  .use(corsMiddleware)
  .use(bodyParser.json())
  .get("/matchup", matchupHandler)
  .listen(port, () => console.log(`Listening on port ${port}`));
