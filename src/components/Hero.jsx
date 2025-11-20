import React from "react";

export default function Hero({ openModal }) {
  return (
    <header
      id="inicio"
      className="relative bg-gradient-to-b from-purple-200/60 via-purple-100 to-white py-28 px-6 overflow-hidden"
    >
      <img
        src="/src/assets/watercolor-bg.jpg"
        alt="Acuarela"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700">
          El alma también necesita escucharse
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-4">

          Acompañamiento emocional, espiritual y terapéutico para reencontrarte contigo.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={openModal}
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition"
          >
            Reservar ahora
          </button> 

          <a
            href="#servicios"
            className="px-8 py-3 border-2 border-purple-600 text-purple-700 font-semibold rounded-full hover:bg-purple-50 transition"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </header>
  );
}
