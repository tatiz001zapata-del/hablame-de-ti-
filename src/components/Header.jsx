import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white/70 backdrop-blur-md shadow-sm py-4 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-6 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img src="/src/assets/lotus.png" alt="logo" className="w-10" />
          <h1 className="font-serif text-2xl text-lavender-700">
            Háblame de Ti
          </h1>
        </div>

        <ul className="flex gap-8 font-sans text-gray-700">
          <li><Link to="/" className="hover:text-lavender-600">Inicio</Link></li>
          <li><Link to="/services" className="hover:text-lavender-600">Servicios</Link></li>
          <li><Link to="/about" className="hover:text-lavender-600">Sobre mí</Link></li>
          <li><Link to="/contact" className="hover:text-lavender-600">Contacto</Link></li>
        </ul>

        <Link
          to="/reservations"
          className="button-primary"
        >
          Reservar
        </Link>
      </nav>
    </header>
  );
}
