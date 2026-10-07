'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

import ScrollySection from '@/components/ScrollySection';
import HeroBackground from '@/components/HeroBackground';
import PackageSection from '@/components/PackageSection';
import StepsSection from '@/components/StepsSection';
import InfrastructureSection from '@/components/InfrastructureSection';
import ClientsMarquee from '@/components/ClientsMarquee';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import PrivacyModal from '@/components/PrivacyModal';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

export default function Home() {
  const [isFooterPrivacyOpen, setIsFooterPrivacyOpen] = useState<boolean>(false);

  return (
    <main className="bg-obsidian text-pureSnow font-body min-h-screen selection:bg-electricCyan selection:text-obsidian">
      
      {/* NAVBAR GLASSMORPHISM RESPONSIVO */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-obsidian/80 border-b border-subtleBorder/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
          
          {/* LOGO DE IMAGEN */}
          <a href="#" className="flex items-center shrink-0">
            <img 
              src="/images/Logo_Bitflow_Horiz_PNG.png" 
              alt="Studio Bitflow Logo" 
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>
          
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a 
              href="#contacto" 
              className="bg-electricCyan text-obsidian font-display font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded text-xs sm:text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,240,255,0.4)] text-center leading-tight"
            >
              Quiero cotizar mi proyecto
            </a>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION CON CARRUSEL & PARALLAX */}
      <section className="relative min-h-screen pt-32 sm:pt-36 pb-20 flex items-center justify-center border-b border-subtleBorder/50 overflow-hidden">
        
        {/* Fondo interactivo animado */}
        <HeroBackground />

        {/* Glow de acento cyber */}
        <div className="absolute w-[500px] h-[500px] bg-electricCyan/10 rounded-full blur-[140px] pointer-events-none z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          
          {/* BARRA DE OFERTA DEL HERO */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-electricCyan/40 bg-darkVoid/90 backdrop-blur-md mb-8 font-mono text-xs text-electricCyan shadow-lg">
            <span>🔥 Precio de lanzamiento vigente hasta el 31 de octubre de 2026</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6 text-pureSnow drop-shadow-md">
            Tu negocio merece un sitio web que{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electricCyan via-cyan-400 to-indigo-400">
              realmente venda.
            </span>
          </h1>

          <p className="font-body text-techMuted text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-light drop-shadow">
            Diseño web profesional, infraestructura de alto rendimiento y estrategia orientada a conversión. Sin enredos técnicos. Entregado en 7 a 10 días hábiles.
          </p>

          {/* BLOQUE DE PRECIO DEL HERO */}
          <div className="flex flex-col items-center justify-center mb-10">
            <motion.div 
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  '0px 0px 15px rgba(0,240,255,0.15)',
                  '0px 0px 30px rgba(0,240,255,0.35)',
                  '0px 0px 15px rgba(0,240,255,0.15)'
                ]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="inline-flex flex-col items-center p-5 rounded-2xl bg-darkVoid/90 backdrop-blur-md border border-electricCyan max-w-md w-full shadow-2xl"
            >
              <p className="text-xs sm:text-sm text-pureSnow/90 font-mono mb-1">
                ⚡ Proyectos similares desde $10,900 MXN. Precio de lanzamiento:
              </p>
              <div className="my-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-electricCyan font-mono tracking-tight">
                  $5,900 MXN
                </span>
              </div>
              <p className="text-[11px] text-techMuted/70 font-light mt-1">
                Menos de $500 al mes durante el primer año.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/525554321875?text=Hola%20Studio%20Bitflow%2C%20vi%20su%20sitio%20web%20y%20me%20interesa%20el%20Paquete%20Business%20para%20mi%20negocio.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-electricCyan text-obsidian font-display font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] text-center"
            >
              Aprovechar oferta por WhatsApp
            </a>
            <a 
              href="#paquete" 
              className="w-full sm:w-auto border border-subtleBorder/80 hover:border-electricCyan/50 bg-darkVoid/80 backdrop-blur-md px-8 py-4 rounded-xl text-base font-display text-pureSnow transition-all text-center"
            >
              Ver qué incluye
            </a>
          </div>

        </div>
      </section>

      {/* CARRUSEL DE CLIENTES */}
      <ClientsMarquee />

      {/* DOLOR & TRANSFORMACIÓN */}
      <ScrollySection />

      {/* PAQUETE BUSINESS */}
      <PackageSection />

      {/* CÓMO TRABAJAMOS */}
      <StepsSection />

      {/* INFRAESTRUCTURA Y SISTEMA */}
      <InfrastructureSection />

      {/* PREGUNTAS FRECUENTES */}
      <FaqSection />

      {/* CIERRE & CONTACTO */}
      <ContactSection />

      {/* FOOTER ANIMADO CON ENLACE DE PRIVACIDAD */}
      <footer className="py-8 border-t border-subtleBorder bg-obsidian text-center font-mono text-xs text-techMuted overflow-hidden">
        <motion.div 
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="flex justify-center pt-6 pb-12"
        >
          <img 
            src="/images/Logo_Bitflow_PNG.png" 
            alt="Studio Bitflow Logo" 
            className="h-40 w-auto rounded-xl object-contain border border-subtleBorder/60 shadow-lg"
          />
        </motion.div>

        <motion.div
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6"
        >
          <p>© Studio Bitflow // Todos los derechos reservados</p>
          <span className="hidden sm:inline text-subtleBorder">•</span>
          <button
            type="button"
            onClick={() => setIsFooterPrivacyOpen(true)}
            className="text-techMuted hover:text-electricCyan underline transition cursor-pointer"
          >
            Aviso de privacidad
          </button>
        </motion.div>
      </footer>

      {/* Modal Pop-up para el Footer */}
      <PrivacyModal
        isOpen={isFooterPrivacyOpen}
        onClose={() => setIsFooterPrivacyOpen(false)}
      />

    </main>
  );
}