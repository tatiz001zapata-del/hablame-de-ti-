import React from "react";
import CalendlyModal from "../components/CalendlyModal";

export default function Coaching() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="pt-28 pb-20 px-6 bg-purple-50">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-purple-700">Coaching Personal</h1>
        <p className="text-gray-700 mt-4 text-lg">
          Acompañamiento guiado para ayudarte a encontrar claridad emocional,
          propósito y dirección espiritual.
        </p>

        <div className="mt-10 bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-700">Incluye:</h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• Sesiones de crecimiento personal</li>
            <li>• Desarrollo de habilidades emocionales</li>
            <li>• Identidad, propósito y autodescubrimiento</li>
            <li>• Plan de transformación personal</li>
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 px-8 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
          >
            Reservar coaching
          </button>
        </div>
      </div>

      <CalendlyModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
