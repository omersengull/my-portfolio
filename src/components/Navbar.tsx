"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./SwitchLanguageButton";
import { handleScroll } from "./Scroll";

const Navbar = () => {
  const t = useTranslations("Index");
  const [activeSection, setActiveSection] = useState("hero");


  

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -80% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "hero", label: t("home"), href: "#" },
    { id: "about", label: t("about"), href: "#about" },
    { id: "projects", label: t("projects"), href: "#projects" },
  ];

  return (
    <nav className="fixed top-8 px-6 py-4 rounded-full bg-glass border border-glass-border backdrop-blur-xl flex items-center gap-8 text-sm font-medium z-50 shadow-2xl">
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className={`${
              activeSection === link.id ? "text-neon-cyan" : "text-white/70"
            } hover:text-neon-cyan transition-colors duration-300 cursor-pointer`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="w-[1px] h-4 bg-white/10"></div>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;