export async function getPokemons(max:number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${max}&offset=0`);
    const data = await response.json();
    return data.results;
}

export async function getRandomPokemon() {
    const maxPokedex = 250;
    const allPokemons = await getPokemons(maxPokedex);
    var randomNumber = Math.floor(Math.random() * (maxPokedex+1)); // Multiplicado por 151 porque el rango es exclusivo en el límite superior
    const randPokemon = allPokemons[randomNumber];
    const pokemonInfo = await getPokemonInfo(randPokemon.url);
    return {randPokemon,pokemonInfo};
}

export async function getPokemonInfo(pokemonUrl:string) {
    const response = await fetch(pokemonUrl);
    const data = await response.json();
    return data;
}