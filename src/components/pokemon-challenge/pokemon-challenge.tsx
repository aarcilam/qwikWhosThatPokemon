import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { getRandomPokemon } from "~/services/pokemonsService";

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
                onResolved={(data) => <h2>{data.name}</h2>}
            />
        </div>
    )
})