"use client"
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-neon-cyan font-mono text-sm tracking-[0.3em] mb-4 uppercase">
          Merhaba Dünya, Ben
        </h2>
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic tracking-tighter">
          DEVELOPER <br />
          <span className="bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-pink bg-clip-text text-transparent not-italic">
            PORTFOLIO
          </span>
        </h1>
        <p className="max-w-md mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
          GitHub üzerindeki serüvenimi ve inşa ettiğim dijital dünyayı keşfedin.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-neon-cyan hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.3)]">
            <a href="#projects">Projeleri Gör</a>
          </button>
          <button className="px-8 py-4 bg-glass border border-glass-border rounded-xl font-bold hover:bg-white/10 transition-all">
            İletişim
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
