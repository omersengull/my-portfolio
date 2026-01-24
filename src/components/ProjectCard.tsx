"use client";
import { useRouter } from "@/i18n/routing"; // i18n uyumlu router
import { GithubRepo } from "@/lib/github";
import { motion } from "framer-motion";
import { Github, Star, ExternalLink, Code2, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProjectCard({ repo }: { repo: GithubRepo }) {
  const t = useTranslations("ProjectsCard");
  const router = useRouter();


  const handleCardClick = () => {

    router.push(`/projects/${repo.name}`); 
  };

  return (
    <motion.div
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative p-6 rounded-3xl bg-glass border border-glass-border backdrop-blur-sm transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] cursor-pointer"
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
            rel="noopener noreferrer"
            // Tıklandığında kartın click event'ini (detay sayfasına gitmeyi) durdurur
            onClick={(e) => e.stopPropagation()} 
            className="hover:text-white transition-colors z-20"
            title={t("links.github")}
          >
            <Github size={20} />
          </a>

          {/* Canlı site linki */}
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-neon-cyan transition-colors z-20"
              title={t("links.demo")}
            >
              <Globe size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
        {repo.name}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 min-h-[40px]">
        {repo.description || t("noDescription")}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-[12px] font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
          {repo.language || "Markdown"}
        </span>

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