'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const IMAGES = [
  '/images/banner_1.jpg',
  '/images/banner_2.jpg',
  '/images/banner_3.jpg',
];

export default function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animación parallax vinculada al scroll de la ventana
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], ['0%', '30%']);
  const scaleParallax = useTransform(scrollY, [0, 800], [1, 1.14]);
  // Subimos la opacidad base de 0.55 a 0.82 para que sea más oscuro desde el inicio
  const opacityOverlay = useTransform(scrollY, [0, 600], [0.82, 0.98]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000); // Cambia cada 6 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <motion.div 
        style={{ y: yParallax, scale: scaleParallax }} 
        className="relative w-full h-full"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.8, ease: 'easeInOut' },
              scale: { duration: 7, ease: 'easeOut' }
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${IMAGES[currentIndex]})` }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Capa de oscurecimiento extra (base sólida) */}
      <div className="absolute inset-0 bg-obsidian/40 backdrop-blur-[1px]" />

      {/* Capa de degradado cyber/dark reforzado para legibilidad total del texto */}
      <motion.div 
        style={{ opacity: opacityOverlay }}
        className="absolute inset-0 bg-gradient-to-b from-obsidian/95 via-obsidian/85 to-obsidian border-b border-subtleBorder/40"
      />

      {/* Indicadores de diapositiva (Puntos del carrusel) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 pointer-events-auto ${
              idx === currentIndex ? 'w-8 bg-electricCyan shadow-[0_0_12px_#00F0FF]' : 'w-2 bg-pureSnow/30'
            }`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}