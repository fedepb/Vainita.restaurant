import React from 'react';
import { menuData } from '../data/MenuData'; 
import MenuCategory from './MenuCategory';

const MenuFull = () => {
  return (
    <div className="bg-stone-50">
      <h2 className="text-4xl lg:text-5xl font-serif text-center tracking-[0.2em] text-[#084538] pt-16 lg:pt-24">
        NUESTRA CARTA
      </h2>
      
      {/* Usamos el componente MenuCategory para renderizar cada sección */}
      {menuData.map((categoryData, index) => (
        <MenuCategory 
          key={categoryData.category}
          category={categoryData.category}
          items={categoryData.items}
          imageSrc={categoryData.imageSrc}
          verticalTitle={categoryData.verticalTitle}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default MenuFull;