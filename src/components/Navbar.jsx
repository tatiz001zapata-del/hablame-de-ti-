import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO – MÁS GRANDE + RESPLANDOR SUAVE */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Háblame de Ti Logo"
            className="h-20 w-auto drop-shadow-lg"
            style={{
              filter: "drop-shadow(0 0 12px rgba(200, 191, 231, 0.55))", 
              // glow lavanda suave
            }}
          />
          <span className="text-2xl font-serif text-brand-lavender font-semibold">
            Háblame de Ti
          </span>
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 font-sans text-lg text-gray-700">
          <a href="/" className="hover:text-brand-lavender transition">Inicio</a>
          <a href="#sobre-nosotros" className="hover:text-brand-lavender transition">Sobre Nosotros</a>
          <a href="#servicios" className="hover:text-brand-lavender transition">Servicios</a>
          <a href="#contacto" className="hover:text-brand-lavender transition">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
