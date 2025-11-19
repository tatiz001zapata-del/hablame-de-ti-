import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <Hero />

      {/* SOBRE NOSOTROS */}
      <section id="sobre-nosotros">
        <Introduction />
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <Services />
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <Contact />
      </section>

    </div>
  );
}

export default Home;
