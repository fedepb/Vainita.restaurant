import React from 'react';

const backgroundImageUrl = "../../images/portada.jpg"; // Asegúrate de que la ruta sea correcta"";

const Hero = () => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center -mt-20">
        
        <h1 className="text-7xl md:text-9xl font-serif tracking-wider">
          Vainita con Tostón
        </h1>
        
        <p className="text-2xl md:text-3xl uppercase tracking-[0.5em]">
          Saborea la diversidad
        </p>

        <a
  href="https://vainitacontoston.myrestoo.net/es/info"
  target="_blank"
  rel="noopener noreferrer"
 className="mt-8 inline-block bg-[#aa9465] text-white uppercase text-sm font-semibold px-6 py-3 rounded-full transform transition duration-200 hover:scale-110"
>
  Reserva en Vainita
</a>
      </div>

      {/* --- INICIO: Icono de Scroll del Ratón --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-white rounded-full">
          {/* Esta es la rueda del ratón, a la que aplicamos la animación */}
          <div className="w-1 h-2 bg-white rounded-full mx-auto mt-2 animate-scroll-down"></div>
        </div>
      </div>
      {/* --- FIN: Icono de Scroll del Ratón --- */}

    </div>
  );
};

export default Hero;