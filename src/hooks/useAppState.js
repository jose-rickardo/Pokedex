import { useState } from 'react';
import usePokemonData from './usePokemonData';

export default function useAppState() {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { pokemons, loading } = usePokemonData();


  const filteredPokemons = pokemons.filter((p) => {
    const matchesName = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = selectedType === 'all' || p.types.some(t => t.type.name === selectedType);
    return matchesName && matchesType;
  });

  return {
    search,
    setSearch,
    selectedType,
    setSelectedType,
    filteredPokemons,
    loading,
    selectedPokemon,
    setSelectedPokemon,
  };
}