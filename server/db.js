const { Sequelize, Model, DataTypes } = require("sequelize");
const databaseUrl = "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

class Pokemon extends Model {}
Pokemon.init(
  {
    pokedexId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  { sequelize: db, modelName: "pokemon" }
);

module.exports = { db, Pokemon };
