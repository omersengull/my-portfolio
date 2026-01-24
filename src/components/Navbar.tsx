"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./SwitchLanguageButton";
import { handleScroll } from "./Scroll";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
const Navbar = () => {
  const t = useTranslations("Index");
  const [activeSection, setActiveSection] = useState("hero");
  const pathName=usePathname();
  const isHomePage=pathName==="/tr" || pathName==="/en" || pathName==="/";
  useEffect(() => {
    if(!isHomePage) return;
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
  }, [isHomePage]);

  const navLinks = [
    { id: "hero", label: t("home"), href: "/" },
    { id: "about", label: t("about"), href: "/#about" },
    { id: "projects", label: t("projects"), href: "/#projects" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-max px-4 md:px-6 py-3 md:py-4 rounded-full bg-glass border border-glass-border backdrop-blur-xl flex items-center justify-between md:justify-center gap-4 md:gap-8 text-xs md:text-sm font-medium z-50 shadow-2xl transition-all duration-300">
      <div className="flex gap-4 md:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            onClick={(e) => {
              if (isHomePage) {
                handleScroll(e, link.href.replace("/", ""));
              }
              
            }}
            className={`${
              activeSection === link.id && isHomePage ? "text-neon-cyan" : "text-white/70"
            } hover:text-neon-cyan transition-colors duration-300 cursor-pointer whitespace-nowrap`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="w-[1px] h-4 bg-white/10 shrink-0"></div>
      <div className="flex shrink-0">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;