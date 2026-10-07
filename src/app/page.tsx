'use client';
import { motion, Variants } from 'framer-motion';

import ScrollySection from '@/components/ScrollySection';
import HeroBackground from '@/components/HeroBackground';
import PackageSection from '@/components/PackageSection';
import StepsSection from '@/components/StepsSection';
import InfrastructureSection from '@/components/InfrastructureSection';
import ClientsMarquee from '@/components/ClientsMarquee';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';

import { 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Send, 
  HelpCircle, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Zap,
  ChevronDown
} from 'lucide-react';

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
  return (
    <main className="bg-obsidian text-pureSnow font-body min-h-screen selection:bg-electricCyan selection:text-obsidian">
      
     {/* NAVBAR GLASSMORPHISM */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-obsidian/80 border-b border-subtleBorder/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO DE IMAGEN */}
          <a href="#" className="flex items-center">
            <img 
              src="/images/Logo_Bitflow_Horiz_PNG.png" 
              alt="Studio Bitflow Logo" 
              className="h-14 w-auto object-contain"
            />
          </a>
          
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block font-mono text-xs text-terminalLime border border-terminalLime/30 px-3 py-1 rounded bg-darkVoid">
              // STATUS: 200 OK
            </span>
            <a 
              href="#contacto" 
              className="bg-electricCyan text-obsidian font-display font-semibold px-5 py-2.5 rounded text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,240,255,0.4)]"
            >
              Quiero que me encuentren
            </a>
          </div>
        </div>
      </header>

{/* 1. HERO SECTION CON CARRUSEL & PARALLAX */}
      <section className="relative min-h-screen pt-36 pb-20 flex items-center justify-center border-b border-subtleBorder/50 overflow-hidden">
        
        {/* Fondo interactivo animado */}
        <HeroBackground />

        {/* Glow de acento cyber */}
        <div className="absolute w-[500px] h-[500px] bg-electricCyan/10 rounded-full blur-[140px] pointer-events-none z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-subtleBorder bg-darkVoid/90 backdrop-blur-md mb-6 font-mono text-xs text-terminalLime shadow-lg">
            <span className="w-2 h-2 rounded-full bg-terminalLime animate-pulse" />
            Para negocios que merecen ser encontrados
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-tight mb-6 text-pureSnow drop-shadow-md">
            Si tus clientes no te encuentran, <span className="text-electricCyan">para ellos no existes.</span>
          </h1>

          <p className="font-body text-techMuted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
            Dejas de perder ventas cuando tu negocio tiene un sitio que explica lo que haces y hace que te escriban por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#contacto" 
              className="w-full sm:w-auto bg-electricCyan text-obsidian font-display font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.6)]"
            >
              Quiero que me encuentren
            </a>
            <a 
              href="#paquete" 
              className="w-full sm:w-auto border border-subtleBorder/80 hover:border-electricCyan/50 bg-darkVoid/80 backdrop-blur-md px-8 py-4 rounded-xl text-base font-display text-pureSnow transition-all"
            >
              Ver qué incluye
            </a>
          </div>

          <div className="inline-block p-4 rounded-lg bg-darkVoid/90 backdrop-blur-md border border-subtleBorder text-sm font-mono text-techMuted shadow-xl">
            ⚡ Desde <strong className="text-electricCyan">$5,900 MXN</strong> | Dominio, hosting y correos incluidos
          </div>
        </div>
      </section>

      {/* CARRUSEL DE CLIENTES (PRUEBA SOCIAL DELGADA) */}
<ClientsMarquee />

      {/* 2 & 3. DOLOR & TRANSFORMACIÓN (SCROLLYTELLING ANIMADO) */}
      <ScrollySection />


{/* 4. PAQUETE BUSINESS ANIMADO */}
      <PackageSection />

      {/* 5. CÓMO TRABAJAMOS (PIPELINE EN 4 PASOS) */}
     <StepsSection />

      {/* 6. SECCIÓN FUNNEL / SISTEMA DE VENTAS */}
    <InfrastructureSection />

      {/* 7. PREGUNTAS FRECUENTES (FAQ) */}
     <FaqSection />
      {/* 8. CIERRE & CONTACTO */}
     <ContactSection />

     {/* FOOTER ANIMADO */}
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

        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
        >
          © Studio Bitflow // All Rights Reserved [STATUS: 200 OK]
        </motion.p>
      </footer>

    </main>
  );
}