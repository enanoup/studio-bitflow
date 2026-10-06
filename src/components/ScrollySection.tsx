'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { X, Zap, Brain, MessageSquare } from 'lucide-react';

export default function ScrollySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const dolorOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.25]);
  const dolorScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.95]);

  const solucionOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0.3, 1]);
  const solucionScale = useTransform(scrollYProgress, [0.2, 0.6], [0.9, 1.03]);
  const solucionGlow = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    ['0px 0px 0px rgba(0,240,255,0)', '0px 0px 50px rgba(0,240,255,0.35)']
  );

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-darkVoid border-t border-subtleBorder">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        
        <div className="text-center mb-12 max-w-2xl">
          <span className="font-mono text-xs text-electricCyan uppercase tracking-widest px-3 py-1 rounded bg-obsidian border border-subtleBorder">
            // SYSTEM OVERHAUL
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mt-4 text-pureSnow">
            La diferencia entre perseguir y recibir clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
          
          {/* TARJETA 1: EL DOLOR */}
          <motion.div
            style={{ opacity: dolorOpacity, scale: dolorScale }}
            className="p-8 rounded-2xl border border-red-500/30 bg-obsidian/90 backdrop-blur-md"
          >
            <span className="font-mono text-xs text-red-400 font-bold block mb-4">
              // EL PROBLEMA ACTUAL
            </span>
            <h3 className="font-display text-2xl font-bold text-pureSnow mb-6 leading-snug">
              Publicas, respondes mensajes, repites precios... y aun así sientes que no avanzas.
            </h3>
            <ul className="space-y-4 text-pureSnow text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <X className="text-red-400 w-5 h-5 shrink-0 mt-0.5" />
                <span>Dependes de un algoritmo que un día te muestra y al siguiente te esconde.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-400 w-5 h-5 shrink-0 mt-0.5" />
                <span>El cliente te ve en Instagram, no encuentra precios ni información clara, y se va con quien sí la tiene.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-400 w-5 h-5 shrink-0 mt-0.5" />
                <span>Ya no quieres seguir explicando lo mismo cada vez que alguien pregunta.</span>
              </li>
            </ul>
          </motion.div>

          {/* TARJETA 2: LA TRANSFORMACIÓN */}
          <motion.div
            style={{
              opacity: solucionOpacity,
              scale: solucionScale,
              boxShadow: solucionGlow,
            }}
            className="p-8 rounded-2xl border-2 border-electricCyan bg-deepSlate/90 backdrop-blur-md"
          >
            <span className="font-mono text-xs text-terminalLime font-bold block mb-4">
              // EL ESTADO DESEADO
            </span>
            <h3 className="font-display text-2xl font-bold text-pureSnow mb-6 leading-snug">
              Imagina que un cliente llega, entiende lo que ofreces y te escribe listo para comprar.
            </h3>
            <ul className="space-y-4 text-pureSnow text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <Zap className="text-electricCyan w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-electricCyan">Te ven profesional desde el primer segundo:</strong> Tu negocio se ve tan serio como tu trabajo, en celular y en computadora.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Brain className="text-electricCyan w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-pureSnow">Dejas de repetir lo mismo:</strong> Tu sitio responde las dudas básicas antes de que te escriban.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="text-electricCyan w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-pureSnow">Te escriben sin fricción:</strong> Un clic y el cliente está en tu WhatsApp.
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
}