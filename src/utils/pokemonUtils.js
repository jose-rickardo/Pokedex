export const typeColors = {
  grass: 'from-green-400 to-green-600',
  fire: 'from-red-400 to-red-600',
  water: 'from-blue-400 to-blue-600',
  electric: 'from-yellow-400 to-yellow-600',
  psychic: 'from-pink-400 to-pink-600',
  ice: 'from-cyan-400 to-cyan-600',
  dragon: 'from-purple-400 to-purple-600',
  dark: 'from-gray-700 to-gray-900',
  fairy: 'from-pink-300 to-pink-500',
  fighting: 'from-red-700 to-red-900',
  poison: 'from-purple-500 to-purple-700',
  ground: 'from-yellow-600 to-brown-600',
  flying: 'from-indigo-400 to-indigo-600',
  bug: 'from-green-500 to-green-700',
  rock: 'from-yellow-800 to-gray-700',
  ghost: 'from-purple-700 to-purple-900',
  steel: 'from-gray-400 to-gray-600',
  normal: 'from-gray-400 to-gray-600',
};

export const backgroundColors = {
  grass: 'from-green-500 via-green-600 to-black',
  fire: 'from-red-500 via-red-600 to-black',
  water: 'from-blue-500 via-blue-600 to-black',
  electric: 'from-yellow-500 via-yellow-600 to-black',
  psychic: 'from-pink-500 via-pink-600 to-black',
  ice: 'from-cyan-500 via-cyan-600 to-black',
  dragon: 'from-purple-500 via-purple-600 to-black',
  dark: 'from-gray-600 via-gray-700 to-black',
  fairy: 'from-pink-400 via-pink-500 to-black',
  fighting: 'from-red-600 via-red-700 to-black',
  poison: 'from-purple-600 via-purple-700 to-black',
  ground: 'from-yellow-700 via-amber-700 to-black',
  flying: 'from-indigo-500 via-indigo-600 to-black',
  bug: 'from-green-600 via-green-700 to-black',
  rock: 'from-yellow-700 via-stone-600 to-black',
  ghost: 'from-purple-600 via-purple-800 to-black',
  steel: 'from-gray-500 via-gray-600 to-black',
  normal: 'from-gray-500 via-gray-600 to-black',
};

export const getTypeGradient = (type) => {
  return typeColors[type.toLowerCase()] || 'from-gray-400 to-gray-600';
};

export const getBackgroundGradient = (type) => {
  return backgroundColors[type.toLowerCase()] || 'from-gray-500 via-gray-600 to-black';
};

export const formatPokemonId = (id) => {
  return `#${id.toString().padStart(3, '0')}`;
};

export const formatHeight = (height) => {
  return `${(height / 10).toFixed(1)}m`;
};

export const formatWeight = (weight) => {
  return `${(weight / 10).toFixed(1)}kg`;
};

export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatStatName = (statName) => {
  const statMap = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Special Attack',
    'special-defense': 'Special Defense',
    speed: 'Speed',
  };
  
  return statMap[statName] || capitalizeFirst(statName);
};