import React from 'react';
export default function Map() {
  return (
    <section className="bg-stone-50 text-gray-800">
      <h2 className="text-4xl lg:text-5xl font-serif text-center tracking-[0.2em] text-[#084538] pt-16 lg:pt-24 pb-10">
        DÓNDE ESTAMOS
      </h2>

      {/* --- INICIO: Contenido de la imagen --- */}
      <div className="bg-marmol text-[#3A3A3A] py-12 px-6 lg:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 max-w-5xl">
          
          {/* Columna Horario */}
          <div>
            <h3 className="font-serif text-3xl tracking-wider mb-6">HORARIO</h3>
            <div className="space-y-4 text-base">
              <div>
                <p className="font-bold">Martes, miércoles y jueves:</p>
                <p>De 12:30 a 2:00</p>
              </div>
              <div>
                <p className="font-bold">Viernes y sábado:</p>
                <p>De 12:30 a 2:30</p>
              </div>
              <div>
                <p className="font-bold">Lunes:</p>
                <p>Cerrado</p>
              </div>
            </div>
          </div>

          {/* Columna Contacto */}
          <div>
            <h3 className="font-serif text-3xl  tracking-wider mb-6">CONTACTO</h3>
            <div className="space-y-4 text-base">
              <p>C. de Bolívar, 9 calle embajadores º177 (28045 Madrid)</p>
              <p>(+34) 687 58 63 25</p>
              
            </div>
          </div>
        </div>
      </div>
       {/* --- FIN: Contenido de la imagen --- */}

      <div className="px-10 pb-16 pt-10">
        <iframe
          title="Donde estamos"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379.8444384686921!2d-3.6917777759220716!3d40.39211104180598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422706511afabf%3A0x57c662c35c1a7a28!2sRestaurante%20Vainita%20Con%20Tost%C3%B3n!5e0!3m2!1ses!2ses!4v1750248479207!5m2!1ses!2ses"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}