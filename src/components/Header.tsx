import { MapPin, Instagram, Facebook, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 pt-10 pb-4 text-center flex flex-col items-center bg-gradient-to-b from-[#67E8F9]/20 to-transparent"
    >
      <div className="relative mb-3 group">
        <div className="w-20 h-20 bg-[#F4C2C2] rounded-full border-4 border-white shadow-lg flex items-center justify-center overflow-hidden z-10 relative">
          <img 
            src="src/assets/6d718340-4c23-4811-8392-336b4e74bd65_WhatsApp-Image-2024-03-20-at-23.49.32.webp" 
            alt="Casa do Pet Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h1 className="text-[#00000] font-bold text-2xl tracking-tight" style={{ fontFamily: "'Arial Black', sans-serif" }}>
        Dra. Ana Carolina Quiros Silva 
      </h1>
      
      <p className="text-[#1F2937] text-xs font-medium opacity-80 mt-1 mb-4">
        Cuidando do seu melhor amigo com amor e dedicação.
      </p>

      <div className="flex gap-3 mt-1">
        {[
          { icon: Instagram, href: 'https://www.instagram.com/carolquirosfisio/', blank: true, color: 'text-pink-500' },
          //{ icon: Facebook, href: '#', blank: true, color: 'text-blue-600' },
          //{ icon: Phone, href: '#', blank: true, color: 'text-[#25D366]' },
          { icon: MapPin, href: 'https://maps.app.goo.gl/8Q1ABz64sZdkGmny5', blank: true, color: 'text-[#1E3A8A]' }
        ].map((Social, index) => (
          <a 
            key={index} 
            href={Social.href}
            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 hover:scale-110 transition-transform duration-300"
          >
            <Social.icon size={16} className={Social.color} />
          </a>
        ))}
      </div>
    </motion.div>
  );
}
