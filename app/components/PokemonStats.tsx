export const PokemonStats = ({ stats }: { stats: any[] }) => (
  <div className="w-full max-w-xl">
    <h2 className="text-2xl font-bold text-center">Base Stats</h2>
    <div className="grid grid-cols-2 gap-4 mt-4">
      {stats.map((stat) => (
        <div key={stat.stat.name} className="flex justify-between">
          <span className="capitalize">{stat.stat.name}</span>
          <span>{stat.base_stat}</span>
        </div>
      ))}
    </div>
  </div>
);
