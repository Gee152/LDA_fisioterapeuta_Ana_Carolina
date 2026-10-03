import { MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export function LocationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="bg-[#FAF7F2] rounded-[28px] p-4 sm:p-5 shadow-sm border border-[#F0EAE1] flex items-center justify-between w-full select-none"
    >
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 bg-[#EAE1D7] rounded-full flex items-center justify-center shrink-0 shadow-xs">
          <MapPin size={18} className="text-[#4E3F35]" strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-[#2E221B] font-bold text-[11px] uppercase tracking-[0.18em] leading-tight">
            Nossa Localização
          </h3>
          <p className="text-[#6E5D51] text-[11px] mt-0.5 leading-snug">
            Venha nos visitar
          </p>
        </div>
      </div>

      <a 
        href="https://maps.app.goo.gl/8Q1ABz64sZdkGmny5" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#EAE1D7] hover:bg-[#DFD5CA] active:scale-95 text-[#4E3F35] text-[11px] font-semibold flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap"
      >
        <Send size={12} className="rotate-45" strokeWidth={2} />
        <span>Mapa</span>
      </a>
    </motion.div>
  );
}

