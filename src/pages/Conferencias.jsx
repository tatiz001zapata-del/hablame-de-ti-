import React from "react";

function Conferencias() {
  const conferencias = [
    {
      title: "Inteligencia emocional",
      price: "$450.000 COP",
      link: "https://calendly.com/hablamedeti2025/inteligencia-emocional",
      description:
        "Una conferencia que ayuda a comprender las emociones, gestionarlas desde la conciencia y convertirlas en herramientas de bienestar y claridad."
    },
    {
      title: "Autoliderazgo espiritual",
      price: "$500.000 COP",
      link: "https://calendly.com/hablamedeti2025/auto-liderazgo-espiritual",
      description:
        "Una charla profunda sobre conexión interior, propósito, coherencia y liderazgo desde el alma para tomar decisiones en alineación con la verdad personal."
    },
    {
      title: "Sanación del niño interior",
      price: "$480.000 COP",
      link: "https://calendly.com/hablamedeti2025/sanacion-del-nino-interior",
      description:
        "Un espacio para comprender heridas tempranas, liberar memorias emocionales y reconectar con la autenticidad, el juego y la paz interna."
    },
    {
      title: "Comunicación consciente",
      price: "$450.000 COP",
      link: "https://calendly.com/hablamedeti2025/comunicacion-conciente",
      description:
        "Una conferencia que transforma la forma de relacionarnos, aprendiendo a expresar desde el respeto, la autenticidad y la escucha real."
    }
  ];

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
        {conferencias.map((item) => (
          <div
            key={item.title}
            className="p-6 bg-white rounded-xl shadow-md border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              {item.description}
            </p>

            <p className="text-lg font-semibold text-gray-700 mb-4">
              {item.price}
            </p>

            <button
              onClick={() => window.open(item.link, "_blank")}
              className="mt-2 inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
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
