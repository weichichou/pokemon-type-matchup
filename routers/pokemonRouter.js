const getType = async(input, superagent) => {
    const res = await superagent.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    const { types } = res.body
    return types.map(item => item.type.name)
}

const typeMatchup = async(enemy, mine, superagent) => {
    const res = await superagent.get(`https://pokeapi.co/api/v2/type/${mine}`)
    const { damage_relations } = res.body
    for (const property in damage_relations){
        const found = damage_relations[property].find(item => item.name === enemy)
        if(found){
            return property
        }
    }
    return 'normal effectiveness'
}

module.exports = { getType, typeMatchup }