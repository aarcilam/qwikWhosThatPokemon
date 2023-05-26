import { component$ } from "@builder.io/qwik";

interface PokemonProps{
    randPokemon: {
        name: string,
        url: string,
    },
    pokemonInfo: {
        sprites: {
            back_default: string | undefined;
            back_female: string | undefined;
            back_shiny: string | undefined;
            back_shiny_female: string | undefined;
            front_default: string | undefined;
            front_female: string | undefined;
            front_shiny: string | undefined;
            front_shiny_female: string | undefined;
        }
    },
    hidePokemon: boolean
}
export default component$((props: PokemonProps)=>{
    let style = "filter: brightness(0);width:200px;";
    if(props.hidePokemon == false){
        style="width:200px;";
    }
    return(
        <div style="padding:120px;">
            <img src={props.pokemonInfo.sprites.front_default} alt="" style={style}/>
        </div>
    )
})