import { component$ } from "@builder.io/qwik";

interface PokemonProps{
    randPokemon: {
        name: string,
        url: string
    },
    pokemonInfo: object
}
export default component$((props: PokemonProps)=>{
    return(
        <h1>{props.randPokemon.name}</h1>
    )
})