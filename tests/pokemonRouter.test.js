const { getType, typeMatchup } = require('../routers/pokemonRouter')

describe('Get Type By Name', () => {
    test('butterfree is flying-type', async() => {
        const input = 'butterfree';
        const superagent = {
            "get": jest.fn().mockResolvedValue({"body": {
                "types": [{
                    "type": { "name": "flying" }
                }]
            }})
        }
        const type = await getType(input, superagent);
        expect(type).toEqual(['flying'])
    })

    test('charizard is flying and fire-type', async() => {
        const input = 'charizard';
        const superagent = {
            "get": jest.fn().mockResolvedValue({"body": {
                "types": [
                    { "type": { "name": "flying" } }, 
                    { "type": { "name": "fire" } }
                ]
            }})
        }
        const type = await getType(input, superagent);
        expect(type).toEqual(['flying', 'fire'])
    })
})

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

    test('Water to poison is normal effectiveness', async() => {
        const enemy = 'poison';
        const mine = 'water';
        const superagent = {
            "get": jest.fn().mockResolvedValue({"body": {
                "damage_relations":{ }
            }})
        }
        const damageRelation = await typeMatchup(enemy, mine, superagent);
        expect(damageRelation).toEqual('normal effectiveness')
    })

})
