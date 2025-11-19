import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section id="servicios" className="py-20 px-6 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-3">Servicios</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Acompañamientos espirituales, terapéuticos y de bienestar diseñados para tu transformación interior.
        </p>
      </div>

      {/* 4 categorías principales */}
      <div className="mt-14 grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {/* Terapias */}
        <Link
          to="/terapias"
          className="p-8 bg-white rounded-2xl shadow-md border border-purple-100 hover:shadow-lg hover:-translate-y-1 transition block"
        >
          <h3 className="text-xl font-semibold text-purple-700">Terapias</h3>
          <p className="text-gray-600 mt-2">Procesos emocionales, familiares y espirituales.</p>
        </Link>

        {/* Conferencias */}
        <Link
          to="/conferencias"
          className="p-8 bg-white rounded-2xl shadow-md border border-purple-100 hover:shadow-lg hover:-translate-y-1 transition block"
        >
          <h3 className="text-xl font-semibold text-purple-700">Conferencias</h3>
          <p className="text-gray-600 mt-2">Charlas y encuentros para empresas y comunidades.</p>
        </Link>

        {/* Retiros */}
        <Link
          to="/retiros"
          className="p-8 bg-white rounded-2xl shadow-md border border-purple-100 hover:shadow-lg hover:-translate-y-1 transition block"
        >
          <h3 className="text-xl font-semibold text-purple-700">Retiros</h3>
          <p className="text-gray-600 mt-2">Experiencias de sanación y reconexión interior.</p>
        </Link>

        {/* Productos */}
        <Link
          to="/productos"
          className="p-8 bg-white rounded-2xl shadow-md border border-purple-100 hover:shadow-lg hover:-translate-y-1 transition block"
        >
          <h3 className="text-xl font-semibold text-purple-700">Productos</h3>
          <p className="text-gray-600 mt-2">Herramientas de bienestar y relajación.</p>
        </Link>

      </div>
    </section>
  );
}

export default Services;
