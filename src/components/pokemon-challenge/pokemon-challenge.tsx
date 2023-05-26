import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import { getRandomPokemon } from "~/services/pokemonsService";
import Pokemon from "../pokemon/pokemon";

export default component$(() => {
    const time:number = 5;

    const store = useStore({
        pokemonName: '',
        inputPokemon: '',
        hidePokemon: true
    });

    const pokemonsResource = useResource$(({ track, cleanup }) => {
        const controller = new AbortController();
        cleanup(() => controller.abort());
        return getRandomPokemon();
    });

    return (
        <>
            <div class="challenge-cont">
                <Resource
                    value={pokemonsResource}
                    onPending={() => <p>Loading...</p>}
                    onResolved={(data) => {
                            store.pokemonName = data.randPokemon.name;
                            return (<Pokemon randPokemon={data.randPokemon} pokemonInfo={data.pokemonInfo} hidePokemon={store.hidePokemon}></Pokemon>)
                        }
                    }
                />
            </div>
            <div>
                    <input type="text" 
                        value={store.inputPokemon}
                        onInput$={(ev) => (store.inputPokemon = (ev.target as HTMLInputElement).value)}
                    />
                    <button onClick$={()=>{
                        console.log(store.pokemonName);
                        if(store.inputPokemon==store.pokemonName){
                            alert("It's "+ store.pokemonName);
                            store.hidePokemon = false;
                        }else{
                            alert("It's "+ store.inputPokemon + "? I dont think so");
                        }
                    }}>Send</button>
            </div>
        </>
    )
})