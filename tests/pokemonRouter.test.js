const { typeMatchup } = require('../routers/pokemonRouter')

describe('Damage Relation', () => {
    test('Water to fire is double damage', async() => {
        const enemy = 'fire';
        const mine = 'water';
        const superagent = {
            "get": jest.fn().mockResolvedValue({"body": {
                "damage_relations":{
                    "double_damage_to":[{ "name": "fire" }]
                }
            }})
        }
        const damageRelation = await typeMatchup(enemy, mine, superagent);
        expect(damageRelation).toEqual('double_damage_to')
    })

    test('Water to grass is half damage', async() => {
        const enemy = 'grass';
        const mine = 'water';
        const superagent = {
            "get": jest.fn().mockResolvedValue({"body": {
                "damage_relations":{
                    "half_damage_to":[{ "name": "grass" }]
                }
            }})
        }
        const damageRelation = await typeMatchup(enemy, mine, superagent);
        expect(damageRelation).toEqual('half_damage_to')
    })

})
