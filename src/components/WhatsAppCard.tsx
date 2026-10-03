import { WhatsAppIcon } from './DecorativeAssets';
import { motion } from 'motion/react';

interface WhatsAppCardProps {
  title: string;
  description: string;
  buttonText: string;
}

export function WhatsAppCard({ title, description, buttonText }: WhatsAppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="bg-[#A48976] rounded-[28px] p-4 sm:p-5 flex items-center justify-between shadow-[0_6px_20px_rgba(164,137,118,0.22)] w-full select-none"
    >
      <div className="flex items-center gap-3.5 relative z-10">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform">
          <WhatsAppIcon className="w-6 h-6" color="#A48976" />
        </div>
        <div>
          <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.18em] leading-tight">
            {title}
          </h3>
          <p className="text-white/90 text-[11px] mt-0.5 leading-snug">
            {description}
          </p>
        </div>
      </div>

      <a 
        href="https://wa.me/558196981869" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-white/70 hover:bg-white/15 active:scale-95 text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase transition-all duration-300 whitespace-nowrap ml-2"
      >
        {buttonText}
      </a>
    </motion.div>
  );
}

