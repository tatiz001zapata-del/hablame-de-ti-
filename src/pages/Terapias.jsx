import React from "react";

function Terapias() {
  const servicios = [
    {
      title: "Terapia Individual",
      price: "$150.000 COP",
      link: "https://calendly.com/hablamedeti2025/terapia-individual",
      description:
        "Un espacio personalizado para explorar tus emociones, comprender tus procesos internos y acompañarte en una transformación consciente."
    },
    {
      title: "Terapia de Pareja",
      price: "$200.000 COP",
      link: "https://calendly.com/hablamedeti2025/30min",
      description:
        "Sesiones diseñadas para mejorar la comunicación, sanar heridas afectivas y fortalecer el vínculo emocional en la relación."
    },
    {
      title: "Terapia Familiar",
      price: "$240.000 COP",
      link: "https://calendly.com/hablamedeti2025/terapia-familiar",
      description:
        "Un trabajo sistémico que ayuda a liberar dinámicas familiares, mejorar la convivencia y abrir espacios de comprensión y armonía."
    },
    {
      title: "Acompañamiento Emocional",
      price: "$120.000 COP",
      link: "https://calendly.com/hablamedeti2025/acompanamiento-emocional",
      description:
        "Sesiones de apoyo emocional para momentos de crisis, transición, duelo o situaciones que requieren escucha y sostén."
    },
    {
      title: "Sanación Interior",
      price: "$180.000 COP",
      link: "https://calendly.com/hablamedeti2025/sanacion-interior",
      description:
        "Una experiencia terapéutica profunda para liberar bloqueos, heridas pasadas y reconectar con tu fuerza y sabiduría interior."
    },
    {
      title: "Terapia de Reconexión Espiritual",
      price: "$220.000 COP",
      link: "https://calendly.com/hablamedeti2025/terapia-de-reconexion-espiritual",
      description:
        "Una sesión que integra el mundo emocional, psicológico y espiritual para ayudarte a recuperar claridad, propósito y alineación."
    }
  ];

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
        {servicios.map((item) => (
          <div
            key={item.title}
            className="p-6 bg-white rounded-xl shadow-md border border-purple-100"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
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
              className="mt-2 inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
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
