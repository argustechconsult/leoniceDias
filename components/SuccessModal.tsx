
import React from 'react';

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="bg-dark-accent p-8 md:p-12 rounded-2xl border border-[#d4af37]/30 max-w-lg w-full text-center space-y-6 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
        <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 scale-110 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold font-serif gold-text">Relato Recebido</h2>
        <p className="text-gray-300 leading-relaxed">
          Sua história foi enviada com sucesso para a Dra. Leonice Dias. 
          Entendemos a importância do seu caso e nossa equipe entrará em contato em breve para os próximos passos.
        </p>
        <div className="pt-4">
          <button
            onClick={onClose}
            className="w-full py-4 border border-[#d4af37] text-[#d4af37] font-bold rounded-lg uppercase tracking-widest hover:bg-[#d4af37] hover:text-black transition-all"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
