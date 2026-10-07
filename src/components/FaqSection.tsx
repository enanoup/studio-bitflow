'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: '¿Qué pasa después de los 6 meses de hosting?',
    answer: 'Puedes renovar el hosting con nosotros o mudarlo a donde prefieras. No hay plazos forzosos ni letras chiquitas.',
  },
  {
    question: '¿Cuánto cuesta renovar el dominio?',
    answer: 'La renovación anual del dominio suele estar entre $300 y $500 MXN al año según la extensión (.com, .mx, etc.).',
  },
  {
    question: '¿El dominio es mío?',
    answer: 'Sí, 100%. Se registra a tu nombre y con tus datos de contacto desde el primer momento.',
  },
  {
    question: '¿Puedo pedir cambios después?',
    answer: 'Tienes hasta 3 rondas de ajustes incluidas antes de la publicación, y 20 días de soporte garantizado tras la entrega.',
  },
  {
    question: '¿Qué necesito para empezar?',
    answer: 'Solo tu logotipo, una breve charla de lo que hace tu negocio y el 50% de anticipo. Nosotros nos encargamos de los textos y el diseño.',
  },
  {
    question: '¿Incluye chatbot?',
    answer: 'Incluye integración directa a WhatsApp mediante botón de un clic y formulario directo a tu correo.',
  },
  {
    question: '¿Cómo pago?',
    answer: 'Aceptamos transferencia bancaria (SPEI) o pago con tarjeta. 50% para iniciar y 50% contra entrega.',
  },
  {
    question: '¿Qué no incluye?',
    answer: 'No incluye campañas pagadas en Meta/Google, ni administración constante de redes sociales ni tienda en línea masiva.',
  },
];

// Partículas veloces para el fondo
const SPARKLES = [
  { id: 1, top: '10%', left: '12%', size: 'w-3 h-3', color: 'bg-electricCyan', speedY: [-350, 400], speedX: [-150, 200], glow: 'shadow-[0_0_18px_#00F0FF]' },
  { id: 2, top: '25%', left: '85%', size: 'w-4 h-4', color: 'bg-terminalLime', speedY: [-450, 500], speedX: [200, -250], glow: 'shadow-[0_0_22px_#108981]' },
  { id: 3, top: '45%', left: '8%', size: 'w-2 h-2', color: 'bg-electricCyan', speedY: [-300, 350], speedX: [-180, 150], glow: 'shadow-[0_0_14px_#00F0FF]' },
  { id: 4, top: '65%', left: '88%', size: 'w-3 h-3', color: 'bg-electricCyan', speedY: [-500, 550], speedX: [220, -200], glow: 'shadow-[0_0_20px_#00F0FF]' },
  { id: 5, top: '80%', left: '15%', size: 'w-4 h-4', color: 'bg-terminalLime', speedY: [-400, 450], speedX: [-160, 220], glow: 'shadow-[0_0_25px_#108981]' },
  { id: 6, top: '90%', left: '75%', size: 'w-2 h-2', color: 'bg-electricCyan', speedY: [-300, 350], speedX: [150, -180], glow: 'shadow-[0_0_12px_#00F0FF]' },
];

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: 'easeOut',
    },
  }),
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-obsidian border-t border-subtleBorder relative overflow-hidden">
      
      {/* CAPA DE DESTELLOS ANIMADOS EN SCROLL */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {SPARKLES.map((sparkle) => {
          const y = useTransform(scrollYProgress, [0, 1], sparkle.speedY);
          const x = useTransform(scrollYProgress, [0, 1], sparkle.speedX);
          const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.1, 0.85, 0.85, 0.1]);

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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ENCABEZADO CON FADE IN */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="font-mono text-[10px] sm:text-xs text-terminalLime px-2.5 sm:px-3 py-1 rounded bg-darkVoid border border-subtleBorder">
            // KNOWLEDGE BASE
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl mt-2 sm:mt-3 text-pureSnow">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        {/* LISTA COMPACTA DE PREGUNTAS EN GRID */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 items-start">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                custom={index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={fadeInVariants}
                className="rounded-xl border border-subtleBorder bg-darkVoid/90 backdrop-blur-md overflow-hidden transition-colors hover:border-electricCyan/40"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 font-display font-bold text-sm sm:text-base text-pureSnow focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-electricCyan shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-1 text-xs sm:text-sm text-techMuted font-body leading-relaxed border-t border-subtleBorder/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}