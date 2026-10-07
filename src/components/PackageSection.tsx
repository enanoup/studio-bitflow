'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const FEATURES = [
  'Sitio web profesional de una página, diseñado para que te contacten',
  'Dominio propio por 1 año, a tu nombre',
  'Hosting gratis por 6 meses',
  '3 correos corporativos (contacto@tunegocio.com)',
  'Botón de WhatsApp y formulario de contacto',
  'Certificado SSL (sitio seguro)',
  'Hasta 3 rondas de ajustes de diseño',
  '20 días de soporte después de la entrega',
  'Entrega en 7 a 10 días hábiles',
];

export default function PackageSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.15], [0.85, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [-20, 0]);

  const buttonOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0.2, 1]);
  const buttonScale = useTransform(scrollYProgress, [0.75, 0.95], [0.9, 1]);
  const buttonGlow = useTransform(
    scrollYProgress,
    [0.85, 1],
    ['0px 0px 0px rgba(16,137,129,0)', '0px 0px 35px rgba(16,137,129,0.7)']
  );

  return (
    <section ref={targetRef} className="relative h-[280vh] bg-obsidian border-t border-subtleBorder">

      <div id="paquete" className="absolute top-[60%] left-0 pointer-events-none" />

      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden">

        {/* ENCABEZADO */}
        <div className="text-center mb-3 sm:mb-6 max-w-2xl">
          <span className="font-mono text-[10px] sm:text-xs text-terminalLime px-2.5 sm:px-3 py-1 rounded bg-darkVoid border border-subtleBorder">
            // PRECIO DE LANZAMIENTO
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl mt-2 sm:mt-3 text-pureSnow">
            Todo lo que necesitas para salir al aire
          </h2>
        </div>

        {/* TARJETA */}
        <div className="max-w-3xl w-full p-5 sm:p-10 rounded-2xl border-2 border-electricCyan bg-darkVoid/95 backdrop-blur-md relative shadow-[0_0_40px_rgba(0,240,255,0.15)]">
          
          {/* ENCABEZADO DE PRECIO */}
          <motion.div 
            style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 pb-3 sm:pb-6 mb-3 sm:mb-6 border-b border-subtleBorder origin-center"
          >
            <div>
              <h3 className="font-display font-bold text-xl sm:text-3xl text-pureSnow">Paquete Business</h3>
              <p className="text-techMuted text-xs sm:text-sm">Sitio web profesional de una página</p>
            </div>
            <div className="text-left sm:text-right">
              <span className="font-display font-bold text-3xl sm:text-5xl text-electricCyan">$5,900</span>
              <span className="text-xs sm:text-sm text-techMuted font-mono"> MXN</span>
              <p className="text-[10px] sm:text-xs text-techMuted mt-0.5 sm:mt-1">Pago único (50% anticipo / 50% al entregar)</p>
            </div>
          </motion.div>

          {/* LISTA DE BENEFICIOS */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
            {FEATURES.map((text, idx) => {
              const start = 0.15 + (idx / FEATURES.length) * 0.6;
              const end = start + 0.08;
              
              const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
              const x = useTransform(scrollYProgress, [start, end], [-20, 0]);
              const color = useTransform(
                scrollYProgress, 
                [start, end], 
                ['#94A3B8', idx === FEATURES.length - 1 ? '#00F0FF' : '#F8FAFC']
              );

              return (
                <motion.div
                  key={idx}
                  style={{ opacity, x, color }}
                  className="flex items-center gap-2.5 sm:gap-3 font-medium text-xs sm:text-base leading-snug"
                >
                  {idx === FEATURES.length - 1 ? (
                    <Zap className="text-electricCyan w-4 sm:w-5 h-4 sm:h-5 shrink-0 animate-pulse" />
                  ) : (
                    <Check className="text-terminalLime w-4 sm:w-5 h-4 sm:h-5 shrink-0" />
                  )}
                  <span>{text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* BOTÓN CTA */}
          <motion.div 
            style={{ opacity: buttonOpacity, scale: buttonScale }}
            className="pt-1 sm:pt-2"
          >
            <motion.a 
              href="#contacto" 
              style={{ boxShadow: buttonGlow }}
              className="block w-full text-center bg-terminalLime text-pureSnow font-display font-bold py-3 sm:py-4 rounded-xl text-xs sm:text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Quiero que mi negocio se vea como merece
            </motion.a>
            <p className="text-center font-mono text-[10px] sm:text-xs text-techMuted mt-2 sm:mt-3">
              Te respondo personalmente en menos de 24 horas.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}