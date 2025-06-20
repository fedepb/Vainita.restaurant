// Header.jsx - VERSIÓN FINAL CON MENÚ A PANTALLA COMPLETA
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const instagramUrl = "https://www.instagram.com/vainitacontoston/";
  const colorDorado = '#aa9465';
  const colorVerde = '#084538';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // Efecto para el scroll
  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para cerrar el menú si la pantalla se agranda
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efecto para bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function para re-habilitar el scroll si el componente se desmonta
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);


  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* HEADER PRINCIPAL - Aumentamos z-index para que quede sobre el menú fullscreen */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-2 transition-all duration-300" style={{ backgroundColor: colorVerde }}>
        <div className="container mx-auto flex justify-between items-center">

          <div className="flex-1 flex justify-start">
            <a href="#inicio" aria-label="Ir al inicio de la página" onClick={handleLinkClick}>
              <img src="/images/logov2.png" alt="Logo" className="h-12 w-auto" />
            </a>
          </div>

          {/* Menú de Escritorio */}
          <div className="hidden md:flex flex-none items-center gap-6">
            <nav className="flex space-x-6">
              <a href="#inicio" className="uppercase text-sm tracking-wider transition-colors duration-300" style={{ color: isAtTop ? colorDorado : 'white' }}>
                Inicio
              </a>
              <a href="#carta" className="text-white hover:text-[#aa9465] uppercase text-sm tracking-wider transition-colors duration-300">Carta</a>
              <a href="#ubicacion" className="text-white hover:text-[#aa9465] uppercase text-sm tracking-wider transition-colors duration-300">Ubicación</a>
            </nav>
            <a
              href="#reservas"
              className="border-2 text-sm uppercase font-semibold px-5 py-2 transition-colors duration-300 rounded-full hover:bg-[#aa9465] hover:text-[#084538]"
              style={{ borderColor: colorDorado, color: colorDorado }}
            >
              Reservas
            </a>
          </div>

          <div className="hidden md:flex flex-1 justify-end">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Perfil de Instagram" className="text-white transition-colors duration-300 hover:text-[#aa9465]">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>

          {/* Botón Hamburguesa (Móvil) */}
          <div className="md:hidden flex items-center">
            {/* CAMBIO: El botón ahora tiene z-index relativo al header (z-50) y siempre es dorado */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none" aria-label="Abrir o cerrar menú" style={{ color: colorDorado }}>
              {isMenuOpen ? <FaTimes className="h-7 w-7" /> : <FaBars className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL A PANTALLA COMPLETA */}
      {/* CAMBIO: Se ajustan clases para ocupar toda la pantalla y animar verticalmente */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ backgroundColor: colorVerde }}
      >
        <a href="#inicio" className="text-2xl uppercase text-white transition-colors hover:text-[#aa9465]" onClick={handleLinkClick}>Inicio</a>
        <a href="#carta" className="text-2xl uppercase text-white transition-colors hover:text-[#aa9465]" onClick={handleLinkClick}>Carta</a>
        <a href="#ubicacion" className="text-2xl uppercase text-white transition-colors hover:text-[#aa9465]" onClick={handleLinkClick}>Ubicación</a>
        <a
          href="#reservas"
          className="border-2 text-xl uppercase font-semibold px-8 py-3 transition-colors duration-300 rounded-full mt-6 hover:bg-[#aa9465] hover:text-[#084538]"
          style={{ borderColor: colorDorado, color: colorDorado }}
          onClick={handleLinkClick}
        >
          Reservas
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de Instagram"
          className="absolute bottom-10 text-white transition-colors hover:text-[#aa9465]"
          onClick={handleLinkClick}
        >
          <FaInstagram className="h-9 w-9" />
        </a>
      </div>
    </>
  );
};

export default Header;