export default function Products() {
  return (
    <div className="pt-24 px-6 pb-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-lavender-700 mb-8">
        Productos Terapéuticos y de Bienestar
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        Aquí podrás agregar tus productos, libros, kits de relajación y más.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Ejemplo de un producto */}
        <div className="border p-4 rounded-xl shadow-sm bg-white">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="text-lg font-semibold">Nombre del producto</h3>
          <p className="text-gray-600 mb-2">$00.000</p>
          <button className="bg-lavender-600 text-white px-4 py-2 rounded-lg">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
