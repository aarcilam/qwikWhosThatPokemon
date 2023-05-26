import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { getRandomPokemon } from "~/services/pokemonsService";
import Pokemon from "../pokemon/pokemon";

export default component$(() => {

    const pokemonsResource = useResource$(({ track, cleanup }) => {
        const controller = new AbortController();
        cleanup(() => controller.abort());
        return getRandomPokemon();
    });

    return (
        <div class="challenge-cont">
            <Resource
                value={pokemonsResource}
                onPending={() => <p>Loading...</p>}
                onResolved={(data) => <> <Pokemon randPokemon={data.randPokemon} pokemonInfo={data.pokemonInfo} hidePokemon={true}></Pokemon> </>}
            />
        </div>
    )
})