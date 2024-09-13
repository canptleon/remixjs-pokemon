export const PokemonDetails = ({ weight, height }: { weight: number; height: number }) => (
  <div className="flex justify-between w-full max-w-xl mt-8">
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Weight</h2>
      <p>{weight / 10} kg</p>
    </div>
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Height</h2>
      <p>{height / 10} m</p>
    </div>
  </div>
);
