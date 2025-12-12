import { useTheme } from '../../providers/ThemeProvider';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed top-6 right-6 z-50 cursor-pointer p-3 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-cyan-400/10 border border-blue-500/20 dark:border-blue-400/20 backdrop-blur-sm shadow-sm"
      role="button"
      aria-label="Toggle theme"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, borderColor: 'rgba(59, 130, 246, 0.3)' }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaSun className="text-slate-600 dark:text-slate-300" size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaMoon className="text-slate-600 dark:text-slate-300" size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

