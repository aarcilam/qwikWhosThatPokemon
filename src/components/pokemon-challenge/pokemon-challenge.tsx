import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { getPokemons } from "~/services/pokemonsService";

export default component$(() => {

    const pokemonsResource = useResource$(({ track, cleanup }) => {

        const controller = new AbortController();
        cleanup(() => controller.abort());

        // Fetch the data and return the promises.
        return getPokemons();
    });

    return (
        <div class="challenge-cont">
            <Resource
                value={pokemonsResource}
                onPending={() => <p>Loading...</p>}
                onResolved={(data) => <h2>{data[0].name}</h2>}
            />
        </div>
    )
})