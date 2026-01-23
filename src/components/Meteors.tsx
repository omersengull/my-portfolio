"use client";
import React, { useEffect, useState } from "react";

export const Meteors = ({ number }: { number?: number }) => {
  const [meteorStyles, setMeteorStyles] = useState<any[]>([]);

  useEffect(() => {
    // Ekran genişliğini al
    const width = window.innerWidth;
    
    const styles = new Array(number || 20).fill(true).map(() => ({
      // top değerini -100px yaparak ekranın biraz üstünden başlamalarını sağlıyoruz
      top: -5, 
      // Ekranın tamamına (veya biraz daha fazlasına) yayılmasını sağla
      left: Math.floor(Math.random() * width) + "px",
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  if (meteorStyles.length === 0) return null;

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          // bg-slate-500 yerine bg-white yaparak daha parlak görünmelerini sağladık
          className="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-[meteor_linear_infinite] rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]"
          style={style}
        >
          {/* Kuyruk rengini de beyaza (slate-200) çektik */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-200 to-transparent" />
        </span>
      ))}
    </>
  );
};