import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import PokemonChallenge from '~/components/pokemon-challenge/pokemon-challenge';

export default component$(() => {
  return (
    <PokemonChallenge></PokemonChallenge>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
