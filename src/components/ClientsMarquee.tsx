'use client';

import { motion } from 'framer-motion';

// Lista de tus logos en public/images/
const CLIENT_LOGOS = [
  { name: 'Cliente 1', src: '/images/logos/coca_color_med.png' },
  { name: 'Cliente 2', src: '/images/logos/cruiters.png' },
  { name: 'Cliente 3', src: '/images/logos/details-mexico_logo.png' },
  { name: 'Cliente 4', src: '/images/logos/grupo_edca.png' },
  { name: 'Cliente 5', src: '/images/logos/logo_tti_white.png' },
  { name: 'Cliente 6', src: '/images/logos/logocyr.png' },
  { name: 'Cliente 7', src: '/images/logos/maneki-logo.png' },
  { name: 'Cliente 8', src: '/images/logos/suncore.png' }
];

// Duplicamos la lista para generar el bucle infinito continuo e imperceptible
const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function ClientsMarquee() {
  return (
    <section className="py-8 bg-obsidian border-y border-subtleBorder/60 overflow-hidden relative z-20">
      
      {/* SOMBRAS DE DESVANECIMIENTO LATERAL (FADE GRADIENT) */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-4 text-center">
        <p className="font-mono text-xs text-techMuted uppercase tracking-widest">
          MARCAS Y NEGOCIOS QUE CONFÍAN EN STUDIO BITFLOW
        </p>
      </div>

      {/* CONTENEDOR DEL CARRUSEL CONTINUO */}
      <div className="flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20, // Velocidad del carrusel
          }}
          className="flex items-center gap-16 shrink-0 pr-16"
        >
          {MARQUEE_LOGOS.map((logo, index) => (
            <div 
              key={index} 
              className="h-9 w-32 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.name}
                /* Se mantiene 100% blanco en todo momento */
                className="max-h-full max-w-full object-contain brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}