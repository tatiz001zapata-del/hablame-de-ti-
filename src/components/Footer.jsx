import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-lavender-100 py-12 mt-20 border-t border-lavender-200">
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">
        
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-serif text-lavender-700">Háblame de Ti</h3>
          <p className="mt-3 text-sm leading-relaxed">
            Espacios psico-espirituales para escuchar tu alma, reconectar
            con tu propósito y transformar tu bienestar emocional.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-lavender-700 mb-3">Explora</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-lavender-600">Inicio</a></li>
            <li><a href="#introduction" className="hover:text-lavender-600">Sobre Nosotros</a></li>
            <li><a href="#services" className="hover:text-lavender-600">Servicios</a></li>
            <li><a href="#contact" className="hover:text-lavender-600">Contacto</a></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-lg font-semibold text-lavender-700 mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 +57 314 783 9974</li>
            <li>📧 hablamedeti2025@gmail.com</li>
            <li>🌎 Medellín, Colombia</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-lg font-semibold text-lavender-700 mb-3">Síguenos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-lavender-600">Instagram</a></li>
            <li><a href="#" className="hover:text-lavender-600">Facebook</a></li>
            <li><a href="#" className="hover:text-lavender-600">YouTube</a></li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-lavender-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Háblame de Ti · Creado por Tatiana Zapata · Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
