import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { BackButton } from "~/components/BackButton";
import { PokemonStats } from "~/components/PokemonStats";
import { PokemonAbilities } from "~/components/PokemonAbilities";
import { PokemonMoves } from "~/components/PokemonMoves";
import { PokemonEvolutionChain } from "~/components/PokemonEvolutionChain";
import { PokemonDetails } from "~/components/PokemonDetails";
import { Tabs } from "~/components/Tabs";

export const loader = async ({ params }: any) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  if (!response.ok) throw new Error("Failed to fetch Pokémon data");
  const pokemon = await response.json();

  const speciesResponse = await fetch(pokemon.species.url);
  const speciesData = await speciesResponse.json();
  const evolutionResponse = await fetch(speciesData.evolution_chain.url);
  const evolutionData = await evolutionResponse.json();

  return { pokemon, evolutionData };
};

export default function PokemonDetail() {
  const { pokemon, evolutionData } = useLoaderData();
  const [activeTab, setActiveTab] = useState("stats");

  return (
    <div className="flex flex-col items-center gap-8 p-6 mb-5 min-h-[92vh] pt-[100px]">
      <BackButton />
      <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="w-64 h-64"
      />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "stats" && <PokemonStats stats={pokemon.stats} />}
      {activeTab === "abilities" && <PokemonAbilities abilities={pokemon.abilities} />}
      {activeTab === "moves" && <PokemonMoves moves={pokemon.moves} />}
      {activeTab === "evolution" && <PokemonEvolutionChain chain={evolutionData.chain} />}

      <PokemonDetails weight={pokemon.weight} height={pokemon.height} />
    </div>
  );
}
