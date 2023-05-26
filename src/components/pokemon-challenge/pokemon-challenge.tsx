import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import { getRandomPokemon } from "~/services/pokemonsService";
import Pokemon from "../pokemon/pokemon";

export default component$(() => {

    const store = useStore({
        pokemonName: '',
        inputPokemon: '',
        hidePokemon: true,
        getNewPokemon: false,
        points: 0,
    });

    const pokemonsResource = useResource$(async ({ track, cleanup }) => {
        track(()=>store.getNewPokemon)
        const pokemon = await getRandomPokemon();
        store.hidePokemon = true;
        return pokemon;
    });

    return (
        <div class="container">
            <div>Puntaje: {store.points}</div>
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
                        if(store.inputPokemon==store.pokemonName){
                            alert("It's "+ store.pokemonName);
                            store.hidePokemon = false;
                            store.points ++;
                            setTimeout(()=>{
                                store.getNewPokemon = !store.getNewPokemon;
                                store.inputPokemon = '';
                            },3000) 
                        }else{
                            alert("It's "+ store.inputPokemon + "? I dont think so");
                        }
                    }}>Send</button>
                    <button onClick$={()=>{
                       store.getNewPokemon = !store.getNewPokemon;
                    }}>new pokemon</button>
            </div>
        </div>
    )
})