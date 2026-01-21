"use client";
import { motion } from "framer-motion";

export const FloatingShape = ({ color, size, top, left, delay }: any) => {
  return (
    <motion.div
     className={`absolute rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm z-0`}
      style={{ width: size, height: size, top, left }}
      animate={{
        y: [0, 40, 0], // Yukarı aşağı yüzer
        rotate: [0, 180, 360], // Kendi etrafında döner
        scale: [1, 1.1, 1], // Hafif nefes alma efekti
      }}
      transition={{
        duration: 10 + Math.random() * 5, // Her biri farklı hızda
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
    />
  );
};