import React from "react";

function Productos() {
  return (
    <section className="pt-24 pb-20 px-6 bg-gradient-to-b from-amber-100/50 to-yellow-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-amber-700 mb-6">
          Productos Terapéuticos y de Relajación
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Selección exclusiva de productos para equilibrar tu energía, relajar tu
          mente y elevar tu bienestar emocional.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          "Aromaterapia",
          "Esencias energéticas",
          "Velas terapéuticas",
          "Journals de sanación",
          "Kits de meditación",
          "Música y audios guiados",
        ].map((item) => (
          <div
            key={item}
            className="p-6 bg-white rounded-xl shadow-md border border-amber-100"
          >
            <h3 className="text-xl font-semibold text-amber-700 mb-3">{item}</h3>

            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/hablame-de-ti/productos",
                  "_blank"
                )
              }
              className="mt-4 inline-block px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition"
            >
              Consultar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;
