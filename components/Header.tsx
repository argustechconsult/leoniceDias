
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Fale com uma Advogada', id: 'contato' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity text-left bg-transparent border-none cursor-pointer p-0"
          >
             <div className="h-10 w-10 md:h-12 md:w-12 bg-white/5 rounded-full overflow-hidden flex items-center justify-center border border-white/10">
               <img src="logo.jpg" alt="Logo Leonice Dias" className="h-full w-full object-cover" />
             </div>
             <div className="flex flex-col">
               <span className="text-lg md:text-xl font-bold font-serif gold-text leading-tight">Leonice Dias</span>
               <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-500">Advocacia Especializada</span>
             </div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 text-[11px] font-bold uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-[#d4af37] transition-colors py-2 border-b border-transparent hover:border-[#d4af37]/30 bg-transparent cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          {/* Right Action / Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/5521974492162" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-5 py-2 rounded-lg gold-gradient text-black font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all"
            >
              WhatsApp
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors bg-transparent"
              aria-label="Toggle Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-zinc-950 border-b border-white/10`}>
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.id)}
              className="text-left text-gray-300 hover:text-[#d4af37] text-sm font-bold uppercase tracking-widest transition-colors bg-transparent"
            >
              {link.name}
            </button>
          ))}
          <a 
            href="https://wa.me/5521974492162" 
            className="block sm:hidden text-[#d4af37] text-sm font-bold uppercase tracking-widest pt-2"
          >
            WhatsApp: (21) 97449-2162
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
