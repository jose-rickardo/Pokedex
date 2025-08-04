export default function CardPokemon({ pokemon, onClick }) {
  return (
    <div
      onClick={() => onClick(pokemon)}
      className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center hover:scale-105 transition"
    >
      <img src={pokemon.image} alt={pokemon.name} className="mx-auto h-24" />
      <h2 className="capitalize text-lg font-bold mt-2">{pokemon.name}</h2>
      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types.map((t) => (
          <span
            key={t.slot}
            className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 capitalize"
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}