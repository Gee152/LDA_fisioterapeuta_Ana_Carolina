import { motion } from 'motion/react';

export function Plans() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-[#FAF7F2] rounded-[28px] p-4 sm:p-5 shadow-sm border border-[#F0EAE1] flex flex-col relative select-none"
    >
      <div className="flex items-center justify-between mb-3 px-0.5">
        <h3 className="text-[#2E221B] font-bold text-[11px] uppercase tracking-[0.18em]">
          Planos Atendidos
        </h3>
      </div>

      <div className="w-full flex items-center justify-between px-1 py-1 gap-1 sm:gap-2">
        {/* Bradesco Saúde */}
        <div className="flex items-center gap-1 shrink-0 opacity-80 hover:opacity-100 transition-opacity">
          <div className="w-5 h-5 rounded bg-[#4E3F35] flex items-center justify-center text-white shrink-0">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <rect x="4" y="6" width="3" height="12" rx="1" />
              <rect x="10" y="4" width="3" height="14" rx="1" />
              <rect x="16" y="9" width="3" height="9" rx="1" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[9px] font-bold text-[#32251E]">Bradesco</span>
            <span className="text-[7px] text-[#6E5D51] font-medium">Saúde</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-5 bg-[#D8CCC0]" />

        {/* SulAmérica */}
        <div className="flex flex-col items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 60 8" fill="none" className="w-10 h-1.5 text-[#54443B]">
            <path d="M 2 5 Q 15 1, 30 5 T 58 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="text-[9px] font-semibold text-[#32251E] tracking-tight leading-none mt-0.5">
            SulAmérica
          </span>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-5 bg-[#D8CCC0]" />

        {/* Unimed */}
        <div className="flex items-center gap-0.5 shrink-0 opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-[9px] font-bold text-[#32251E] tracking-tight">Unimed</span>
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-[#4E3F35]">
            <path d="M8 2 L5 8 L7 8 L4 13 L12 13 L9 8 L11 8 Z" />
          </svg>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-5 bg-[#D8CCC0]" />

        {/* CASSI */}
        <div className="flex items-center relative shrink-0 opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-extrabold text-[#32251E] tracking-wider">
            CASS
          </span>
          <span className="relative text-[10px] font-extrabold text-[#32251E]">
            I
            <span className="absolute -top-1 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#C49A6C]" />
          </span>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-5 bg-[#D8CCC0]" />

        {/* GEAP */}
        <div className="flex items-center gap-1 shrink-0 opacity-80 hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 18 18" fill="none" className="w-3.5 h-3.5">
            <circle cx="8" cy="9" r="6" stroke="#4E3F35" strokeWidth="2" />
            <circle cx="10" cy="8" r="4" fill="#C49A6C" />
          </svg>
          <span className="text-[9px] font-extrabold text-[#32251E] tracking-tight">
            GEAP
          </span>
        </div>
      </div>
    </motion.div>
  );
}

