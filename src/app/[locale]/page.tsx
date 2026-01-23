import { fetchGithubRepos, GithubRepo } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/components/SwitchLanguageButton";
import { FloatingShape } from "@/components/FloatingShape";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Meteors } from "@/components/Meteors";
import { Spotlight } from "@/components/Spotlight";

export default async function Home() {
  const repos = await fetchGithubRepos();
  const t = await getTranslations("Index");

  return (
    // 1. DÜZELTME: main'den bg rengini kaldırdık, relative bıraktık
    <main className="relative min-h-screen w-full flex flex-col items-center p-6 overflow-x-hidden">
      <Spotlight />
      
      {/* 2. DÜZELTME: En alt katman (Zifiri Karanlık Zemin) */}
      <div className="fixed inset-0 bg-[#020617] -z-50" />

      {/* 3. DÜZELTME: Auralar ve Izgara (Zemin'in bir tık üstü) */}
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
        <Meteors number={40} />
        <div className="absolute top-[5%] left-[10%] w-[30rem] h-[30rem] bg-neon-cyan/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[5%] right-[10%] w-[35rem] h-[35rem] bg-neon-pink/10 rounded-full blur-[120px] animate-float [animation-delay:2s]" />
        <div className="absolute top-[30%] left-[40%] w-[25rem] h-[25rem] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" />
      </div>
      
      {/* Izgara Deseni */}
      <div className="fixed inset-0 -z-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 4. DÜZELTME: Uçan Kutular (Izgara'nın üstü, İçeriğin altı) */}
      {/* Not: Renkleri biraz daha belirginleştirdim (/10 -> /20) */}
      <div className="fixed inset-0 pointer-events-none -z-20">
        <FloatingShape
          color="bg-neon-cyan/10"
          size="140px"
          top="15%"
          left="5%"
          delay={0}
        />
        <FloatingShape
          color="bg-neon-pink/10"
          size="100px"
          top="65%"
          left="85%"
          delay={2}
        />
        <FloatingShape
          color="bg-purple-500/10"
          size="180px"
          top="35%"
          left="75%"
          delay={4}
        />
        <FloatingShape
          color="bg-white/5"
          size="50px"
          top="10%"
          left="80%"
          delay={1}
        />
      </div>

      {/* --- NAVİGASYON --- */}
      <nav className="fixed top-8 px-6 py-4 rounded-full bg-glass border border-glass-border backdrop-blur-xl flex items-center gap-8 text-sm font-medium z-50 shadow-2xl">
        <div className="flex gap-8">
          <a href="#" className="hover:text-neon-cyan transition-colors">{t("home")}</a>
          <a href="#projects" className="hover:text-neon-cyan transition-colors">{t("projects")}</a>
          <a href="#about" className="hover:text-neon-cyan transition-colors">{t("about")}</a>
        </div>
        <div className="w-[1px] h-4 bg-white/10"></div>
        <LanguageSwitcher />
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="w-full min-h-screen flex items-center justify-center pt-48 pb-32 z-10">
        <HeroSection />
      </section>

      {/* --- TECH STACK --- */}
      <TechStack />
      <About/>
      {/* --- PROJELER --- */}
      <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-32 z-10">
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
      <Contact/>
      
    </main>
  );
}