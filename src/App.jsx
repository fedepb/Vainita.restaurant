// pages/Index.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuFull from './components/MenuFull';
import Map from './components/Map';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-inter text-white">
      <Header />
      <main>
        {/* Envolvemos cada componente en una sección con su ID correspondiente */}
        
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="carta">
          <MenuFull />
        </section>
        
        <section id="ubicacion">
          <Map />
        </section>
        
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;