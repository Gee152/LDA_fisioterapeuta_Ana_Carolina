import { motion } from 'motion/react';

interface Specialty {
  title: string;
  text: string;
}

const specialties: Specialty[] = [
  { 
    title: "Uroginecologia", 
    text: "Incontinência Urinária, Retenção Urinária, Disfunções sexuais, Endometriose." 
  },
  { 
    title: "Obstetrícia", 
    text: "Incontinência Urinária Gestacional, Preparação para o parto, Diástase abdominal." 
  },
  { 
    title: "Coloproctologia", 
    text: "Pós Prostatectomia, Incontinência fecal, Urgência Fecal, Constipação." 
  }
];

export function ExpertsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-[#FAF7F2] rounded-[28px] p-4 sm:p-5 shadow-sm border border-[#F0EAE1] flex flex-col relative select-none"
    >
      <div className="flex items-center justify-between mb-3 px-0.5">
        <h3 className="text-[#4E3F35] font-bold text-[11px] uppercase tracking-[0.2em]">
          Especialidades
        </h3>
      </div>

      <div 
        className="flex gap-3 overflow-x-auto snap-x pb-1 w-full scrollbar-hide px-0.5" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {specialties.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.01 }}
            className="snap-start shrink-0 w-[82%] bg-[#EAE1D7] rounded-[20px] p-4 flex flex-col justify-between"
          >
            <h4 className="text-[13px] font-semibold text-[#2E221B] leading-snug">
              {item.title}
            </h4>
            <p className="text-[11px] italic text-[#6E5D51] leading-relaxed mt-1">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

