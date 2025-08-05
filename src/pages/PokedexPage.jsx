import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePokemon } from '../hooks/usePokemon';
import { Header } from '../components/Header';
import { PokemonCard } from '../components/PokemonCard';
import { NavigationButtons } from '../components/NavigationButtons';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export const PokedexPage = () => {
  const [currentPokemonId, setCurrentPokemonId] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const { pokemon, loading, error } = usePokemon(currentPokemonId);

  const handlePokemonSelect = (id) => {
    setCurrentPokemonId(id);
  };

  const handlePrevious = () => {
    if (currentPokemonId > 1) {
      setCurrentPokemonId(currentPokemonId - 1);
    }
  };

  const handleNext = () => {
    if (currentPokemonId < 1010) {
      setCurrentPokemonId(currentPokemonId + 1);
    }
  };

  const handleSearch = async (term) => {
    if (term.trim() === '') return;
    
    try {
      const searchValue = term.toLowerCase().trim();
      const isNumeric = /^\d+$/.test(searchValue);
      
      if (isNumeric) {
        const id = parseInt(searchValue);
        if (id >= 1 && id <= 1010) {
          setCurrentPokemonId(id);
        }
      } else {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
        if (response.ok) {
          const data = await response.json();
          setCurrentPokemonId(data.id);
        }
      }
      setSearchTerm('');
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPokemonId]);

  const backgroundClass = darkMode
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
    : 'bg-gradient-to-br from-green-400 via-green-500 to-green-700';

  if (loading) {
    return (
      <div className={`min-h-screen ${backgroundClass}`}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className={`min-h-screen ${backgroundClass}`}>
        <ErrorMessage 
          message={error || 'Pokemon not found'} 
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen ${backgroundClass} transition-all duration-700`}
      onKeyDown={handleKeyPress}
    >
      <Header
        currentPokemonId={currentPokemonId}
        onPokemonSelect={handlePokemonSelect}
        searchTerm={searchTerm}
        onSearchChange={(term) => {
          setSearchTerm(term);
          if (term === '') return;
          
          const timeoutId = setTimeout(() => {
            handleSearch(term);
          }, 4000);
          
          return () => clearTimeout(timeoutId);
        }}
        darkMode={darkMode}
        onDarkModeToggle={() => setDarkMode(!darkMode)}
      />

      <main className="relative px-6 py-12">
        <NavigationButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={currentPokemonId > 1}
          canGoNext={currentPokemonId < 1010}
        />

        <PokemonCard pokemon={pokemon} />
      </main>
      
    </motion.div>
  );
};