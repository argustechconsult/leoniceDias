
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-12 min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full border border-[#d4af37]/50 text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-2">
              OAB/RJ 209.983
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
              Protegendo seus <br />
              <span className="gold-text">direitos</span> com <br />
              ética e empatia.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Dra. Leonice Dias oferece suporte jurídico especializado em causas Cíveis, Previdenciárias e Trabalhistas, transformando desafios legais em soluções humanas.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => scrollToSection('contato')}
                className="px-10 py-4 gold-gradient text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all uppercase tracking-widest cursor-pointer border-none"
              >
                Conte sua história
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="px-10 py-4 border border-white/20 hover:bg-white/5 transition-all text-white font-bold rounded-lg uppercase tracking-widest cursor-pointer"
              >
                Conheça os serviços
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-[#d4af37]/20 rounded-2xl transform rotate-2 -z-10"></div>
              <div className="absolute -inset-4 border-2 border-[#d4af37]/10 rounded-2xl transform -rotate-2 -z-10"></div>
              
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#d4af37]/30 shadow-2xl bg-zinc-900">
                <img 
                  src="hero.jpg" 
                  alt="Dra. Leonice Dias" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <p className="text-white font-serif text-lg md:text-xl italic leading-snug">
                    "Cada direito respeitado é uma vitória para quem confia na justiça." ⚖️✨
                  </p>
                  <div className="flex items-center space-x-3 mt-4">
                    <div className="h-px w-8 bg-[#d4af37]"></div>
                    <p className="text-[#d4af37] text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Leonice Dias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
