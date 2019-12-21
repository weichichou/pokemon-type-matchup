const { typeMatchup } = require('../routers/pokemonRouter')

describe('Damage Relation', () => {
    test('Water versus fire is double damage', async() => {
        const enemy = 'fire';
        const mine = 'water';
        const superagent = {
            "get": jest.fn().mockResolvedValue({"body": {
                "damage_relations":{
                    "double_damage_to":[
                        {
                            "name":"fire",
                            "url":"https://pokeapi.co/api/v2/type/10/"
                        }
                    ]
                }
            }})
        }
        const damageRelation = await typeMatchup(enemy, mine, superagent);
        expect(damageRelation).toEqual('double_damage_to')
    })
})
