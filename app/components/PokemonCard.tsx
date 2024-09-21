import React, { useState } from "react";
import { Link } from "@remix-run/react";

type PokemonCardProps = {
  pokemon: any;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  
  const [imgSrc, setImgSrc] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
      .split("/")
      .slice(-2)[0]}.png`
  );

  const handleImageError = () => {
    setImgSrc("/no-image.png");
  };

  const pokemonId = pokemon.url.split("/").slice(-2)[0];

  return (
    <Link
      key={pokemonId}
      to={`/pokemon/${pokemon.name}`}
      className="flex flex-col items-center p-4 rounded-lg group max-w-[136px]"
    >
      <img
        src={imgSrc}
        alt={pokemon.name}
        className="max-w-[200px] max-h-[200px] min-w-[100px] scale-100 transition duration-500 group-hover:scale-125 group-hover:rotate-[360deg] rotate-[0deg]"
        onError={handleImageError}
      />
      <p className="text-lg capitalize">{pokemon.name}</p>
    </Link>
  );
};
