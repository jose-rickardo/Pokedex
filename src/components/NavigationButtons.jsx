import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const NavigationButtons = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) => {
  return (
    <>
      {canGoPrevious && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      )}
      
      {canGoNext && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};