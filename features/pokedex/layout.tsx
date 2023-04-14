import React from 'react';
import Image from 'next/image';

import { dehydrate, QueryClient } from '@tanstack/react-query';
import { QueryKey } from '@/layouts/shared';

import usePokedexStore from '@/stores/pokedex';

import { fetchPokedex, useFetchPokedexQuery } from './api';
import { PokedexImageBaseUrl } from './constants';

const PokedexLayout = () => {
  useFetchPokedexQuery();

  const { pokedex } = usePokedexStore();

  return (
    <div className='justify-center text-center'>
      <h1 className='font-semibold text-[36px] my-2'>POKÉDEX</h1>
      <div className='container'>
        <div className='flex flex-wrap justify-start'>
          {pokedex.map((pokemon) => (
            <div key={pokemon.name} className='w-full  lg:w-1/4 px-8 py-4'>
              <div className='border rounded-lg overflow-hidden p-4'>
                <Image
                  className='w-full'
                  src={`${PokedexImageBaseUrl}/${pokemon.id}.svg`}
                  alt={pokemon.name}
                  width={300}
                  height={300}
                />
                <div className='p-4 text-center'>
                  <h3 className='font-bold text-xl mb-2'>{pokemon.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// prefetching data
export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery([QueryKey.Pokedex], () => fetchPokedex());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default PokedexLayout;
