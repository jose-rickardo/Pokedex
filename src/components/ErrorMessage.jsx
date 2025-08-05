import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ message, onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-screen text-center p-8"
    >
      <AlertCircle className="w-16 h-16 text-red-400 mb-4" />
      <h2 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h2>
      <p className="text-white/70 mb-6">{message}</p>
      {onRetry && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRetry}
          className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors"
        >
          Try Again
        </motion.button>
      )}
    </motion.div>
  );
};