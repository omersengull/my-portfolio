"use client";
import { motion } from "framer-motion";
import { Cpu, Code2, Globe, Layers, Layout, Database, Terminal, Zap } from "lucide-react";

const technologies = [
  { name: "Next.js", icon: <Layers className="w-6 h-6" /> },
  { name: "React", icon: <Cpu className="w-6 h-6" /> },
  { name: "TypeScript", icon: <Code2 className="w-6 h-6" /> },
  { name: "Tailwind", icon: <Layout className="w-6 h-6" /> },
  { name: "GitHub", icon: <Globe className="w-6 h-6" /> },
  { name: "Node.js", icon: <Terminal className="w-6 h-6" /> },
  { name: "Framer Motion", icon: <Zap className="w-6 h-6" /> },
  { name: "Supabase", icon: <Database className="w-6 h-6" /> },
];

const TechStack = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-glass/5 border-y border-white/5 backdrop-blur-sm my-10">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

      <motion.div
        className="flex w-max gap-12 items-center px-6 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30, // Biraz daha yavaşlattım ki başa dönme daha az hissedilsin
          repeat: Infinity,
        }}
      >
        {/* Kesintisiz döngü için listeyi iki kez render etmeye devam ediyoruz */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex items-center gap-4 text-gray-400 hover:text-neon-cyan transition-all group shrink-0">
            <div className="p-3 rounded-xl bg-white/5 group-hover:bg-neon-cyan/10 border border-white/5 group-hover:border-neon-cyan/20 transition-all transform group-hover:scale-110">
              {tech.icon}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;