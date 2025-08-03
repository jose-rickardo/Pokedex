import {useState, useEffect} from 'react';

export const usePokemon = (pokemonId) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () =>{
            try{
                setLoading(true);
                setError(null);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

                if(!response.ok){
                    throw new Error('Pokemon not found');
                }

                const data = await response.json();
                setPokemon(data);
            } catch (err){
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };
        fetchPokemon();    
    }, [pokemonId]);
    return {pokemon, loading, error};
};