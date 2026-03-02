import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Send, Bot, Youtube, Gamepad2, Moon, Sun } from 'lucide-react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Check system preference on mount
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  // Apply dark class to html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-500">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-50 rounded-full bg-white/50 dark:bg-white/10 p-3 text-neutral-800 dark:text-neutral-200 backdrop-blur-md transition-all hover:bg-white/80 dark:hover:bg-white/20 shadow-sm"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-white/10 to-white/50 dark:via-black/10 dark:to-black/50 pointer-events-none transition-colors duration-500" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center py-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center w-full max-w-lg"
        >
          {/* Logo Container */}
          <div className="relative mb-8">
            {!imageError ? (
              <img 
                src="/aliwin-logo.png" 
                alt="Aliwin Logo" 
                className="h-24 w-auto md:h-32 lg:h-40 object-contain drop-shadow-xl dark:invert transition-all duration-500"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-400 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/50 p-8 text-center transition-colors duration-500">
                <p className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">Logo Missing</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Upload <code>aliwin-logo.png</code> to <code>public/</code> folder
                </p>
                {/* Fallback Text */}
                <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-neutral-900/50 dark:text-white/50">
                  Aliwin
                </h1>
              </div>
            )}
            
            {/* Reflection Effect */}
            {!imageError && (
              <div className="absolute -bottom-4 left-0 right-0 h-1/2 w-full bg-gradient-to-t from-gray-200/80 dark:from-black/80 to-transparent blur-sm transition-colors duration-500" />
            )}
          </div>

          <p className="mb-8 text-lg font-medium text-neutral-700 dark:text-neutral-300 transition-colors duration-500">
            Я хз что сюда добавить, так что:
          </p>

          <div className="flex w-full flex-col gap-4">
            {/* Telegram */}
            <div className="flex items-center justify-between gap-3 rounded-xl bg-white/60 dark:bg-white/5 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 transition-colors duration-500">
                  <Send size={20} />
                </div>
                <span className="font-semibold text-neutral-700 dark:text-neutral-200 transition-colors duration-500">Telegram:</span>
              </div>
              <a 
                href="https://t.me/aliwintelegram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                @aliwintelegram
              </a>
            </div>

            {/* Tg Bot */}
            <div className="flex flex-col gap-2 rounded-xl bg-white/60 dark:bg-white/5 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 transition-colors duration-500">
                  <Bot size={20} />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-semibold text-neutral-700 dark:text-neutral-200 transition-colors duration-500">Tg bot:</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 sm:hidden transition-colors duration-500">(по приколу существует)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="hidden text-xs text-neutral-500 dark:text-neutral-400 sm:inline transition-colors duration-500">(по приколу существует)</span>
                <a 
                  href="https://t.me/nineggBot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600"
                >
                  @nineggBot
                </a>
              </div>
            </div>

            {/* Youtube */}
            <div className="flex items-center justify-between gap-3 rounded-xl bg-white/60 dark:bg-white/5 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 transition-colors duration-500">
                  <Youtube size={20} />
                </div>
                <span className="font-semibold text-neutral-700 dark:text-neutral-200 transition-colors duration-500">Yt:</span>
              </div>
              <a 
                href="https://youtube.com/@aliwinchik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
              >
                @aliwinchik
              </a>
            </div>

            {/* Steam */}
            <div className="flex items-center justify-between gap-3 rounded-xl bg-white/60 dark:bg-white/5 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors duration-500">
                  <Gamepad2 size={20} />
                </div>
                <span className="font-semibold text-neutral-700 dark:text-neutral-200 transition-colors duration-500">Steam:</span>
              </div>
              <a 
                href="https://steamcommunity.com/id/aliwinchik/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600"
              >
                Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
