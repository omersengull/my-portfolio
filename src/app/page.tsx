import { fetchGithubRepos, GithubRepo } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
export default async function Home() {
  const repos = await fetchGithubRepos();
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-6">
      {/* --- TASARIM: ARKA PLAN AURASI --- */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-neon-cyan/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[10%] right-[15%] w-96 h-96 bg-neon-pink/20 rounded-full blur-[120px] animate-float [animation-delay:2s]" />
      </div>

      {/* --- TASARIM: NAVİGASYON (CAM EFEKTİ) --- */}
      <nav className="fixed top-6 px-6 py-3 rounded-full bg-glass border border-glass-border backdrop-blur-xl flex gap-8 text-sm font-medium z-50">
        <a href="#" className="hover:text-neon-cyan transition-colors">
          Ana Sayfa
        </a>
        <a href="#projects" className="hover:text-neon-cyan transition-colors">
          Projeler
        </a>
        <a href="#about" className="hover:text-neon-cyan transition-colors">
          Hakkımda
        </a>
      </nav>

      {/* --- TASARIM: HERO BÖLÜMÜ --- */}
      <div className="text-center z-10">
        <HeroSection />
      </div>

      <TechStack />      

      {/* --- TASARIM: PROJELER BÖLÜMÜ --- */}
      <section
        id="projects"
        className="w-full max-w-6xl mx-auto px-6 py-20 z-10"
      >
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">
            Öne Çıkan Projeler
          </h2>
          <div className="w-20 h-1 bg-neon-cyan rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos
            .filter((repo: GithubRepo) => !repo.fork)
            .slice(0, 6)
            .map((repo: GithubRepo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
        </div>
      </section>
      {/* Alt kısma geçiş ipucu oku */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent"></div>
      </div>
    </main>
  );
}
