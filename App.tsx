
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';
import { SubmissionStatus } from './types';

const App: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>(SubmissionStatus.IDLE);

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <section id="contato" className="py-20 bg-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Sua voz merece ser <span className="gold-text">ouvida</span>.
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Muitas vezes, a justiça começa com o desabafo. Não guarde o seu problema para si. 
                  Ao contar a sua história, você nos permite entender a dor por trás do processo e lutar por cada um dos seus direitos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-widest">WhatsApp de Contato</p>
                      <p className="text-lg font-semibold">(21) 97449-2162</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-widest">Atuação Regional</p>
                      <p className="text-lg font-semibold text-white">Rio de Janeiro / Online</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-accent p-8 rounded-2xl border border-white/5 shadow-2xl">
                <ContactForm onStatusChange={setSubmissionStatus} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {submissionStatus === SubmissionStatus.SUCCESS && (
        <SuccessModal onClose={() => setSubmissionStatus(SubmissionStatus.IDLE)} />
      )}
    </div>
  );
};

export default App;
