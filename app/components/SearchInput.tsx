import React from "react";

type SearchInputProps = {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ searchTerm, onChange }: SearchInputProps) => (
  <input
    type="text"
    placeholder="Search Pokémon"
    className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
    value={searchTerm}
    onChange={onChange}
  />
);
