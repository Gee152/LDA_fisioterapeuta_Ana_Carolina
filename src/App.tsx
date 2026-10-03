import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { ExpertsCard } from './components/ExpertsCard';
import { WhatsAppCard } from './components/WhatsAppCard';
import { LocationCard } from './components/LocationCard';
import { ReviewsCard } from './components/ReviewsCard';
import { Plans } from './components/Plans';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center sm:py-8 sm:px-4 bg-[#E3D7CC] font-sans">
      <main className="w-full max-w-[425px] h-full sm:h-[920px] sm:max-h-[94vh] bg-[#EFE8E0] shadow-[0_20px_50px_rgba(78,63,53,0.12)] sm:rounded-[40px] overflow-hidden flex flex-col relative border border-[#E4D8CD]/40">
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <Header />

          <div className="px-4 sm:px-4.5 pb-4 space-y-3.5">
            <ServiceCard 
              description="Mentoria individual e acompanhamento a longo prazo."
              buttonText="Agendar agora"
            />

            <ExpertsCard />

            <WhatsAppCard 
              title="ATENDIMENTO RÁPIDO"
              description="Agende via WhatsApp"
              buttonText="CONVERSAR"
            />

            <LocationCard />

            <ReviewsCard />

            <Plans />
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

