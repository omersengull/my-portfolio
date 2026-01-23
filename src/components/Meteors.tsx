"use client";
import React, { useEffect, useState } from "react";

export const Meteors = ({ number }: { number?: number }) => {
  const [meteorStyles, setMeteorStyles] = useState<any[]>([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const styles = new Array(number || 20).fill(true).map(() => ({
      // Meteorlar artık ekranın her yüksekliğinde (0 ile height arası) doğabilir
      top: Math.floor(Math.random() * height) + "px", 
      // Ekranın her genişliğinde (0 ile width arası) doğabilir
      left: Math.floor(Math.random() * width) + "px",
      animationDelay: Math.random() * 0.8 + 0.2 + "s",
      // Süzülme etkisini artırmak için süreyi biraz uzattık (akıcı hareket)
      animationDuration: Math.floor(Math.random() * 10 + 6) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  if (meteorStyles.length === 0) return null;

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          // rotate-[215deg] sınıfını sildik, animasyon zaten 160deg ile çalışacak
          className="pointer-events-none absolute h-0.5 w-0.5 animate-[meteor_linear_infinite] rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]"
          style={style}
        >
          {/* Kuyruk: -translate-x-full ile baş kısmın arkasında kalmasını sağladık */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[60px] -translate-x-full -translate-y-1/2 bg-gradient-to-r from-transparent to-slate-200" />
        </span>
      ))}
    </>
  );
};