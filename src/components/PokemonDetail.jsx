export default function PokemonDetail({ pokemon, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-sm text-red-600 dark:text-red-400 hover:underline"
        >
          Fermer ✖
        </button>

        <div className="text-center">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-32 h-32 mx-auto"
          />
          <h2 className="text-2xl font-bold capitalize mt-2">{pokemon.name}</h2>

          <div className="flex justify-center gap-2 mt-2">
            {pokemon.types.map((t) => (
              <span
                key={t.slot}
                className="px-2 py-1 rounded-full bg-blue-200 dark:bg-blue-700 capitalize text-sm"
              >
                {t.type.name}
              </span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-left">
            <div>
              <p><strong>Poids :</strong> {pokemon.weight / 10} kg</p>
              <p><strong>Taille :</strong> {pokemon.height / 10} m</p>
              <p><strong>ID :</strong> {pokemon.id}</p>
            </div>
            <div>
              <p><strong>Base Stats :</strong></p>
              <ul className="list-disc ml-5">
                {pokemon.stats.map((s, i) => (
                  <li key={i}>{s.stat.name}: {s.base_stat}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}