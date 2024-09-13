export const PokemonAbilities = ({ abilities }: { abilities: any[] }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-2xl font-bold">Abilities</h2>
    <ul>
      {abilities.map((abilityObj) => (
        <li key={abilityObj.ability.name} className="capitalize">
          {abilityObj.ability.name}
        </li>
      ))}
    </ul>
  </div>
);
