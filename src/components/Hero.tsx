import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, Bot, Youtube, Gamepad2 } from 'lucide-react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-white/10 to-white/50" />

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
                className="h-24 w-auto md:h-32 lg:h-40 object-contain drop-shadow-xl"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-400 bg-neutral-100 p-8 text-center">
                <p className="mb-2 text-sm font-medium text-neutral-900">Logo Missing</p>
                <p className="text-xs text-neutral-500">
                  Upload <code>aliwin-logo.png</code> to <code>public/</code> folder
                </p>
                {/* Fallback Text */}
                <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-neutral-900/50">
                  Aliwin
                </h1>
              </div>
            )}
            
            {/* Reflection Effect */}
            {!imageError && (
              <div className="absolute -bottom-4 left-0 right-0 h-1/2 w-full bg-gradient-to-t from-gray-200/80 to-transparent blur-sm" />
            )}
          </div>

          <p className="mb-8 text-lg font-medium text-neutral-700">
            Я хз что сюда добавить, так что:
          </p>

          <div className="flex w-full flex-col gap-4">
            {/* Telegram */}
            <div className="flex items-center justify-between gap-3 rounded-xl bg-white/60 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Send size={20} />
                </div>
                <span className="font-semibold text-neutral-700">Telegram:</span>
              </div>
              <a 
                href="https://t.me/aliwintelegram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                @aliwintelegram
              </a>
            </div>

            {/* Tg Bot */}
            <div className="flex flex-col gap-2 rounded-xl bg-white/60 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <Bot size={20} />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-semibold text-neutral-700">Tg bot:</span>
                  <span className="text-xs text-neutral-500 sm:hidden">(по приколу существует)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="hidden text-xs text-neutral-500 sm:inline">(по приколу существует)</span>
                <a 
                  href="https://t.me/nineggBot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700"
                >
                  @nineggBot
                </a>
              </div>
            </div>

            {/* Youtube */}
            <div className="flex items-center justify-between gap-3 rounded-xl bg-white/60 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Youtube size={20} />
                </div>
                <span className="font-semibold text-neutral-700">Yt:</span>
              </div>
              <a 
                href="https://youtube.com/@aliwinchik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
              >
                @aliwinchik
              </a>
            </div>

            {/* Steam */}
            <div className="flex items-center justify-between gap-3 rounded-xl bg-white/60 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-800">
                  <Gamepad2 size={20} />
                </div>
                <span className="font-semibold text-neutral-700">Steam:</span>
              </div>
              <a 
                href="https://steamcommunity.com/id/aliwinchik/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
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
