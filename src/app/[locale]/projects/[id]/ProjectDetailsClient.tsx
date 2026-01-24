"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import NextImage from "next/image";
import {
  Github,
  Globe,
  Calendar,
  ImageIcon,
  Star,
  GitFork,
  Code2,
  TriangleAlert,
  Zap,
  Rocket,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { GithubRepo } from "@/lib/github";
import Link from "next/link";
import { useState } from "react";

interface Props {
  id: string;
  repo: GithubRepo;
}

export default function ProjectDetailsClient({ id, repo }: Props) {
  const t = useTranslations(`Projects.items.${id}`);
  const [imgError, setImgError] = useState(false);
  // Animasyonlar
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* --- 1. HEADER & HERO BÖLÜMÜ --- */}
      <div className="flex flex-col lg:flex-row gap-12 items-start mb-24">
        {/* Sol Taraf: Başlık ve Bilgiler */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-8"
        >
          {/* Geri Dön Butonu */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-4"
          >
            <ArrowLeft size={16} /> Tüm Projelere Dön
          </Link>

          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-cyan to-neon-pink bg-clip-text text-transparent leading-tight drop-shadow-2xl">
            {t("title")}
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            {/* Eğer JSON'da 'shortDescription' yoksa GitHub açıklamasını kullan */}
            {repo.description ||
              "Bu proje için detaylı açıklama GitHub üzerinden çekildi."}
          </p>

          {/* İstatistikler */}
          <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Calendar size={16} className="text-neon-cyan" />
              <span>
                Güncelleme:{" "}
                {new Date(repo.updated_at || "").toLocaleDateString("tr-TR")}
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Code2 size={16} className="text-purple-400" />
              <span>{repo.language || "TypeScript"}</span>
            </div>
            {repo.stargazers_count > 0 && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Star size={16} className="text-yellow-400" />
                <span>{repo.stargazers_count} Yıldız</span>
              </div>
            )}
          </div>

          {/* Aksiyon Butonları */}
          <div className="flex flex-wrap gap-4 pt-4">
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-neon-cyan text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:scale-105 transition-all"
              >
                <Globe size={20} />
                Canlı Demo
              </a>
            )}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/10 hover:bg-white/20 transition-all"
            >
              <Github size={20} />
              Kaynak Kod
            </a>
          </div>
        </motion.div>

        {/* Sağ Taraf: PROJE GÖRSELİ (MOCKUP) */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full perspective-1000"
        >
          <div className="relative group">
            {/* Glow Arkası */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />

            {/* Browser Window Çerçevesi */}
            <div className="relative rounded-xl bg-[#0f172a] border border-white/10 shadow-2xl overflow-hidden aspect-video">
              {/* Browser Header */}
              <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 flex-1 h-5 bg-black/20 rounded-md text-[10px] text-gray-500 flex items-center px-2 font-mono">
                  {repo.homepage || "localhost:3000"}
                </div>
              </div>

              {/* Proje Resmi Alanı */}
              <div className="relative w-full h-full bg-[#020617] flex items-center justify-center overflow-hidden">
                {!imgError ? (
                  <NextImage
                    src={`/projects/${id}.png`}
                    alt={repo.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                    // Resim yüklenemezse state'i güncelle
                    onError={() => setImgError(true)}
                  />
                ) : (
                  // Resim yoksa veya hata verirse gösterilecek alan
                  <div className="flex flex-col items-center justify-center opacity-20">
                    <ImageIcon size={48} />
                    <p className="text-xs mt-2">Görsel bulunamadı</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- 2. BENTO GRID (HİKAYE) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Problem */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-red-500/30 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4 text-red-400">
            <TriangleAlert size={24} />
            <h2 className="text-2xl font-bold text-white">{t("problem.title")}</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">{t("problem.content")}</p>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-neon-cyan/30 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4 text-neon-cyan">
            <Zap size={24} />
            <h2 className="text-2xl font-bold text-white">{t("solution.title")}</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">{t("solution.content")}</p>
        </motion.div>

        {/* Outcome */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl hover:border-neon-pink/30 transition-colors relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Rocket size={100} className="text-neon-pink" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-neon-pink">
              <CheckCircle2 size={24} />
              <h2 className="text-2xl font-bold text-white">{t("outcome.title")}</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t("outcome.content")}
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
