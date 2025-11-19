import React from "react";

function Conferencias() {
  return (
    <section className="pt-24 pb-20 px-6 bg-gradient-to-b from-blue-100/50 to-purple-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Conferencias
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Charlas profundas, dinámicas y diseñadas para inspirar y transformar.
          Disponibles para empresas, colegios, comunidades y eventos privados.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          "Inteligencia emocional",
          "Autoliderazgo espiritual",
          "Sanación del niño interior",
          "Comunicación consciente",
        ].map((item) => (
          <div
            key={item}
            className="p-6 bg-white rounded-xl shadow-md border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">{item}</h3>

            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/hablame-de-ti/conferencias",
                  "_blank"
                )
              }
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Reservar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Conferencias;
