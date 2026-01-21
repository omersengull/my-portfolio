"use client";

import { GithubRepo } from "@/lib/github";
import { motion } from "framer-motion";
import { Github, Star, ExternalLink, Code2, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
// Az önce tanımladığın interface'i buraya import et veya üstüne ekle


export default function ProjectCard({ repo }: { repo: GithubRepo }) {
  const t = useTranslations('ProjectsCard');
  return (
    <motion.div
      // Giriş animasyonu: Sayfa açıldığında hafifçe yukarı kayarak belirir
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // Hover animasyonu: Kart biraz yukarı çıkar
      whileHover={{ y: -8 }}
      className="group relative p-6 rounded-3xl bg-glass border border-glass-border backdrop-blur-sm transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-2xl bg-neon-cyan/10 text-neon-cyan">
          <Code2 size={24} />
        </div>
        <div className="flex gap-4 text-gray-400">
          {/* GitHub Repo Linki */}
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer" // Güvenlik için şart
            className="hover:text-white transition-colors"
            title={t('links.github')}
          >
            <Github size={20} />
          </a>
          
          {/* Eğer canlı site (homepage) varsa Demo linkini göster */}
          {repo.homepage && (
            <a 
              href={repo.homepage} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neon-cyan transition-colors"
              title={t('links.demo')}
            >
              <Globe size={20} />
            </a>
          )}

          {/* Harici Link simgesi genellikle repo dışı bir yere gider, 
              isteğe bağlı olarak kalabilir veya yukarıdakiyle birleşebilir */}
          <a href={repo.html_url} target="_blank" className="hover:text-neon-cyan transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
        {repo.name}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 min-h-[40px]">
        {repo.description || t('noDescription')}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-[12px] font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
          {repo.language || "Markdown"}
        </span>
        
        {/* Yıldız sayısı 0'dan büyükse göster, daha temiz durur */}
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Star size={14} className="text-yellow-500 fill-yellow-500/20" />
            {repo.stargazers_count}
          </div>
        )}
      </div>
    </motion.div>
  );
}