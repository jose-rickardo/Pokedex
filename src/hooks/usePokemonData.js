import { useState, useEffect } from 'react';

export default function usePokemonData() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await res.json();

      const details = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      const formatted = details.map((p) => ({
        id: p.id,
        name: p.name,
        types: p.types,
        image: p.sprites.other['official-artwork'].front_default,
        height: p.height,
        weight: p.weight,
        stats: p.stats,
      }));

      setPokemons(formatted);
      setLoading(false);
    }
    fetchPokemons();
  }, []);

  return { pokemons, loading };
}