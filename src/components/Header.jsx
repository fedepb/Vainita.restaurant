// Header.jsx - CORREGIDO
import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';

const Header = () => {
  const instagramUrl = "https://www.instagram.com/vainitacontoston/";
  const colorDorado = '#aa9465';

  // El estado para saber si estamos arriba de la página
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 px-8 py-2 transition-all duration-300" style={{ backgroundColor: '#084538' }}>
      <div className="container mx-auto flex justify-between items-center">
        
        {/* --- 1. IZQUIERDA: Logo --- */}
        <div className="flex-1 flex justify-start">
          <a href="#inicio" aria-label="Ir al inicio de la página">
            <img 
              src="/images/logov2.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* --- 2. CENTRO: Menú y Botón --- */}
        <div className="hidden md:flex flex-none items-center gap-6">
          <nav className="flex space-x-6">
            
            <a 
              href="#inicio" 
              className={`uppercase text-sm tracking-wider transition-colors duration-300 `}
              style={{ color: isAtTop ? colorDorado : 'white' }}
            >
              Inicio
            </a>
            
            <a href="#carta" className="text-white uppercase text-sm tracking-wider" style={{ '--color-dorado': colorDorado }} onMouseOver={e => e.currentTarget.style.color = colorDorado} onMouseOut={e => e.currentTarget.style.color = 'white'}>Carta</a>
            <a href="#ubicacion" className="text-white uppercase text-sm tracking-wider" style={{ '--color-dorado': colorDorado }} onMouseOver={e => e.currentTarget.style.color = colorDorado} onMouseOut={e => e.currentTarget.style.color = 'white'}>Ubicación</a>
          </nav>
          <a 
            href="#reservas"
            className="border text-sm uppercase font-semibold px-5 py-2 transition-colors duration-300 rounded-full border-2 "
            style={{ borderColor: colorDorado, color: colorDorado }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = colorDorado; e.currentTarget.style.color = '#084538'; }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colorDorado; }}
          >
            Reservas
          </a>
        </div>
        
        {/* --- 3. DERECHA: Icono de Instagram --- */}
        <div className="flex-1 flex justify-end">
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de Instagram"
            className="text-white transition-colors"
            style={{'--color-dorado': colorDorado}}
            onMouseOver={e => e.currentTarget.style.color = colorDorado}
            onMouseOut={e => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;