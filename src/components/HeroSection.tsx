"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations('Hero');

  return (
    // text-center ekleyerek tüm alt elemanların metin hizalamasını mobilde garantiye alıyoruz
    <div className="w-full flex justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // items-center: elemanları dikeyde ortalar | max-w-4xl: çok geniş ekranlarda dağılmayı önler
        className="flex flex-col items-center max-w-4xl px-4"
      >
        <h2 className="text-neon-cyan font-mono text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mb-4 uppercase">
          {t('welcome')}
        </h2>

        {/* text-6xl -> mobilde çok büyük olabilir, 4xl veya 5xl ile başlayıp md: ile büyütebiliriz */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic tracking-tighter leading-tight">
          DEVELOPER <br />
          <span className="bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-pink bg-clip-text text-transparent not-italic">
            PORTFOLIO
          </span>
        </h1>

        <p className="max-w-md text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
          {t('description')}
        </p>

        {/* flex-col sm:flex-row -> mobilde butonlar alt alta, tablette yan yana gelir */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <button className="cursor-pointer px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-neon-cyan hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.3)]">
            <a href="#projects" className="block w-full h-full">
              {t('buttons.viewProjects')}
            </a>
          </button>
          <button className="cursor-pointer px-8 py-4 bg-glass border border-glass-border rounded-xl font-bold hover:bg-white/10 transition-all text-white">
            {t('buttons.contact')}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;