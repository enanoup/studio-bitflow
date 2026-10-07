'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Platicamos',
    desc: 'Me cuentas qué haces y a quién quieres atraer.',
  },
  {
    num: '02',
    title: 'Diseñamos',
    desc: 'Te muestro cómo se verá tu sitio web.',
  },
  {
    num: '03',
    title: 'Ajustamos',
    desc: 'Lo afinamos contigo hasta que te represente perfectamente.',
  },
  {
    num: '04',
    title: 'Publicamos',
    desc: 'Tu sitio sale al aire con todo listo para funcionar.',
  },
];

export default function StepsSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Transformaciones para la imagen de fondo (Parallax + Zoom sutil)
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.02, 1.1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.15, 0.5, 0.5, 0.15]);

  // Animación del encabezado
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.12], [0.88, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.12], [-20, 0]);

  return (
    <section ref={targetRef} className="relative h-[260vh] bg-obsidian border-t border-subtleBorder">
      {/* SECCIÓN FIJA (STICKY) */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        
        {/* IMAGEN DE FONDO CON PARALLAX CORREGIDA */}
        <motion.div 
          style={{ 
            backgroundImage: "url('/images/banner_pipeline.jpg')",
            y: bgY,
            scale: bgScale,
            opacity: bgOpacity,
          }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        />

        {/* OVERLAY DE OSCURECIMIENTO */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/85 to-obsidian z-0 pointer-events-none" />

        <div className="max-w-6xl w-full mx-auto relative z-10">
          
          {/* ENCABEZADO */}
          <motion.div 
            style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
            className="text-center mb-16 origin-center"
          >
            <span className="font-mono text-xs text-terminalLime px-3 py-1 rounded bg-darkVoid/90 backdrop-blur-md border border-subtleBorder shadow-md">
              // PIPELINE DE TRABAJO
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl mt-4 text-pureSnow drop-shadow-md">
              Sin tecnicismos, sin vueltas. En 4 pasos.
            </h2>
          </motion.div>

          {/* GRID DE LAS 4 TARJETAS CON SECUENCIA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, idx) => {
              const start = 0.15 + idx * 0.18;
              const end = start + 0.15;

              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
              const y = useTransform(scrollYProgress, [start, end], [30, 0]);
              const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
              const borderGlow = useTransform(
                scrollYProgress,
                [start, end],
                ['rgba(36,42,62,0.4)', 'rgba(0,240,255,0.4)']
              );

              return (
                <motion.div
                  key={step.num}
                  style={{ opacity, y, scale, borderColor: borderGlow }}
                  className="p-8 rounded-2xl border bg-darkVoid/90 backdrop-blur-md flex flex-col justify-between shadow-xl transition-colors"
                >
                  <div>
                    <span className="font-mono text-sm text-electricCyan block mb-4">
                      {step.num} //
                    </span>
                    <h3 className="font-display font-bold text-2xl text-pureSnow mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-techMuted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}