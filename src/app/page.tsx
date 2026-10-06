import ScrollySection from '@/components/ScrollySection';
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

export default function Home() {
  return (
    <main className="bg-obsidian text-pureSnow font-body min-h-screen selection:bg-electricCyan selection:text-obsidian">
      
      {/* NAVBAR GLASSMORPHISM */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-obsidian/80 border-b border-subtleBorder/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-electricCyan/40 flex items-center justify-center bg-darkVoid">
              <span className="text-electricCyan font-mono font-bold text-sm">//</span>
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-pureSnow">STUDIO BITFLOW</span>
          </div>
          
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

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen pt-36 pb-20 flex items-center justify-center border-b border-subtleBorder/50 overflow-hidden">
        {/* Glow Central Cyan */}
        <div className="absolute w-[500px] h-[500px] bg-electricCyan/10 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-subtleBorder bg-darkVoid/80 mb-6 font-mono text-xs text-terminalLime">
            <span className="w-2 h-2 rounded-full bg-terminalLime animate-pulse" />
            Para negocios que merecen ser encontrados
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-tight mb-6 text-pureSnow">
            Si tus clientes no te encuentran, <span className="text-electricCyan">para ellos no existes.</span>
          </h1>

          <p className="font-body text-techMuted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Dejas de perder ventas cuando tu negocio tiene un sitio que explica lo que haces y hace que te escriban por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#contacto" 
              className="w-full sm:w-auto bg-electricCyan text-obsidian font-display font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              Quiero que me encuentren
            </a>
            <a 
              href="#paquete" 
              className="w-full sm:w-auto border border-subtleBorder hover:border-electricCyan/50 bg-darkVoid px-8 py-4 rounded-xl text-base font-display text-pureSnow transition-all"
            >
              Ver qué incluye
            </a>
          </div>

          <div className="inline-block p-4 rounded-lg bg-darkVoid/90 border border-subtleBorder text-sm font-mono text-techMuted">
            ⚡ Desde <strong className="text-electricCyan">$5,900 MXN</strong> | Dominio, hosting y correos incluidos
          </div>
        </div>
      </section>

      {/* 2 & 3. DOLOR & TRANSFORMACIÓN (SCROLLYTELLING ANIMADO) */}
      <ScrollySection />

      {/* 4. PAQUETE BUSINESS */}
      <section id="paquete" className="py-32 border-t border-subtleBorder bg-obsidian relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-terminalLime px-3 py-1 rounded bg-darkVoid border border-subtleBorder">
              // PRECIO DE LANZAMIENTO
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl mt-4 text-pureSnow">
              Todo lo que necesitas para salir al aire, sin cabos sueltos.
            </h2>
          </div>

          <div className="p-8 sm:p-12 rounded-2xl border-2 border-electricCyan bg-darkVoid/90 shadow-[0_0_50px_rgba(0,240,255,0.15)] relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 mb-8 border-b border-subtleBorder">
              <div>
                <h3 className="font-display font-bold text-3xl text-pureSnow">Paquete Business</h3>
                <p className="text-techMuted text-sm">Sitio web profesional de una página</p>
              </div>
              <div className="text-left sm:text-right">
                <span className="font-display font-bold text-5xl text-electricCyan">$5,900</span>
                <span className="text-sm text-techMuted font-mono"> MXN</span>
                <p className="text-xs text-techMuted mt-1">Pago único (50% anticipo / 50% al entregar)</p>
              </div>
            </div>

            <ul className="space-y-4 mb-10 text-sm text-pureSnow">
              <li className="flex items-center gap-3">
                <Check className="text-terminalLime w-5 h-5 shrink-0" />
                <span>Sitio web profesional de una página, diseñado para que te contacten</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-terminalLime w-5 h-5 shrink-0" />
                <span>Dominio propio por 1 año, a tu nombre</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-terminalLime w-5 h-5 shrink-0" />
                <span>Hosting gratis por 6 meses</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-terminalLime w-5 h-5 shrink-0" />
                <span>3 correos corporativos (contacto@tunegocio.com)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-terminalLime w-5 h-5 shrink-0" />
                <span>Botón de WhatsApp y formulario de contacto</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-terminalLime w-5 h-5 shrink-0" />
                <span>Certificado SSL (sitio seguro)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-terminalLime w-5 h-5 shrink-0" />
                <span>Hasta 3 rondas de ajustes de diseño</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-terminalLime w-5 h-5 shrink-0" />
                <span>20 días de soporte después de la entrega</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="text-electricCyan w-5 h-5 shrink-0" />
                <span className="text-electricCyan font-semibold">Entrega en 7 a 10 días hábiles</span>
              </li>
            </ul>

            <a 
              href="#contacto" 
              className="block w-full text-center bg-electricCyan text-obsidian font-display font-bold py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] mb-4"
            >
              Quiero que mi negocio se vea como merece
            </a>
            <p className="text-center font-mono text-xs text-techMuted">
              Te respondo personalmente en menos de 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CÓMO TRABAJAMOS (PIPELINE EN 4 PASOS) */}
      <section className="py-32 border-t border-subtleBorder bg-darkVoid">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-electricCyan uppercase tracking-widest">// PIPELINE DE TRABAJO</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl mt-2 text-pureSnow">Sin tecnicismos, sin vueltas. En 4 pasos.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-subtleBorder bg-obsidian hover:border-electricCyan/50 transition-colors">
              <span className="font-mono text-electricCyan text-sm font-bold block mb-2">01 //</span>
              <h3 className="font-display font-bold text-lg mb-2 text-pureSnow">Platicamos</h3>
              <p className="text-techMuted text-xs leading-relaxed">Me cuentas qué haces y a quién quieres atraer.</p>
            </div>
            <div className="p-6 rounded-xl border border-subtleBorder bg-obsidian hover:border-electricCyan/50 transition-colors">
              <span className="font-mono text-electricCyan text-sm font-bold block mb-2">02 //</span>
              <h3 className="font-display font-bold text-lg mb-2 text-pureSnow">Diseñamos</h3>
              <p className="text-techMuted text-xs leading-relaxed">Te muestro cómo se verá tu sitio web.</p>
            </div>
            <div className="p-6 rounded-xl border border-subtleBorder bg-obsidian hover:border-electricCyan/50 transition-colors">
              <span className="font-mono text-electricCyan text-sm font-bold block mb-2">03 //</span>
              <h3 className="font-display font-bold text-lg mb-2 text-pureSnow">Ajustamos</h3>
              <p className="text-techMuted text-xs leading-relaxed">Lo afinamos contigo hasta que te represente perfectamente.</p>
            </div>
            <div className="p-6 rounded-xl border border-subtleBorder bg-obsidian hover:border-electricCyan/50 transition-colors">
              <span className="font-mono text-electricCyan text-sm font-bold block mb-2">04 //</span>
              <h3 className="font-display font-bold text-lg mb-2 text-pureSnow">Publicamos</h3>
              <p className="text-techMuted text-xs leading-relaxed">Tu sitio sale al aire con todo listo para funcionar.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="font-mono text-xs text-techMuted bg-obsidian px-4 py-2 rounded border border-subtleBorder inline-block">
              * El plazo de 7 a 10 días hábiles empieza al recibir el anticipo y tu material (logo, textos y fotos).
            </span>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN FUNNEL / SISTEMA DE VENTAS */}
      <section className="py-32 border-t border-subtleBorder bg-deepSlate relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="font-mono text-xs text-electricCyan uppercase tracking-widest">// NEXT LEVEL INFRASTRUCTURE</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mt-3 mb-6 text-pureSnow">¿Cansado de perseguir clientes uno por uno?</h2>
          
          <p className="text-techMuted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Un sitio bonito te da presencia. Un sistema de ventas te da clientes constantes. Diseñamos el camino completo: cómo te encuentran, cómo los atiendes y cómo se convierten en compradores, para que tu negocio deje de depender de la suerte del mes.
          </p>

          <a 
            href="#contacto" 
            className="inline-block bg-pureSnow text-obsidian font-display font-bold px-8 py-4 rounded-xl text-base transition-all hover:bg-electricCyan hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] mb-4"
          >
            Quiero que mi negocio venda sin perseguir a nadie
          </a>
          <p className="font-mono text-xs text-techMuted">
            Platicamos 30 minutos sin compromiso. Revisamos tu caso y te digo con honestidad si te conviene.
          </p>
        </div>
      </section>

      {/* 7. PREGUNTAS FRECUENTES (FAQ) */}
      <section className="py-32 border-t border-subtleBorder bg-obsidian">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-electricCyan uppercase tracking-widest">// KNOWLEDGE BASE</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 text-pureSnow">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-4">
            <details className="group p-6 rounded-xl border border-subtleBorder bg-darkVoid cursor-pointer [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between font-display font-semibold text-pureSnow group-open:text-electricCyan">
                ¿Qué pasa después de los 6 meses de hosting?
                <ChevronDown className="w-4 h-4 text-electricCyan transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-techMuted text-sm leading-relaxed">
                Renovarlo cuesta $1,200 MXN al año. Te aviso con tiempo para que tu sitio nunca se caiga.
              </p>
            </details>

            <details className="group p-6 rounded-xl border border-subtleBorder bg-darkVoid cursor-pointer [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between font-display font-semibold text-pureSnow group-open:text-electricCyan">
                ¿Cuánto cuesta renovar el dominio?
                <ChevronDown className="w-4 h-4 text-electricCyan transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-techMuted text-sm leading-relaxed">
                Entre $800 y $1,000 MXN al año. El primer año está incluido.
              </p>
            </details>

            <details className="group p-6 rounded-xl border border-subtleBorder bg-darkVoid cursor-pointer [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between font-display font-semibold text-pureSnow group-open:text-electricCyan">
                ¿El dominio es mío?
                <ChevronDown className="w-4 h-4 text-electricCyan transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-techMuted text-sm leading-relaxed">
                Sí, queda registrado a tu nombre.
              </p>
            </details>

            <details className="group p-6 rounded-xl border border-subtleBorder bg-darkVoid cursor-pointer [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between font-display font-semibold text-pureSnow group-open:text-electricCyan">
                ¿Puedo pedir cambios después?
                <ChevronDown className="w-4 h-4 text-electricCyan transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-techMuted text-sm leading-relaxed">
                Durante los 20 días de soporte, sí. Después se cotizan aparte.
              </p>
            </details>

            <details className="group p-6 rounded-xl border border-subtleBorder bg-darkVoid cursor-pointer [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between font-display font-semibold text-pureSnow group-open:text-electricCyan">
                ¿Qué necesito para empezar?
                <ChevronDown className="w-4 h-4 text-electricCyan transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-techMuted text-sm leading-relaxed">
                Tu logo, la información de tu negocio y tus fotos. Si algo te falta, lo resolvemos juntos.
              </p>
            </details>

            <details className="group p-6 rounded-xl border border-subtleBorder bg-darkVoid cursor-pointer [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between font-display font-semibold text-pureSnow group-open:text-electricCyan">
                ¿Incluye chatbot?
                <ChevronDown className="w-4 h-4 text-electricCyan transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-techMuted text-sm leading-relaxed">
                No, es un servicio adicional. Este paquete lleva a tus clientes a WhatsApp o a un formulario.
              </p>
            </details>

            <details className="group p-6 rounded-xl border border-subtleBorder bg-darkVoid cursor-pointer [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between font-display font-semibold text-pureSnow group-open:text-electricCyan">
                ¿Cómo pago?
                <ChevronDown className="w-4 h-4 text-electricCyan transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-techMuted text-sm leading-relaxed">
                Transferencia: 50% de anticipo y 50% al entregar.
              </p>
            </details>

            <details className="group p-6 rounded-xl border border-subtleBorder bg-darkVoid cursor-pointer [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between font-display font-semibold text-pureSnow group-open:text-electricCyan">
                ¿Qué no incluye?
                <ChevronDown className="w-4 h-4 text-electricCyan transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-techMuted text-sm leading-relaxed">
                Más de una página, tienda en línea y chatbot. Se cotizan aparte.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 8. CIERRE & CONTACTO */}
      <section id="contacto" className="py-32 border-t border-subtleBorder bg-darkVoid relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-pureSnow">
              Tu negocio ya hace bien su parte. Falta que el mundo lo vea.
            </h2>
            <p className="text-techMuted mt-4">Cuéntame qué haces y te digo cómo lo llevaría a línea.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* OPCIÓN WHATSAPP DIRECTO */}
            <div className="p-8 rounded-2xl border border-subtleBorder bg-obsidian text-center flex flex-col justify-center items-center">
              <span className="font-mono text-xs text-terminalLime block mb-2">// RESPUESTA INMEDIATA</span>
              <h3 className="font-display font-bold text-2xl text-pureSnow mb-6">Escríbeme directo por WhatsApp</h3>
              <a 
                href="https://wa.me/tu-numero-aqui" 
                target="_blank" 
                className="w-full bg-terminalLime text-pureSnow font-display font-bold py-4 rounded-xl transition hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Escribir por WhatsApp
              </a>
            </div>

            {/* FORMULARIO DE CONTACTO */}
            <form className="p-8 rounded-2xl border border-subtleBorder bg-obsidian space-y-4">
              <div>
                <label className="font-mono text-xs text-techMuted block mb-1">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full bg-darkVoid border border-subtleBorder rounded-lg p-3 text-sm text-pureSnow focus:border-electricCyan focus:outline-none"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-techMuted block mb-1">Correo</label>
                <input 
                  type="email" 
                  placeholder="tu@correo.com" 
                  className="w-full bg-darkVoid border border-subtleBorder rounded-lg p-3 text-sm text-pureSnow focus:border-electricCyan focus:outline-none"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-techMuted block mb-1">Giro del negocio</label>
                <input 
                  type="text" 
                  placeholder="Ej. Odontología, Arquitectura..." 
                  className="w-full bg-darkVoid border border-subtleBorder rounded-lg p-3 text-sm text-pureSnow focus:border-electricCyan focus:outline-none"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-techMuted block mb-1">Mensaje</label>
                <textarea 
                  rows={3} 
                  placeholder="Cuéntame de tu proyecto..." 
                  className="w-full bg-darkVoid border border-subtleBorder rounded-lg p-3 text-sm text-pureSnow focus:border-electricCyan focus:outline-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-electricCyan text-obsidian font-display font-bold py-3.5 rounded-lg text-sm hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Quiero empezar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-subtleBorder bg-obsidian text-center font-mono text-xs text-techMuted">
        © Studio Bitflow // All Rights Reserved [STATUS: 200 OK]
      </footer>

    </main>
  );
}