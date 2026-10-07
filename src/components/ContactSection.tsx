'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { MessageSquare, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import PrivacyModal from '@/components/PrivacyModal';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business_type: '',
    message: '',
  });

  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sanitizeInput = (str: string) => {
    return str.replace(/[<>{}]/g, '');
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = 'El nombre no debe contener números ni símbolos.';
    } else if (formData.name.length > 60) {
      newErrors.name = 'El nombre no puede exceder 60 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Introduce un correo electrónico válido.';
    } else if (formData.email.length > 80) {
      newErrors.email = 'El correo es demasiado largo.';
    }

    if (!formData.business_type.trim()) {
      newErrors.business_type = 'El giro del negocio es obligatorio.';
    } else if (formData.business_type.length > 80) {
      newErrors.business_type = 'Este campo no puede exceder 80 caracteres.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Cuéntanos un poco más (mínimo 10 caracteres).';
    } else if (formData.message.length > 500) {
      newErrors.message = 'El mensaje no puede exceder 500 caracteres.';
    }

    if (!acceptedPrivacy) {
      newErrors.privacy = 'Debes aceptar el aviso de privacidad para continuar.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const cleanValue = sanitizeInput(value);

    setFormData((prev) => ({ ...prev, [name]: cleanValue }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xbgddyyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', business_type: '', message: '' });
        setAcceptedPrivacy(false);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <section id="contacto" className="py-28 border-t border-subtleBorder bg-darkVoid relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInVariants}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-pureSnow">
              Tu negocio ya hace bien su parte. Falta que el mundo lo vea.
            </h2>
            <p className="text-techMuted mt-4">Cuéntame qué haces y te digo cómo lo llevaría a línea.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
            <motion.div 
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInVariants}
              className="p-8 rounded-2xl border border-subtleBorder bg-obsidian text-center flex flex-col justify-center items-center shadow-lg"
            >
              <span className="font-mono text-xs text-terminalLime block mb-2">RESPUESTA DIRECTA</span>
              <h3 className="font-display font-bold text-2xl text-pureSnow mb-6">Escríbeme directo por WhatsApp</h3>
              <a 
                href="https://wa.me/525554321875?text=Hola%20Studio%20Bitflow%2C%20vi%20su%20sitio%20web%20y%20me%20interesa%20el%20Paquete%20Business%20para%20mi%20negocio.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-terminalLime text-pureSnow font-display font-bold py-4 rounded-xl transition hover:shadow-[0_0_30px_rgba(16,137,129,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Escribir por WhatsApp
              </a>
            </motion.div>

            <motion.div 
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInVariants}
              className="p-8 rounded-2xl border border-subtleBorder bg-obsidian shadow-lg flex flex-col justify-center"
            >
              {status === 'success' ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-terminalLime/20 text-terminalLime rounded-full flex items-center justify-center mx-auto border border-terminalLime/40 shadow-[0_0_30px_rgba(16,137,129,0.3)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-pureSnow">¡Mensaje enviado con éxito!</h3>
                  <p className="font-body text-sm text-techMuted leading-relaxed">
                    Gracias por escribirnos. Hemos recibido tus datos y te responderemos personalmente a tu correo en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-xs font-mono text-electricCyan underline hover:text-pureSnow transition"
                  >
                    // Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className="font-mono text-xs text-techMuted block mb-1">Nombre</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre" 
                      className={`w-full bg-darkVoid border ${
                        errors.name ? 'border-red-500/80' : 'border-subtleBorder'
                      } rounded-lg p-3 text-sm text-pureSnow focus:border-electricCyan focus:outline-none transition`}
                    />
                    {errors.name && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="font-mono text-xs text-techMuted block mb-1">Correo</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com" 
                      className={`w-full bg-darkVoid border ${
                        errors.email ? 'border-red-500/80' : 'border-subtleBorder'
                      } rounded-lg p-3 text-sm text-pureSnow focus:border-electricCyan focus:outline-none transition`}
                    />
                    {errors.email && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="font-mono text-xs text-techMuted block mb-1">Giro del negocio</label>
                    <input 
                      type="text" 
                      name="business_type"
                      value={formData.business_type}
                      onChange={handleChange}
                      placeholder="Ej. Odontología, Arquitectura..." 
                      className={`w-full bg-darkVoid border ${
                        errors.business_type ? 'border-red-500/80' : 'border-subtleBorder'
                      } rounded-lg p-3 text-sm text-pureSnow focus:border-electricCyan focus:outline-none transition`}
                    />
                    {errors.business_type && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.business_type}</p>}
                  </div>

                  <div>
                    <label className="font-mono text-xs text-techMuted block mb-1">
                      Mensaje <span className="text-[10px] opacity-60">({formData.message.length}/500)</span>
                    </label>
                    <textarea 
                      rows={3} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame de tu proyecto..." 
                      className={`w-full bg-darkVoid border ${
                        errors.message ? 'border-red-500/80' : 'border-subtleBorder'
                      } rounded-lg p-3 text-sm text-pureSnow focus:border-electricCyan focus:outline-none transition`}
                    />
                    {errors.message && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* CASILLA DE AVISO DE PRIVACIDAD */}
                  <div>
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="privacy-checkbox"
                        checked={acceptedPrivacy}
                        onChange={(e) => {
                          setAcceptedPrivacy(e.target.checked);
                          if (errors.privacy) {
                            setErrors((prev) => ({ ...prev, privacy: '' }));
                          }
                        }}
                        className="mt-0.5 w-4 h-4 rounded border-subtleBorder bg-darkVoid text-electricCyan focus:ring-0 cursor-pointer accent-electricCyan shrink-0"
                      />
                      <label htmlFor="privacy-checkbox" className="text-xs text-techMuted cursor-pointer leading-snug">
                        He leído y acepto el{' '}
                        <button
                          type="button"
                          onClick={() => setIsPrivacyOpen(true)}
                          className="text-electricCyan underline hover:text-pureSnow transition font-medium"
                        >
                          aviso de privacidad
                        </button>
                      </label>
                    </div>
                    {errors.privacy && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.privacy}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-electricCyan text-obsidian font-display font-bold py-3.5 rounded-lg text-sm hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Quiero empezar
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 justify-center text-red-400 font-mono text-xs mt-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Ocurrió un problema de red. Escríbenos por WhatsApp.</span>
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal Pop-up para el formulario */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        onAccept={() => setAcceptedPrivacy(true)}
      />
    </>
  );
}