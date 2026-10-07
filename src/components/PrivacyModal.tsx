'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
}

export default function PrivacyModal({ isOpen, onClose, onAccept }: PrivacyModalProps) {
  // Previene el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleAccept = () => {
    if (onAccept) onAccept();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop / Fondo oscuro con blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/80 backdrop-blur-md"
          />

          {/* Tarjeta del Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-darkVoid border border-electricCyan/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] z-10 max-h-[85vh] flex flex-col justify-between"
          >
            {/* Encabezado del Modal */}
            <div className="flex items-center justify-between border-b border-subtleBorder/60 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-electricCyan" />
                <h3 className="font-display font-bold text-xl text-pureSnow">
                  Aviso de Privacidad
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-techMuted hover:text-pureSnow hover:bg-subtleBorder/30 transition"
                aria-label="Cerrar aviso de privacidad"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Contenido scrolleable del Aviso Oficial */}
            <div className="overflow-y-auto pr-2 space-y-4 text-techMuted font-body text-xs sm:text-sm leading-relaxed max-h-[50vh] scrollbar-thin scrollbar-thumb-electricCyan/30">
              <p className="font-mono text-[11px] text-electricCyan/80">
                Última actualización: octubre de 2026
              </p>

              <h4 className="font-display font-bold text-pureSnow text-sm sm:text-base mt-2">
                1. Identidad y domicilio del responsable
              </h4>
              <p>
                Mauricio Alonso González Fuentes, persona física, que opera bajo el nombre comercial <strong className="text-pureSnow">Studio Bitflow</strong> (en adelante, &quot;el Responsable&quot;), con domicilio en Gabriel Mancera 1720, Col. Del Valle, C.P. 03100, Ciudad de México, es responsable del tratamiento de tus datos personales, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás normatividad aplicable.
              </p>

              <h4 className="font-display font-bold text-pureSnow text-sm sm:text-base mt-2">
                2. Datos personales que recabamos
              </h4>
              <p>
                A través del formulario de contacto de <span className="text-electricCyan">studiobitflow.com</span>, de correo electrónico o de WhatsApp, podemos recabar:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Nombre</li>
                <li>Correo electrónico</li>
                <li>Giro o actividad de tu negocio</li>
                <li>El contenido del mensaje que nos envíes</li>
                <li>Número de teléfono, si nos escribes por WhatsApp</li>
              </ul>
              <p className="italic text-pureSnow/80">
                No recabamos datos personales sensibles.
              </p>

              <h4 className="font-display font-bold text-pureSnow text-sm sm:text-base mt-2">
                3. Finalidades del tratamiento
              </h4>
              <p className="font-bold text-pureSnow">
                Finalidades necesarias (sin ellas no podemos atenderte):
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Responder a tu solicitud o consulta</li>
                <li>Elaborar y enviarte cotizaciones y propuestas</li>
                <li>Dar seguimiento a la relación comercial y, en su caso, a los servicios contratados</li>
              </ul>
              <p className="font-bold text-pureSnow mt-2">
                Finalidades adicionales (puedes negarte sin que afecte lo anterior):
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Enviarte promociones, ofertas y novedades de Studio Bitflow</li>
              </ul>
              <p>
                Si no deseas que tus datos se traten para las finalidades adicionales, puedes indicarlo al enviar tu información o escribiendo a{' '}
                <a href="mailto:contacto@studiobitflow.com" className="text-electricCyan underline">
                  contacto@studiobitflow.com
                </a>.
              </p>

              <h4 className="font-display font-bold text-pureSnow text-sm sm:text-base mt-2">
                4. Transferencia de datos
              </h4>
              <p>
                Tus datos personales no se venden ni se transfieren a terceros, salvo cuando sea necesario para operar el sitio o los servicios (por ejemplo, proveedores de hosting y de correo electrónico) o cuando lo exija una autoridad competente. Si usas WhatsApp, la plataforma opera con sus propios términos y aviso de privacidad.
              </p>

              <h4 className="font-display font-bold text-pureSnow text-sm sm:text-base mt-2">
                5. Derechos ARCO
              </h4>
              <p>
                Tienes derecho a Acceder a tus datos, Rectificarlos, Cancelarlos u Oponerte a su tratamiento. Para ejercer cualquiera de estos derechos, envía un correo a{' '}
                <a href="mailto:contacto@studiobitflow.com" className="text-electricCyan underline">
                  contacto@studiobitflow.com
                </a>{' '}
                con:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Tu nombre completo</li>
                <li>Una copia de tu identificación oficial</li>
                <li>La descripción clara de los datos y el derecho que deseas ejercer</li>
              </ul>
              <p>Te responderemos en un plazo máximo de 20 días hábiles.</p>

              <h4 className="font-display font-bold text-pureSnow text-sm sm:text-base mt-2">
                6. Revocación del consentimiento
              </h4>
              <p>
                Puedes revocar tu consentimiento para el tratamiento de tus datos en cualquier momento, escribiendo al mismo correo. Ten en cuenta que, en algunos casos, no podremos atender tu solicitud si seguimos necesitando los datos para cumplir obligaciones legales o contractuales.
              </p>

              <h4 className="font-display font-bold text-pureSnow text-sm sm:text-base mt-2">
                7. Uso de cookies
              </h4>
              <p>
                Este sitio puede utilizar cookies y tecnologías similares para su funcionamiento y para analizar el uso del sitio. Puedes desactivarlas desde la configuración de tu navegador.
              </p>

              <h4 className="font-display font-bold text-pureSnow text-sm sm:text-base mt-2">
                8. Cambios al aviso
              </h4>
              <p>
                Este aviso puede modificarse. Cualquier cambio se publicará en esta misma página, con la fecha de actualización.
              </p>

              <h4 className="font-display font-bold text-pureSnow text-sm sm:text-base mt-2">
                9. Contacto
              </h4>
              <p>
                Para dudas sobre este aviso:{' '}
                <a href="mailto:contacto@studiobitflow.com" className="text-electricCyan underline">
                  contacto@studiobitflow.com
                </a>.
              </p>
            </div>

            {/* Footer del Modal / Botón Aceptar */}
            <div className="border-t border-subtleBorder/60 pt-4 mt-4 flex justify-end gap-3">
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto bg-electricCyan text-obsidian font-display font-bold px-6 py-3 rounded-xl text-sm transition hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Aceptar y Continuar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}