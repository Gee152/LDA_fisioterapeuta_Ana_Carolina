import { motion } from 'motion/react';
import { ArrowRight, Feather } from 'lucide-react';
import { BotanicalBranchCard } from './DecorativeAssets';

interface ServiceCardProps {
  title?: string;
  description: string;
  image?: string;
  buttonText: string;
  isPrimary?: boolean;
}

export function ServiceCard({ description, buttonText }: ServiceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="bg-[#4E3F35] rounded-[28px] p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-[0_10px_25px_rgba(78,63,53,0.18)] cursor-pointer group select-none min-h-[145px]"
    >
      {/* Botanical etched illustration on the right */}
      <BotanicalBranchCard className="absolute -right-2 -bottom-2 w-40 h-40 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 w-[78%]">
        {/* Header Badge */}
        <div className="flex items-center gap-1.5 text-[#F1E9E2]">
          <Feather size={12} className="rotate-45" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
            Combos e Serviços
          </span>
        </div>

        {/* Description text */}
        <p className="text-[#D5C7BB] text-[12px] font-normal leading-relaxed mt-2 mb-4">
          {description}
        </p>

        {/* CTA Button */}
        <a 
          href="https://wa.me/558196981869" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#EFE8E1] hover:bg-white text-[#4E3F35] text-[11px] font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-sm hover:gap-2 active:scale-95"
        >
          <span>{buttonText}</span>
          <ArrowRight size={13} strokeWidth={2} />
        </a>
      </div>
    </motion.div>
  );
}

