const { getAllPokemons, getPokemonData, getPokemonsByColor } = require("../services/pokemon");
const { filterSimilarPokemons } = require("../utils/utils");


const findByName = async (name) => {
    const pokemons = await getAllPokemons();
    const matches = filterSimilarPokemons(pokemons, name);
    const results = [];
    for (const match of matches) {
        const pokemon = await getPokemonData(match);
        results.push(pokemon);
    }

    return {
        count: results.length,
        results
    };
};

const findByColor = async (color) => {
    const pokemons = await getPokemonsByColor(color);
    const results = [];
    for (const match of pokemons.pokemon_species) {
        const pokemon = await getPokemonData(match);
        if (pokemon) results.push(pokemon);
    }
    return results.sort((a, b) => a.base_experience - b.base_experience);
}


module.exports = {
    findByName,
    findByColor,
};