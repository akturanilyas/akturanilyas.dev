import { motion } from 'motion/react';

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Subtle Grid Pattern - More visible */}
      <div className="absolute inset-0 opacity-80">
        <div className="w-full h-full bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:40px_40px] dark:hidden" />
        <div className="w-full h-full hidden dark:block bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      {/* Animated Gradient Orbs - More visible */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/25 dark:bg-blue-400/15 rounded-full blur-2xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ opacity: 1 }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/25 dark:bg-purple-400/15 rounded-full blur-2xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ opacity: 1 }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-cyan-500/25 dark:bg-cyan-400/15 rounded-full blur-2xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ opacity: 1 }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-indigo-500/22 dark:bg-indigo-400/12 rounded-full blur-2xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ opacity: 1 }}
        style={{ willChange: 'transform' }}
      />

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 dark:hidden"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.05) 100%)',
        }}
      />
      <div 
        className="absolute inset-0 hidden dark:block"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.03) 100%)',
        }}
      />
    </div>
  );
};

