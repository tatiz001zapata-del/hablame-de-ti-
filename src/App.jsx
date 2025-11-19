import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas reales según tu estructura
import Home from "./pages/Home";
import Conferencias from "./pages/Conferencias";
import Coaching from "./pages/Coaching";
import Productos from "./pages/Productos";
import Retiros from "./pages/Retiros";
import Terapias from "./pages/Terapias";
import TherapiesPage from "./pages/TherapiesPage";
import ServicesPage from "./pages/ServicesPage";
import Reservations from "./pages/Reservations";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Servicios principales */}
        <Route path="/terapias" element={<Terapias />} />
        <Route path="/conferencias" element={<Conferencias />} />
        <Route path="/retiros" element={<Retiros />} />
        <Route path="/productos" element={<Productos />} />

        {/* Página general de servicios */}
        <Route path="/servicios" element={<ServicesPage />} />

        {/* Página detallada de terapias */}
        <Route path="/terapias-detalle" element={<TherapiesPage />} />

        <Route path="/reservaciones" element={<Reservations />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
