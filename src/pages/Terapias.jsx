import React from "react";

function Terapias() {
  return (
    <section className="pt-24 pb-20 px-6 bg-gradient-to-b from-purple-100/60 to-blue-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Terapias</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Espacios personales y profundos donde trabajamos tus emociones,
          procesos familiares y vínculos. Cada terapia está diseñada para
          acompañarte en tu transformación interior.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { title: "Terapia Individual" },
          { title: "Terapia de Pareja" },
          { title: "Terapia Familiar" },
          { title: "Acompañamiento Emocional" },
          { title: "Sanación Interior" },
          { title: "Terapia de Reconexión Espiritual" },
        ].map((item) => (
          <div
            key={item.title}
            className="p-6 bg-white rounded-xl shadow-md border border-purple-100"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-3">
              {item.title}
            </h3>
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/hablame-de-ti/terapias",
                  "_blank"
                )
              }
              className="mt-4 inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              Reservar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Terapias;
