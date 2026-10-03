//@ts-ignore
import logoKonoha from '@/assets/8987bd130641623.6184473f5678a.png';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full text-center pt-3 pb-6 px-6 select-none">
      <div className="flex justify-center gap-1.5 mb-3">
        <div className="w-1.5 h-1.5 bg-[#4E3F35]/25 rounded-full" />
        <div className="w-1.5 h-1.5 bg-[#4E3F35]/25 rounded-full" />
        <div className="w-1.5 h-1.5 bg-[#4E3F35]/25 rounded-full" />
      </div>

      <div className="flex flex-col items-center justify-center gap-1 text-[10px] text-[#6E5D51]/70">
        <p className="text-[9px] font-medium uppercase tracking-[0.18em]">
          © {year} Dra. Ana Carolina Silva Quiros
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-0.5 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[8px] uppercase tracking-[0.15em]">
            Desenvolvido por KonohaTech
          </span>
          <img 
            src={logoKonoha} 
            alt="KonohaTech" 
            className="w-3.5 h-3.5 object-contain" 
            width={14} 
            height={14} 
            loading="lazy" 
            decoding="async" 
          />
        </div>
      </div>

      {/* Camada de Rastreamento Semântico para Agentes de IA e Rastreadores (Invisível na UI, 100% crawlable) */}
      <nav aria-label="Rastreamento IA e Documentação Semântica" className="sr-only">
        <a href={`${import.meta.env.BASE_URL}llms.txt`} rel="help">
          Manifesto IA e Protocolo RAG (llms.txt)
        </a>
        <a href={`${import.meta.env.BASE_URL}docs/sobre.md`} rel="documentation">
          Base de Conhecimento Institucional
        </a>
        <a href={`${import.meta.env.BASE_URL}docs/servicos.md`} rel="documentation">
          Documentação de Especialidades e Serviços
        </a>
        <a href={`${import.meta.env.BASE_URL}docs/cases.md`} rel="documentation">
          Casos Clínicos e Metodologia Terapêutica
        </a>
        <a href={`${import.meta.env.BASE_URL}docs/biolinks.md`} rel="documentation">
          Hub de BioLinks e Agendamento Rápido
        </a>
        <a href={`${import.meta.env.BASE_URL}docs/contato.md`} rel="documentation">
          Dados Cadastrais, Localização e Convênios
        </a>
      </nav>
    </footer>
  );
}

