import { motion } from 'motion/react';

export function Plans() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-white rounded-[32px] p-4 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-[#1E3A8A] font-bold text-xs uppercase">Planos atendimdos</h3>
      </div>

      <div className="flex gap-3 overflow-x-auto snap-x pb-2 w-full scrollbar-hide px-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <img src="src/assets/image.png" alt="Planos atendindos" />
      </div>
    </motion.div>
  );
}
