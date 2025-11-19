import React from "react";

function TherapiesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
      <h1 className="text-4xl font-serif text-lavender-700 mb-6">
        Terapias Individuales
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Las terapias individuales están creadas para acompañarte en tu camino 
        personal de introspección, sanación y expansión de conciencia.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-lavender-400">
          <h2 className="text-2xl font-semibold text-lavender-600 mb-3">
            Terapia de Autoconexión
          </h2>
          <p className="text-gray-700">
            Un viaje hacia dentro para reconectar con tu energía, esencia 
            y propósito espiritual.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-coral-500">
          <h2 className="text-2xl font-semibold text-coral-500 mb-3">
            Terapia de Liberación Emocional
          </h2>
          <p className="text-gray-700">
            Un espacio seguro para liberar cargas, sanar heridas internas 
            y recuperar tu poder personal.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TherapiesPage;
