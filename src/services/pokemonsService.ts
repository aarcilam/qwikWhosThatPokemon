export async function getPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
    const data = await response.json();
    return data.results;
}