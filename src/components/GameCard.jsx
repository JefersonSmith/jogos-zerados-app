import React from 'react';
import { motion } from 'framer-motion';

const GameCard = ({ game }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className="bg-slate-800 dark:bg-slate-700 rounded-lg shadow-xl overflow-hidden m-4 w-full sm:w-64 md:w-72 lg:w-80 flex flex-col group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.25)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="w-full h-48 bg-slate-700 dark:bg-slate-600 overflow-hidden">
        {game.imageUrl ? (
          <motion.img 
            src={game.imageUrl} 
            alt={game.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-300">
            <span>Imagem Indisponível</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-sky-400 dark:text-sky-300 mb-2">{game.title}</h3>
        <p className="text-slate-300 dark:text-slate-200 text-sm mb-3 flex-grow">{game.summary}</p>
        <div className="mt-auto">
          <p className="text-xs text-slate-500 dark:text-slate-400">Plataforma: {game.platform}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Zerado em: {game.dateCompleted}</p>
          {game.rating && (
            <p className="text-xs text-yellow-400 dark:text-yellow-300 mt-1">Nota: {'⭐'.repeat(game.rating)}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;
