import React from "react";
import { PokemonCard } from "./PokemonCard";

type PokemonGridProps = {
  pokemons: any[];
};

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-8">
      {pokemons.map((pokemon: any) => (
        <PokemonCard key={pokemon.url} pokemon={pokemon} />
      ))}
    </div>
  );
};
