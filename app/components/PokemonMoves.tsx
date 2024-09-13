import { useState } from "react";

export const PokemonMoves = ({ moves }: { moves: any[] }) => {
  const [showAllMoves, setShowAllMoves] = useState(false);

  return (
    <div className="flex flex-col items-center w-[600px] [@media(max-width:576px)]:w-full">
      <h2 className="text-2xl font-bold">Moves</h2>
      <ul className="w-full grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-center mt-[20px]">
        {(showAllMoves ? moves : moves.slice(0, 10)).map((moveObj) => (
          <li key={moveObj.move.name} className="capitalize">
            {moveObj.move.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setShowAllMoves(!showAllMoves)}
        className="mt-4 px-4 py-2 bg-[#ffcb08] text-white rounded"
      >
        {showAllMoves ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};
