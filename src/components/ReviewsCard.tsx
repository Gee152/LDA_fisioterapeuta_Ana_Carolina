import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  stars: number;
  text: string;
}

const reviews: Review[] = [
  { stars: 5, text: "Excelente atendimento, atenciosa e prestativa." },
  { stars: 5, text: "Meu tratamento deu resultado antes do que esperava." },
  { stars: 5, text: "Recomendo a Dra. Ana Carolina, excelente profissional." }
];

export function ReviewsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-[#FAF7F2] rounded-[28px] p-4 sm:p-5 shadow-sm border border-[#F0EAE1] flex flex-col relative select-none"
    >
      <div className="flex items-center justify-between mb-3 px-0.5">
        <h3 className="text-[#2E221B] font-bold text-[11px] uppercase tracking-[0.18em]">
          Avaliações dos Clientes
        </h3>
        <div className="flex text-[#C49A6C] gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} fill="#C49A6C" stroke="#C49A6C" />
          ))}
        </div>
      </div>

      <div 
        className="flex gap-3 overflow-x-auto snap-x pb-1 w-full scrollbar-hide px-0.5" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.01 }}
            className="snap-start shrink-0 w-[82%] bg-[#EAE1D7] rounded-[20px] p-4 flex flex-col justify-center min-h-[64px]"
          >
            <p className="text-[11px] italic text-[#6E5D51] leading-relaxed">
              "{review.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

