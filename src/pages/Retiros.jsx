import React from "react";

function Retiros() {
  const retiros = [
    {
      title: "Retiros de sanación",
      description:
        "Un espacio profundo para liberar bloqueos emocionales, transformar memorias dolorosas y conectar con una nueva versión de ti.",
      price: "$1.200.000 COP",
      link: "https://calendly.com/hablamedeti2025/retiros-de-sanacion"
    },
    {
      title: "Retiros de silencio",
      description:
        "Una experiencia de quietud, contemplación y escucha interna para calmar la mente y reconectar con tu voz interior.",
      price: "$950.000 COP",
      link: "https://calendly.com/hablamedeti2025/retiros-de-silencio"
    },
    {
      title: "Retiros de reconexión espiritual",
      description:
        "Un viaje de expansión espiritual, reconexión energética y apertura del corazón para volver a tu esencia.",
      price: "$1.400.000 COP",
      link: "https://calendly.com/hablamedeti2025/retiros-de-reconexion-espiritual"
    },
    {
      title: "Retiros para empresas",
      description:
        "Experiencias diseñadas para fortalecer equipos, mejorar el bienestar, la comunicación consciente y la cultura organizacional.",
      price: "Desde $3.500.000 COP",
      link: "https://calendly.com/hablamedeti2025/retiros-para-empresas"
    }
  ];

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
        {retiros.map((item) => (
          <div
            key={item.title}
            className="p-6 bg-white rounded-xl shadow-md border border-pink-100"
          >
            <h3 className="text-xl font-semibold text-pink-700 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              {item.description}
            </p>

            <p className="text-lg font-semibold text-gray-700 mb-4">
              {item.price}
            </p>

            <button
              onClick={() => window.open(item.link, "_blank")}
              className="mt-2 inline-block px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
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
