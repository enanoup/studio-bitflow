'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: customDelay,
      ease: 'easeOut',
    },
  }),
};

export default function InfrastructureSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax y escala de la imagen de fondo vinculados al scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.02, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.65, 0.65, 0.2]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[80vh] flex items-center justify-center border-t border-subtleBorder bg-obsidian overflow-hidden py-24"
    >
      {/* FONDO IMAGEN CON PARALLAX */}
      <motion.div 
        style={{ 
          backgroundImage: "url('/images/banner_infrastructure.jpg')",
          y: bgY,
          scale: bgScale,
          opacity: bgOpacity
        }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
      />

      {/* GRADIENTE PARA ASEGURAR LEGIBILIDAD */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/75 to-obsidian z-10 pointer-events-none" />

      {/* CONTENIDO CON FADE IN REPETIBLE (viewport.once = false) */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        
        {/* ETIQUETA SUPERIOR */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <span className="font-mono text-xs text-terminalLime px-3 py-1 rounded bg-darkVoid/90 backdrop-blur-md border border-subtleBorder inline-block mb-6 shadow-lg">
            // NEXT LEVEL INFRASTRUCTURE
          </span>
        </motion.div>

        {/* TÍTULO PRINCIPAL */}
        <motion.h2 
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="font-display font-bold text-4xl sm:text-6xl text-pureSnow leading-tight mb-6 drop-shadow-md"
        >
          ¿Cansado de perseguir clientes <br className="hidden sm:inline" />
          <span className="text-electricCyan">uno por uno?</span>
        </motion.h2>

        {/* SUBTEXTO */}
        <motion.p 
          custom={0.24}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="font-body text-techMuted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow"
        >
          Un sitio bonito te da presencia. Un sistema de ventas te da clientes constantes. Diseñamos el camino completo: cómo te encuentran, cómo los atiendes y cómo se convierten en compradores.
        </motion.p>

        {/* BOTÓN Y NOTA DE CONTACTO */}
        <motion.div 
          custom={0.36}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="flex flex-col items-center gap-3"
        >
          <a 
            href="#contacto" 
            className="bg-electricCyan text-obsidian font-display font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Quiero que mi negocio venda sin perseguir a nadie
          </a>

          <p className="font-mono text-xs text-techMuted mt-3">
            Platicamos 30 minutos sin compromiso. Revisamos tu caso y te digo con honestidad si te conviene.
          </p>
        </motion.div>

      </div>
    </section>
  );
}