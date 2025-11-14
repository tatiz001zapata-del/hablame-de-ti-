import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(`Hola ${name}, gracias por contarme sobre ti ✨`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Háblame de ti</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Escribe tu nombre..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>

        {response && (
          <p className="mt-6 text-center text-lg font-medium text-gray-700">
            {response}
          </p>
        )}
      </div>
    </div>
  );
}