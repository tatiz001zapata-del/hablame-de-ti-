import React, { useEffect } from "react";

function CalendlyModal({ isOpen, onClose }) {
  // Cerrar el modal con la tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Cierra al hacer clic fuera
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl relative w-[90%] max-w-2xl"
        onClick={(e) => e.stopPropagation()} // Previene cierre al hacer clic dentro
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4">
          Reservar Sesión
        </h2>

        <iframe
          src="https://calendly.com/hablamedeti2025/30min"
          style={{ width: "100%", height: "500px", border: "none" }}
          title="Calendly"
        ></iframe>
      </div>
    </div>
  );
}

export default CalendlyModal;
