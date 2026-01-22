"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
export default function About() {
    const t = useTranslations('About');
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Büyük Kart: Kimim Ben? */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 p-8 rounded-3xl bg-glass border border-glass-border backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="text-neon-cyan" />{t('title')}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Küçük Kart: Konum */}
        <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-glass border border-glass-border backdrop-blur-md flex flex-col justify-center items-center text-center">
          <MapPin className="text-neon-pink mb-2" size={32} />
          <h4 className="font-bold">{t('location.title')}</h4>
          <p className="text-gray-400">{t('location.value')}</p>
        </motion.div>

        {/* Küçük Kart: Eğitim/Durum */}
        <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-glass border border-glass-border backdrop-blur-md flex flex-col justify-center items-center text-center">
          <Rocket className="text-yellow-400 mb-2" size={32} />
          <h4 className="font-bold">{t('work.title')}</h4>
          <p className="text-gray-400">{t('work.value')}</p>
        </motion.div>

        {/* Orta Kart: Hedefler */}
        <motion.div whileHover={{ y: -5 }} className="md:col-span-2 p-8 rounded-3xl bg-glass border border-glass-border backdrop-blur-md">
           <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <GraduationCap className="text-purple-400" /> {t('vision.title')}
          </h3>
          <p className="text-gray-400">
            {t('vision.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}