import React from "react";

function Retiros() {
  return (
    <section className="pt-24 pb-20 px-6 bg-gradient-to-b from-pink-100/50 to-orange-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-pink-700 mb-6">
          Retiros Espirituales
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Experiencias inmersivas de conexión interior, silencio, expansión y
          espiritualidad. Retiros grupales y personalizados.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          "Retiros de sanación",
          "Retiros de silencio",
          "Retiros de reconexión espiritual",
          "Retiros para empresas",
        ].map((item) => (
          <div
            key={item}
            className="p-6 bg-white rounded-xl shadow-md border border-pink-100"
          >
            <h3 className="text-xl font-semibold text-pink-700 mb-3">{item}</h3>

            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/hablame-de-ti/retiros",
                  "_blank"
                )
              }
              className="mt-4 inline-block px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
            >
              Reservar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Retiros;
