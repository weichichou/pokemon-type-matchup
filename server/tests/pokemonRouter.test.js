const { getType, typeMatchup } = require("../routers/pokemonRouter");

describe("Get Type By Name", () => {
  test("squirtle is water-type", async () => {
    const input = "squirtle";
    const superagent = {
      get: jest.fn().mockResolvedValue({
        body: {
          sprites: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
          },
          types: [
            {
              type: { name: "water" }
            }
          ]
        }
      })
    };
    const result = await getType(input, superagent);
    expect(result).toEqual({
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      type: ["water"]
    });
  });

  /* test("charizard is flying and fire-type", async () => {
    const input = "charizard";
    const superagent = {
      get: jest.fn().mockResolvedValue({
        body: {
          types: [{ type: { name: "flying" } }, { type: { name: "fire" } }]
        }
      })
    };
    const type = await getType(input, superagent);
    expect(type).toEqual("flying");
  }); */
});

describe("Damage Relation", () => {
  test("Water to fire will make 2x damage and receive 0.5 damage", async () => {
    const enemy = "fire";
    const mine = "water";
    const superagent = {
      get: jest.fn().mockResolvedValue({
        body: {
          damage_relations: {
            double_damage_to: [{ name: "fire" }],
            half_damage_from: [{ name: "fire" }]
          }
        }
      })
    };
    const damageRelation = await typeMatchup(enemy, mine, superagent);
    expect(damageRelation).toEqual(["double_damage_to", "half_damage_from"]);
  });

  test("Water to grass will make 0.5 damage and receive 2x damage", async () => {
    const enemy = "grass";
    const mine = "water";
    const superagent = {
      get: jest.fn().mockResolvedValue({
        body: {
          damage_relations: {
            double_damage_from: [{ name: "grass" }],
            half_damage_to: [{ name: "grass" }]
          }
        }
      })
    };
    const damageRelation = await typeMatchup(enemy, mine, superagent);
    expect(damageRelation).toEqual(["double_damage_from", "half_damage_to"]);
  });

  test("Water to poison is normal effectiveness", async () => {
    const enemy = "poison";
    const mine = "water";
    const superagent = {
      get: jest.fn().mockResolvedValue({
        body: {
          damage_relations: {}
        }
      })
    };
    const damageRelation = await typeMatchup(enemy, mine, superagent);
    expect(damageRelation).toEqual(["normal effectiveness"]);
  });
});
