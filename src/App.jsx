import React, { useState, useEffect } from 'react';
import GameCard from './components/GameCard';
import sampleGames from './data/sampleGames';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [games, setGames] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('');
  const [filterGenre, setFilterGenre] = useState(''); // Adicionar futuramente se necessário

  useEffect(() => {
    setGames(sampleGames);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getUniqueYears = (gamesList) => {
    const years = gamesList.map(game => new Date(game.dateCompleted).getFullYear());
    return [...new Set(years)].sort((a, b) => b - a); // Ordena do mais recente para o mais antigo
  };

  const filteredGames = games
    .filter(game => 
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterPlatform === '' || game.platform === filterPlatform)
    );

  const gamesByYear = getUniqueYears(filteredGames).reduce((acc, year) => {
    acc[year] = filteredGames.filter(game => new Date(game.dateCompleted).getFullYear() === year);
    return acc;
  }, {});

  const uniquePlatforms = [...new Set(games.map(game => game.platform))];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans">
      <header className="bg-sky-600 dark:bg-sky-800 text-white p-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4 sm:mb-0">Meus Jogos Zerados</h1>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-sky-700 dark:hover:bg-sky-600 transition-colors duration-300"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        {/* Filtros */}
        <div className="mb-8 p-6 bg-slate-200 dark:bg-slate-800 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text"
              placeholder="Buscar por título..."
              className="p-3 rounded-md bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-sky-500 outline-none transition-shadow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select 
              className="p-3 rounded-md bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-sky-500 outline-none transition-shadow"
              value={filterPlatform}
              onChange={(e) => setFilterPlatform(e.target.value)}
            >
              <option value="">Todas as Plataformas</option>
              {uniquePlatforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>
        </div>

        {Object.keys(gamesByYear).length === 0 && searchTerm && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-xl text-slate-500 dark:text-slate-400 py-10"
          >
            Nenhum jogo encontrado com os filtros aplicados.
          </motion.div>
        )}

        <AnimatePresence>
          {Object.entries(gamesByYear).map(([year, yearGames]) => (
            <motion.section 
              key={year} 
              className="mb-12"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-sky-500 dark:text-sky-400 mb-6 border-b-2 border-sky-500 dark:border-sky-400 pb-2">
                Ano de Conclusão: {year}
              </h2>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                animate="visible"
              >
                {yearGames.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </motion.div>
            </motion.section>
          ))}
        </AnimatePresence>
      </main>

      <footer className="text-center p-6 text-slate-600 dark:text-slate-400 border-t border-slate-300 dark:border-slate-700 mt-12">
        <p>&copy; {new Date().getFullYear()} Meus Jogos Zerados. Feito por Jeferson Smith.</p>
      </footer>
    </div>
  );
}

export default App;

