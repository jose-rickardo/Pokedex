import { motion } from "framer-motion";
import { Leaf, Flame, Droplets, Zap, Heart, Snowflake, Star } from 'lucide-react';
import { getTypeGradient } from "../utils/pokemonUtils";

const getTypeIcon = (type) => {
    const iconMap = {
     grass: <Leaf className="w-4 h-4" />,
     fire: <Flame className="w-4 h-4" />,
     water: <Droplets className="w-4 h-4" />,
     electric: <Zap className="w-4 h-4" />,
     psychic: <Heart className="w-4 h-4" />,
     ice: <Snowflake className="w-4 h-4" />,
     fairy: <Star className="w-4 h-4" />,
    };

  return iconMap[type.toLowerCase()] || <Star className="w-4 h-4" />;
};

export const TypeBadge = ({type}) => {
    return(
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${getTypeGradient(type)} text-white font-medium text-sm shadow-lg`}
        >
            {getTypeIcon(type)}
            <span className="uppercase tracking-wide">{type}</span>
        </motion.div>
    )
}

