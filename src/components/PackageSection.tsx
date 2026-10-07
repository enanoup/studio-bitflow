'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, Zap, Flame } from 'lucide-react';

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

// Componente individual para cada fila de la lista
function FeatureItem({
  text,
  idx,
  total,
  scrollYProgress,
}: {
  text: string;
  idx: number;
  total: number;
  scrollYProgress: any;
}) {
  const start = 0.22 + (idx / total) * 0.45;
  const end = start + 0.08;

  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  const x = useTransform(scrollYProgress, [start, end], [-20, 0]);
  const isLast = idx === total - 1;

  return (
    <motion.div
      style={{ opacity, x }}
      className={`flex items-center gap-2.5 sm:gap-3 font-medium text-xs sm:text-base leading-snug ${
        isLast ? 'text-electricCyan font-bold' : 'text-pureSnow'
      }`}
    >
      {isLast ? (
        <Zap className="text-electricCyan w-4 sm:w-5 h-4 sm:h-5 shrink-0 animate-pulse" />
      ) : (
        <Check className="text-terminalLime w-4 sm:w-5 h-4 sm:h-5 shrink-0" />
      )}
      <span>{text}</span>
    </motion.div>
  );
}

export default function PackageSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Animación del encabezado de la tarjeta
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [0.15, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.12], [0.95, 1]);

  // Animación del cuadro de precio de lanzamiento
  const noticeOpacity = useTransform(scrollYProgress, [0.12, 0.20], [0.15, 1]);
  const noticeY = useTransform(scrollYProgress, [0.12, 0.20], [-10, 0]);

  // Animación de la aclaración de Dominio/Hosting
  const noteOpacity = useTransform(scrollYProgress, [0.68, 0.76], [0.15, 1]);

  // Animación del botón CTA y notas finales
  const buttonOpacity = useTransform(scrollYProgress, [0.76, 0.88], [0.15, 1]);
  const buttonScale = useTransform(scrollYProgress, [0.76, 0.88], [0.95, 1]);

  return (
    <section ref={targetRef} className="relative h-[280vh] bg-obsidian border-t border-subtleBorder">
      <div id="paquete" className="absolute top-[60%] left-0 pointer-events-none" />

      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden">
        {/* ENCABEZADO CON BADGE EN VIVO */}
        <div className="text-center mb-3 sm:mb-6 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs text-electricCyan font-bold px-3 py-1 rounded bg-electricCyan/10 border border-electricCyan/50 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Flame className="w-3.5 h-3.5 text-electricCyan animate-bounce" />
            TARIFA ESPECIAL DE APERTURA
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl mt-2 sm:mt-3 text-pureSnow">
            Todo lo que necesitas para salir al aire
          </h2>
        </div>

        {/* TARJETA DE PRECIO */}
        <div className="max-w-3xl w-full p-5 sm:p-10 rounded-2xl border-2 border-electricCyan bg-darkVoid/95 backdrop-blur-md relative shadow-[0_0_40px_rgba(0,240,255,0.15)]">
          {/* ENCABEZADO DE PRECIO */}
          <motion.div
            style={{ opacity: headerOpacity, scale: headerScale }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 pb-3 sm:pb-6 mb-3 sm:mb-6 border-b border-subtleBorder origin-center"
          >
            <div>
              <h3 className="font-display font-bold text-xl sm:text-3xl text-pureSnow">Paquete Business</h3>
              <p className="text-techMuted text-xs sm:text-sm">Sitio web profesional de una página</p>
            </div>

            <div className="text-left sm:text-right">
              <div className="flex flex-col sm:items-end">
                <span className="font-mono text-xs text-techMuted/70 line-through">
                  Desde $10,900 en proyectos similares
                </span>
                <div className="flex items-baseline gap-1.5 sm:justify-end">
                  <span className="font-display font-bold text-3xl sm:text-5xl text-electricCyan">$5,900</span>
                  <span className="text-xs sm:text-sm text-techMuted font-mono"> MXN</span>
                </div>
                <p className="text-[11px] text-techMuted/80 font-mono mt-0.5">
                  Menos de $500 al mes durante el primer año.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CAJA DE PRECIO DE LANZAMIENTO (ANIMADA EN SCROLL) */}
          <motion.div
            style={{ opacity: noticeOpacity, y: noticeY }}
            className="mb-4 p-3 rounded-lg bg-electricCyan/5 border border-electricCyan/20"
          >
            <p className="font-mono text-xs text-electricCyan leading-relaxed text-center sm:text-left">
              Precio de lanzamiento hasta el 31 de octubre de 2026. Solo recibo 3 proyectos nuevos por mes.
            </p>
          </motion.div>

          {/* LISTA DE BENEFICIOS CON SCROLL ANIMADO */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {FEATURES.map((text, idx) => (
              <FeatureItem
                key={idx}
                text={text}
                idx={idx}
                total={FEATURES.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* NOTA ACLARATORIA DOMINIO/HOSTING (ANIMADA EN SCROLL) */}
          <motion.div style={{ opacity: noteOpacity }} className="pt-3 border-t border-subtleBorder/50 mb-4 sm:mb-6">
            <p className="text-xs text-techMuted italic">
              El dominio y el hosting por sí solos cuestan cerca de $2,000 MXN al año. Aquí van incluidos.
            </p>
          </motion.div>

          {/* BOTÓN CTA Y NOTAS FINALES (ANIMADOS EN SCROLL) */}
          <motion.div style={{ opacity: buttonOpacity, scale: buttonScale }} className="pt-1 sm:pt-2">
            <a
              href="#contacto"
              className="block w-full text-center bg-electricCyan text-obsidian font-display font-bold py-3.5 sm:py-4 rounded-xl text-xs sm:text-lg transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(0,240,255,0.4)]"
            >
              Aprovechar precio de lanzamiento
            </a>

            <p className="text-center font-mono text-[10px] sm:text-xs text-techMuted mt-2 sm:mt-3">
              ⚡ Después del 31 de octubre, el paquete volverá a su costo regular.
            </p>

            <p className="text-center font-mono text-[10px] sm:text-xs text-terminalLime font-semibold mt-1">
              Pago único: 50% de anticipo y 50% al entregar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}