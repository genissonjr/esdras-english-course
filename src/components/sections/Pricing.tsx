export default function Pricing() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Planos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">
              Básico
            </h3>

            <p className="text-3xl font-bold mb-6">
              R$ 97/mês
            </p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
              Assinar
            </button>
          </div>

          <div className="border p-8 rounded-2xl bg-blue-600 text-white">
            <h3 className="text-xl font-bold mb-4">
              Premium
            </h3>

            <p className="text-3xl font-bold mb-6">
              R$ 197/mês
            </p>

            <button className="w-full bg-white text-blue-600 py-3 rounded-xl">
              Assinar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
