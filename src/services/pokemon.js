const axios = require('axios');
const { POKE_API_BASE_URL } = require('../constants');

const extractPokemonData = (data) => ({
    name: data.name,
    base_experience: data.base_experience,
    height: data.height,
    weight: data.weight
});

const getAllPokemons = async () => {
    const { data } = await axios.get(`${POKE_API_BASE_URL}/pokemon-species/?limit=1026`);
    return data.results.map(pokemon => ({
        name: pokemon.name,
        url: pokemon.url
    }));
};

const getPokemonData = async (pokemon) => {
    try {
        const { data } = await axios.get(`${POKE_API_BASE_URL}/pokemon/${pokemon.name}`);
        return extractPokemonData(data);
    } catch (error) {
        try { // Retry with Pokemon number
            const pokemonNumber = pokemon.url.split('/').filter(Boolean).pop();
            const { data } = await axios.get(`${POKE_API_BASE_URL}/pokemon/${pokemonNumber}`);
            return extractPokemonData(data);
        } catch (secondError) {
            console.error(`Second attempt failed for ${pokemon.name}.`, secondError);
            return null;
        }
    }
};

const getPokemonsByColor = async (color) => {
    const response = await axios.get(`${POKE_API_BASE_URL}/pokemon-color/${color}`);
    return response.data;
};


module.exports = {
    getAllPokemons,
    getPokemonData,
    getPokemonsByColor,
};