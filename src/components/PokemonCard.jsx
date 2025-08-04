import { motion, AnimatePresence } from 'framer-motion';
import { StatsBar } from './StatsBar';
import { TypeBadge } from './TypeBadge';
import { formatPokemonId, formatHeight, formatWeight, capitalizeFirst } from '../utils/pokemonUtils';

export const PokemonCard = ({ pokemon }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pokemon.id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-4xl mx-auto"
      >
        {/* Background Pokemon ID */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-white/10 font-black text-[300px] lg:text-[400px] leading-none select-none">
            {formatPokemonId(pokemon.id)}
          </span>
        </div>
        {/* Pokemon Image and Basic Info */}

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
         
          <div className="flex flex-col items-center space-y-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
                className="w-72 h-72 object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div className="flex flex-wrap gap-2 justify-center">
              {pokemon.types.map((type, index) => (
                <motion.div
                  key={type.type.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <TypeBadge type={type.type.name} />
                </motion.div>
              ))}
            </div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-black text-white text-center tracking-wide"
            >
              {capitalizeFirst(pokemon.name)}
            </motion.h2>
          </div>

          {/*Details and Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-white/70 text-sm font-medium mb-1">Height</p>
                  <p className="text-white text-2xl font-bold">{formatHeight(pokemon.height)}</p>
                </div>
                <div className="text-center">
                  <p className="text-white/70 text-sm font-medium mb-1">Weight</p>
                  <p className="text-white text-2xl font-bold">{formatWeight(pokemon.weight)}</p>
                </div>
              </div>

              <div>
                <p className="text-white/70 text-sm font-medium mb-2">Abilities</p>
                <div className="flex flex-wrap gap-2">
                  {pokemon.abilities.map((ability, index) => (
                    <motion.span
                      key={ability.ability.name}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium"
                    >
                      {capitalizeFirst(ability.ability.name.replace('-', ' '))}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <StatsBar stats={pokemon.stats} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
