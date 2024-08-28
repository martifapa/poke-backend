const normalizeString = str => {
    return str.toUpperCase().replace(/\s+/g, '');
};

const filterSimilarPokemons = (arr, query) => {
    const normalizedQuery = normalizeString(query);
    return arr.filter(pokemon => normalizeString(pokemon.name).includes(normalizedQuery));
};


module.exports = {
    filterSimilarPokemons,
}