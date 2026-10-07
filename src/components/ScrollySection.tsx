'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { X, Zap, Shield, MessageSquare } from 'lucide-react';

const SPARKLES = [
  { id: 1, top: '15%', left: '12%', size: 'w-3 h-3', color: 'bg-electricCyan', speedY: [-450, 550], speedX: [-200, 250], glow: 'shadow-[0_0_18px_#00F0FF]' },
  { id: 2, top: '25%', left: '85%', size: 'w-4 h-4', color: 'bg-terminalLime', speedY: [-550, 600], speedX: [250, -300], glow: 'shadow-[0_0_22px_#108981]' },
  { id: 3, top: '45%', left: '8%', size: 'w-2 h-2', color: 'bg-electricCyan', speedY: [-400, 500], speedX: [-220, 200], glow: 'shadow-[0_0_14px_#00F0FF]' },
  { id: 4, top: '60%', left: '88%', size: 'w-3 h-3', color: 'bg-electricCyan', speedY: [-600, 650], speedX: [280, -250], glow: 'shadow-[0_0_20px_#00F0FF]' },
  { id: 5, top: '75%', left: '18%', size: 'w-4 h-4', color: 'bg-terminalLime', speedY: [-500, 550], speedX: [-200, 280], glow: 'shadow-[0_0_25px_#108981]' },
  { id: 6, top: '80%', left: '72%', size: 'w-2 h-2', color: 'bg-electricCyan', speedY: [-400, 450], speedX: [200, -220], glow: 'shadow-[0_0_12px_#00F0FF]' },
  { id: 7, top: '35%', left: '50%', size: 'w-3 h-3', color: 'bg-terminalLime', speedY: [-650, 700], speedX: [-300, 300], glow: 'shadow-[0_0_18px_#108981]' },
];

export default function ScrollySection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Medimos el scroll a lo largo de los 250vh
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // ETAPA 1 (0% a 45%): Enfoque en la tarjeta del Problema
  // ETAPA 2 (45% a 90%): Transición y encendido con brillo de la tarjeta del Estado Deseado
  const leftOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 1, 0.3]);
  const leftScale = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 1, 0.94]);
  const leftBlur = useTransform(scrollYProgress, [0.35, 0.6], ['blur(0px)', 'blur(2px)']);

  const rightOpacity = useTransform(scrollYProgress, [0.25, 0.55, 0.9], [0.25, 1, 1]);
  const rightScale = useTransform(scrollYProgress, [0.25, 0.55, 0.9], [0.92, 1, 1]);
  const rightGlow = useTransform(
    scrollYProgress, 
    [0.25, 0.6, 0.9], 
    ['0px 0px 0px rgba(0,240,255,0)', '0px 0px 45px rgba(0,240,255,0.25)', '0px 0px 25px rgba(0,240,255,0.15)']
  );

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-obsidian border-t border-subtleBorder">
      
      {/* SECCIÓN FIXA/STICKY */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        
        {/* DESTELLOS DE FONDO ALTA VELOCIDAD */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {SPARKLES.map((sparkle) => {
            const y = useTransform(scrollYProgress, [0, 1], sparkle.speedY);
            const x = useTransform(scrollYProgress, [0, 1], sparkle.speedX);
            const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.1, 0.9, 0.9, 0.1]);

            return (
              <motion.div
                key={sparkle.id}
                style={{
                  top: sparkle.top,
                  left: sparkle.left,
                  y,
                  x,
                  opacity,
                }}
                className={`absolute rounded-full ${sparkle.size} ${sparkle.color} ${sparkle.glow}`}
              />
            );
          })}
        </div>

        <div className="max-w-5xl w-full mx-auto relative z-10">
          
          {/* ENCABEZADO */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-mono text-xs text-terminalLime px-3 py-1 rounded bg-darkVoid border border-subtleBorder">
              // SYSTEM OVERHAUL
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl mt-3 text-pureSnow">
              La diferencia entre perseguir <br className="hidden sm:inline" /> y recibir clientes
            </h2>
          </div>

          {/* CONTENEDOR DE TARJETAS ANIMADAS */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* TARJETA 1: PROBLEMA */}
            <motion.div 
              style={{ opacity: leftOpacity, scale: leftScale, filter: leftBlur }}
              className="p-7 sm:p-9 rounded-2xl border border-subtleBorder bg-darkVoid/85 backdrop-blur-md flex flex-col justify-between transition-all"
            >
              <div>
                <span className="font-mono text-xs text-red-400/80 block mb-3">// EL PROBLEMA ACTUAL</span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-pureSnow mb-5 leading-snug">
                  Publicas, respondes mensajes, repites precios... y aun así sientes que no avanzas.
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-techMuted">
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
              </div>
            </motion.div>

            {/* TARJETA 2: ESTADO DESEADO (SE ENCIENDE Y RESALTA AL BAJAR) */}
            <motion.div 
              style={{ opacity: rightOpacity, scale: rightScale, boxShadow: rightGlow }}
              className="p-7 sm:p-9 rounded-2xl border-2 border-electricCyan bg-darkVoid/95 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-electricCyan block mb-3">// EL ESTADO DESEADO</span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-pureSnow mb-5 leading-snug">
                  Imagina que un cliente llega, entiende lo que ofreces y te escribe listo para comprar.
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-pureSnow">
                  <li className="flex items-start gap-3">
                    <Zap className="text-electricCyan w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-electricCyan">Te ven profesional desde el primer segundo:</strong> Tu negocio se ve tan serio como tu trabajo, en celular y en computadora.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="text-electricCyan w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-electricCyan">Dejas de repetir lo mismo:</strong> Tu sitio responde las dudas básicas antes de que te escriban.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageSquare className="text-electricCyan w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-electricCyan">Te escriben sin fricción:</strong> Un clic y el cliente está en tu WhatsApp.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}