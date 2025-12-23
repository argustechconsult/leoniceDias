
import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="p-8 bg-dark-accent rounded-xl border border-white/5 hover:border-[#d4af37]/50 transition-all group">
    <div className="mb-6 p-4 rounded-lg bg-black inline-block group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
    <div className="mt-8">
      <a href="#contato" className="text-sm font-bold gold-text uppercase tracking-widest flex items-center group-hover:underline">
        Falar sobre meu caso
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'Direito Cível',
      description: 'Defesa e orientação em contratos, responsabilidade civil, danos morais, direitos do consumidor e questões de vizinhança.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Direito Previdenciário',
      description: 'Especialista em pedidos de aposentadoria, auxílio-doença, pensão por morte, BPC/LOAS e revisões de benefícios junto ao INSS.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Direito Trabalhista',
      description: 'Atuação em rescisões, horas extras, reconhecimento de vínculo, danos morais e assédio no ambiente de trabalho.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Especialidades <span className="gold-text">Jurídicas</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Oferecemos uma advocacia focada na resolução eficiente de conflitos, priorizando sempre a transparência e o bem-estar do cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* <div className="mt-16 flex justify-center">
           <img src="info.jpg" alt="Serviços" className="max-w-md w-full rounded-xl border border-[#d4af37]/20 shadow-xl opacity-80" />
        </div> */}
      </div>
    </section>
  );
};

export default Services;
