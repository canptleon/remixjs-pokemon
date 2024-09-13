import { Link } from "@remix-run/react";

export const PokemonEvolutionChain = ({ chain }: { chain: any }) => {
  const renderEvolutionChain = (chain: any) => {
    const chainArray = [];
    let current = chain;
    while (current) {
      chainArray.push(current.species.name);
      current = current.evolves_to[0];
    }
    return chainArray;
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Evolution Chain</h2>
      <div className="flex space-x-4 mt-2">
        {renderEvolutionChain(chain).map((evolution, index) => (
          <Link
            key={index}
            to={`/pokemon/${evolution}`}
            className="capitalize border-b border-[#ffcb08]"
          >
            {evolution}
            {index < renderEvolutionChain(chain).length - 1 && " → "}
          </Link>
        ))}
      </div>
    </div>
  );
};
