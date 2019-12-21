const typeMatchup = async(enemy, mine, superagent) => {
    const res = await superagent.get(`https://pokeapi.co/api/v2/type/${mine}`)
    const found = res.body.damage_relations.double_damage_to.find(item => item.name === enemy)    
    if (found){return 'double_damage_to'}
}

module.exports = { typeMatchup }