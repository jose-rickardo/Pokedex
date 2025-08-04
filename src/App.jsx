import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import PokemonGrid from "./components/PokemonGrid";
import useAppState from "./hooks/useAppState";

export default function App() {
  const {
    search,
    setSearch,
    selectedType,
    setSelectedType,
    filteredPokemons,
    loading,
    selectedPokemon,
    setSelectedPokemon,
  } = useAppState();

  return (
    <div>
      <div className="flex dark:bg-gray-900 justify-center">
        <SearchBar search={search} setSearch={setSearch} />
        <TypeFilter selectedType={selectedType} setSelectedType={setSelectedType} />
      </div>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition">
        <PokemonGrid
          pokemons={filteredPokemons}
          loading={loading}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </div>
    </div>
  );
}

