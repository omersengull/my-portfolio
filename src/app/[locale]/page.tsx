import { fetchGithubRepos, GithubRepo } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/components/SwitchLanguageButton";
import { FloatingShape } from "@/components/FloatingShape";
export default async function Home() {
  const repos = await fetchGithubRepos();
  const t = await getTranslations("Index");
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center p-6 bg-[#020617]">
      {/* --- ARKA PLAN AURASI --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[5%] left-[10%] w-[30rem] h-[30rem] bg-neon-cyan/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[5%] right-[10%] w-[35rem] h-[35rem] bg-neon-pink/10 rounded-full blur-[120px] animate-float [animation-delay:2s]" />
      </div>
      <div className="fixed inset-0 pointer-events-none -z-10">
        <FloatingShape
          color="bg-neon-cyan/20"
          size="120px"
          top="20%"
          left="10%"
          delay={0}
        />
        <FloatingShape
          color="bg-neon-pink/20"
          size="80px"
          top="70%"
          left="80%"
          delay={2}
        />
        <FloatingShape
          color="bg-purple-500/20"
          size="150px"
          top="40%"
          left="70%"
          delay={4}
        />
      </div>
      {/* --- NAVİGASYON --- */}
      <nav className="fixed top-8 px-6 py-4 rounded-full bg-glass border border-glass-border backdrop-blur-xl flex items-center gap-8 text-sm font-medium z-50 shadow-2xl">
        <div className="flex gap-8">
          <a href="#" className="hover:text-neon-cyan transition-colors">
            {t("home")}
          </a>
          <a
            href="#projects"
            className="hover:text-neon-cyan transition-colors"
          >
            {t("projects")}
          </a>
          <a href="#about" className="hover:text-neon-cyan transition-colors">
            {t("about")}
          </a>
        </div>

        {/* Ayırıcı Çizgi (Opsiyonel ama şık durur) */}
        <div className="w-[1px] h-4 bg-white/10"></div>

        {/* DİL DEĞİŞTİRİCİ BURAYA */}
        <LanguageSwitcher />
      </nav>

      {/* --- HERO SECTION --- (Ekstra padding-top ekledik ki navbara yapışmasın) */}
      <section className="w-full min-h-screen flex items-center justify-center pt-48 pb-32 z-10">
        <HeroSection />
      </section>

      {/* --- TECH STACK --- (Bölüm arasına boşluk verdik) */}
      <TechStack />

      {/* --- PROJELER --- */}
      <section
        id="projects"
        className="w-full max-w-6xl mx-auto px-6 py-32 z-10"
      >
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-gray-600 bg-clip-text text-transparent mb-6 italic tracking-tight">
            {t("FeaturedProjects")}
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full shadow-[0_0_20px_rgba(34,211,238,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {repos
            .filter((repo: GithubRepo) => !repo.fork)
            .slice(0, 6)
            .map((repo: GithubRepo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
        </div>
      </section>

      {/* Alt kısma geçiş ipucu (Pozisyonunu biraz daha aşağı çektik) */}
      <div className="py-12 flex justify-center w-full animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-neon-cyan to-transparent"></div>
      </div>
    </main>
  );
}
