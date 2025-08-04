import { motion } from 'framer-motion';
import { formatStatName } from '../utils/pokemonUtils';

export const StatsBar = ({ stats }) => {
  const maxStat = Math.max(...stats.map(stat => stat.base_stat));

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-6">Stats</h3>
      {stats.map((stat, index) => {
        const percentage = (stat.base_stat / maxStat) * 100;
        
        return (
          <motion.div
            key={stat.stat.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-32 text-right">
              <span className="text-white font-medium text-sm">
                {formatStatName(stat.stat.name)}
              </span>
            </div>
            
            <div className="flex-1 relative">
              <div className="h-3 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-white to-white/80 rounded-full"
                />
              </div>
            </div>
            
            <div className="w-12 text-right">
              <span className="text-white font-bold text-lg">
                {stat.base_stat}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
