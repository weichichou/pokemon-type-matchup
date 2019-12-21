const getType = async(input, httpClient) => {
    let res 
    try {
        res = await httpClient.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    }
    catch(error) {
        console.error(error)
        throw error
    }
    const { types } = res.body
    const result = types.map(item => item.type.name)
    return result[0]
}

const typeMatchup = async(enemy, mine, httpClient) => {
    let res
    try {
        res = await httpClient.get(`https://pokeapi.co/api/v2/type/${mine}`)
    }
    catch(error){
        console.error(error)
    }
    const { damage_relations } = res.body
    for (const property in damage_relations){
        const found = damage_relations[property].find(item => item.name === enemy)
        if(found){
            return property
        }
    }
    return 'normal effectiveness'
}

const superagent = require('superagent')
const matchupHandler = async(req, res) => {
    const { mine, enemy } = req.query
    
    try {
        const myType = await getType(mine, superagent)
        const enemyType = await getType(enemy, superagent)
        const result = await typeMatchup(enemyType, myType, superagent)
        res.status(200).send(result)
    }
    catch(error){
        // if error.... 
        res.status(500).send('Failed to call the pokeapi')
    }
}

module.exports = { getType, typeMatchup, matchupHandler }