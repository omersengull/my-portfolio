import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { Spotlight } from "@/components/Spotlight";
import {Meteors} from "@/components/Meteors";
import { fetchGithubRepos, GithubRepo } from "@/lib/github";
import ProjectDetailsClient from "./ProjectDetailsClient";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string, locale: string }> }) {
  const { id } = await params;
  
  // GitHub'dan tüm repoları al ve bu sayfaya ait olanı bul
  const repos = await fetchGithubRepos();
  const repo = repos.find((r:GithubRepo) => r.name === id);

  if (!repo) {
    return <div className="text-white text-center pt-40">Proje bulunamadı.</div>;
  }

  return (
    <div className="relative min-h-screen w-full bg-[#020617] text-white overflow-x-hidden">
      {/* Arka Plan Efektleri */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight />
        <Meteors number={20} />
      </div>

      <Navbar />

      {/* Asıl içeriği ve repo verisini buraya gönderiyoruz */}
      <ProjectDetailsClient id={id} repo={repo} />

      <Contact />
    </div>
  );
}