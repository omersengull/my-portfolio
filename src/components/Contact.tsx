"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const t = useTranslations("Contact");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({
          type: "success",
          message: "Mesajınız başarıyla gönderildi!",
        });
        (e.target as HTMLFormElement).reset();
      } else if (response.status === 429) {
        setStatus({
          type: "error",
          message: "Çok fazla deneme yaptınız. Lütfen bekleyin.",
        });
      } else {
        setStatus({ type: "error", message: "Bir hata oluştu." });
      }
      setTimeout(() => {
        setStatus(null);
      }, 15000);
    } catch (error) {
      console.error("Hata:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer
      id="contact"
      className="relative z-10 w-full py-16 bg-glass border-t border-glass-border backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sol Taraf: Başlık ve Açıklama */}
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent"
            >
              {t("title")}
            </motion.h2>
            <p className="text-gray-400 mb-8 text-lg max-w-md">
              {t("description")}
            </p>

            {/* Sosyal Linkler Buraya Taşındı */}
            <div className="flex flex-wrap gap-4">
              <SocialLink
                href="mailto:omersengul061@hotmail.com"
                icon={<Mail size={20} />}
                label="Email"
                color="hover:bg-red-500/20"
              />
              <SocialLink
                href="https://github.com/omersengull"
                icon={<Github size={20} />}
                label="GitHub"
                color="hover:bg-white/10"
              />
              <SocialLink
                href="https://linkedin.com/in/omersengull"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                color="hover:bg-blue-500/20"
              />
            </div>
          </div>

          {/* Sağ Taraf: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="text"
                name="name"
                placeholder={t("form.name")}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-all text-sm"
              />
              <input
                required
                name="email"
                type="email"
                placeholder={t("form.email")}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-all text-sm"
              />
            </div>
            <textarea
              required
              name="message"
              placeholder={t("form.message")}
              rows={3}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-all text-sm"
            ></textarea>
            <button
              disabled={isSubmitting}
              className="w-full py-3 bg-neon-cyan cursor-pointer text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all"
            >
              {isSubmitting ? t("form.sending") : t("form.send")}
            </button>
            {status && (
              <div
                className={`p-3 rounded-lg text-sm ${status.type === "success" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
              >
                {status.message}
              </div>
            )}
          </motion.form>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Ömer Şengül. {t("footer")}
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label, color }: any) {
  return (
    <a
      rel="noopener noreferrer"
      href={href}
      target="_blank"
      className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-105 ${color} text-sm`}
    >
      {icon} <span className="font-semibold">{label}</span>
    </a>
  );
}
