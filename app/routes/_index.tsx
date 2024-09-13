import { useLoaderData } from "@remix-run/react";
import { useSearchParams } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { SearchInput } from "../components/SearchInput";
import { PokemonGrid } from "../components/PokemonGrid";
import { Pagination } from "../components/Pagination";
import { useNavigate } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000");
  const data = await response.json();
  return { pokemons: data.results };
};

export default function Index() {
  const { pokemons } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [page, setPage] = useState(Number(searchParams.get("page") || 1));
  const pokemonsPerPage = 30;
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setPage(1);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setFilteredPokemons(pokemons);
    } else {
      const filtered = pokemons.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }
  }, [debouncedSearchTerm, pokemons]);

  useEffect(() => {
    const params: any = {};
    if (debouncedSearchTerm.trim() !== "") {
      params.search = debouncedSearchTerm;
    }
    if (page > 1) {
      params.page = String(page);
    }
    setSearchParams(params);
  }, [debouncedSearchTerm, page, setSearchParams]);

  const totalPages = Math.ceil(filteredPokemons.length / pokemonsPerPage);

  const paginatedPokemons = filteredPokemons.slice(
    (page - 1) * pokemonsPerPage,
    page * pokemonsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    setSearchParams({});
    setSearchTerm("");
  };
  

  return (
    <div className="flex flex-col items-center gap-8 mb-5 min-h-[92vh]">
      <button onClick={handleLogoClick}>
        <img
          src="/pokemon-logo.png"
          alt="Pokémon Logo"
          className="w-[300px] mt-8 scale-100 hover:scale-[2] transition-all [filter:drop-shadow(2px_4px_6px_lightgray)] hover:[filter:drop-shadow(2px_4px_6px_white)]"
        />
      </button>
      <SearchInput
        searchTerm={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PokemonGrid pokemons={paginatedPokemons} />
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
