"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useTranslations } from "next-intl";
export default function Contact() {
    const t = useTranslations('Contact');
  return (
    <footer className="w-full py-24 bg-glass border-t border-glass-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent"
        >
          {t('title')}
        </motion.h2>
        
        <p className="text-gray-400 mb-12 text-lg">
          {t('description')}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <SocialLink href="mailto:omersengul061@hotmail.com" icon={<Mail />} label="Email" color="hover:bg-red-500/20" />
          <SocialLink href="https://github.com/omersengull" icon={<Github />} label="GitHub" color="hover:bg-white/10" />
          <SocialLink href="https://linkedin.com/in/omersengull" icon={<Linkedin />} label="LinkedIn" color="hover:bg-blue-500/20" />
        </div>

        <div className="mt-20 text-gray-600 text-sm">
          © {new Date().getFullYear()} Ömer Şengül.  {t('footer')}
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label, color }: any) {
  return (
    <a 
      href={href} target="_blank"
      className={`flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 ${color}`}
    >
      {icon} <span className="font-bold">{label}</span>
    </a>
  );
}