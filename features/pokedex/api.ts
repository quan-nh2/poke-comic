import axios from '@/libs/axios';
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '@/layouts/shared';

import usePokedexStore from '@/stores/pokedex';

export const fetchPokedex = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_POKEDEX_BASE_URL}/api/v2/pokemon`,
    {}
  );
};

export const useFetchPokedexQuery = () => {
  const { setPokedex } = usePokedexStore();
  return useQuery([QueryKey.Pokedex], () => fetchPokedex(), {
    onSuccess: (data: any) =>
      setPokedex(
        data.data.results.map((pokemon: any) => {
          const arr = pokemon.url.split('/');
          return {
            ...pokemon,
            id: parseInt(arr[arr.length - 2]),
          };
        })
      ),
  });
};
