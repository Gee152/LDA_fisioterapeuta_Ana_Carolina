import { MapPin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import imgPhysio from '@/assets/6d718340-4c23-4811-8392-336b4e74bd65_WhatsApp-Image-2024-03-20-at-23.49.32.webp';
import { BotanicalBranchTopLeft, OrganicWavesTopRight } from './DecorativeAssets';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 pt-5 pb-3 text-center flex flex-col items-center relative overflow-hidden select-none"
    >
      {/* Decorative botanical branch on top left */}
      <BotanicalBranchTopLeft className="absolute -top-1 -left-1 w-32 sm:w-36 h-40 sm:h-44 z-0 pointer-events-none" />
      
      {/* Decorative organic watercolor curves on top right */}
      <OrganicWavesTopRight className="absolute -top-1 -right-1 w-36 sm:w-40 h-36 sm:h-40 z-0 pointer-events-none" />

      {/* Profile avatar with delicate double-ring border */}
      <div className="relative mb-3.5 z-10 mt-2">
        <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-[#D5C2B0] via-[#E8DDD2] to-[#C8B3A0] shadow-[0_6px_18px_rgba(78,63,53,0.15)]">
          <div className="p-[2px] rounded-full bg-[#EFE8E0]">
            <div className="w-[84px] h-[84px] rounded-full overflow-hidden border border-white/70 bg-[#E6DACF]">
              <img 
                src={imgPhysio} 
                alt="Dra. Ana Carolina Silva Quiros" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Doctor Name */}
      <h1 className="text-[#2E221B] font-semibold text-[22px] sm:text-[23px] tracking-tight leading-tight z-10">
        Dra. Ana Carolina Silva Quiros
      </h1>
      
      {/* Subtitle / Specialties */}
      <p className="text-[#6E5D51] text-[12px] font-normal tracking-wide mt-1 mb-3.5 z-10">
        Doula e Fisioterapeuta Pélvica
      </p>

      {/* Round action buttons: Instagram & Location */}
      <div className="flex items-center justify-center gap-3 z-10">
        <a 
          href="https://www.instagram.com/carolquirosfisio/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram da Dra. Ana Carolina"
          className="w-9 h-9 rounded-full bg-[#B59E8D] hover:bg-[#A8907E] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
        >
          <Instagram size={17} strokeWidth={1.8} />
        </a>

        <a 
          href="https://maps.app.goo.gl/8Q1ABz64sZdkGmny5" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Localização no Google Maps"
          className="w-9 h-9 rounded-full bg-[#4E3F35] hover:bg-[#3F3229] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
        >
          <MapPin size={17} strokeWidth={1.8} />
        </a>
      </div>
    </motion.header>
  );
}

