import { create } from 'zustand';

import { PokemonModel } from '@/models';

type PokedexStore = {
  pokedex: PokemonModel[];
  setPokedex: (pokedexArr: PokemonModel[]) => void;
};

const usePokedexStore = create<PokedexStore>((set) => ({
  pokedex: [],
  setPokedex: (pokedexArr: PokemonModel[]) =>
    set({
      pokedex: pokedexArr,
    }),
}));

export default usePokedexStore;
