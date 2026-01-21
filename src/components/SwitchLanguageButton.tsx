"use client";

import { useState } from "react";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { motion, AnimatePresence } from "framer-motion";
import { Languages, ChevronDown } from "lucide-react";

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' }
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Tetikleyici Buton */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 transition-all text-white group"
      >
        <Languages size={18} className="text-neon-cyan" />
        <span className="text-xs font-bold uppercase tracking-wider">
          {languages.find(l => l.code === locale)?.code}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} className="text-gray-400 group-hover:text-white" />
        </motion.div>
      </motion.button>

      {/* Açılır Menü */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dışarı tıklandığında kapanması için transparan katman */}
            <div className="fixed cursor-pointer inset-0 z-10" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 5, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute  right-0 top-full z-20 mt-2 w-40 overflow-hidden rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl backdrop-blur-xl"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex w-full cursor-pointer items-center justify-between px-4 py-3 text-sm transition-colors  hover:bg-white/5 ${
                    locale === lang.code ? "text-neon-cyan font-bold" : "text-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </div>
                  {locale === lang.code && (
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_#22d3ee]" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}