import React from 'react';

const MenuCategory = ({ category, items, imageSrc, verticalTitle, isReversed = false }) => {
  return (
    <section className="py-12 lg:py-16 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl lg:text-4xl font-serif text-center text-[#aa9465] uppercase tracking-widest mb-10">
          {category}
        </h3>

        <div className={`flex flex-col lg:grid lg:grid-cols-12 lg:gap-12`}>
          
          {/* Columna de Imagen */}
          <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <img 
              src={imageSrc} 
              alt={category} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Columna de Contenido */}
          <div className={`lg:col-span-7 flex items-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="flex w-full">
              {/* Título Vertical */}
              <div className="hidden md:flex items-center mr-8 lg:mr-12">
                <h4 className="transform -rotate-90 whitespace-nowrap text-2xl font-serif tracking-widest text-gray-400">
                  {verticalTitle}
                </h4>
              </div>

              {/* Lista de Platos */}
              <div className="flex-grow space-y-5 py-4">
                {items.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline gap-4">
                      <p className="font-semibold text-gray-800 text-lg">{item.name}</p>
                      <p className="font-semibold text-gray-800 text-lg whitespace-nowrap">{item.price}</p>
                    </div>
                    {item.description && (
                      <p className="text-sm text-gray-500">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;