import React from "react";
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-serif text-brand-lavender mb-12">
        Contáctanos
      </h2>

      <div className="flex flex-col gap-6 text-brand-700 text-lg items-center">

        <div className="flex gap-3 items-center">
          <Mail className="text-brand-lavender" />
          <span>hablamedeti2025@gmail.com</span>
        </div>

        <div className="flex gap-3 items-center">
          <Phone className="text-brand-lavender" />
          <span>+57 314 783 9974</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
