const { Op } = require("sequelize");
const { getPokemonsByPrefix } = require("../routers/autocompleteRouter");

describe("get autocomplete array", () => {
  test("prefix Z", async () => {
    const input = "Z";
    const mockDatabase = {
      findAll: jest.fn().mockReturnValue([
        {
          dataValues: { name: "Zubat" }
        },
        { dataValues: { name: "Zapdos" } }
      ])
    };
    const result = await getPokemonsByPrefix(input, mockDatabase);
    expect(result).toContain("Zapdos");
    expect(result).toContain("Zubat");
    expect(result.length).toEqual(2);
    expect(mockDatabase.findAll).toHaveBeenCalledWith({
      where: {
        name: {
          [Op.startsWith]: "Z"
        }
      }
    });
  });
});
