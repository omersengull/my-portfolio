"use client";
import { motion } from "framer-motion";

export const FloatingShape = ({ color, size, top, left, delay }: any) => {
  return (
    <motion.div
      // BURASI DÜZELTİLDİ: ${color} değişkenini içeri aldık, sabit bg-white/5'i sildik.
      className={`absolute rounded-2xl border border-white/20 ${color} shadow-2xl shadow-white/10`}
      // z-0 sildik çünkü zaten container'ın içinde kontrol edeceğiz
      style={{ width: size, height: size, top, left }}
      animate={{
        y: [0, -100, 0],
        x: [0, 50, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut", // Daha yumuşak hareket
      }}
    />
  );
};