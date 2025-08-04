import CardPokemon from './CardPokemon';
import PokemonDetail from './PokemonDetail';

export default function PokemonGrid({ pokemons, loading, selectedPokemon, setSelectedPokemon }) {
  if (loading) return <p className="text-center mt-10">Chargement des Pokémon...</p>;

  return (
    <div>
      {selectedPokemon && (
        <PokemonDetail pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6">
        {pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} onClick={setSelectedPokemon} />
        ))}
      </div>
    </div>
  );
}