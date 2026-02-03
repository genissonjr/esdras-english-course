export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          O que nossos alunos dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="mb-4">
              "Meu inglês melhorou muito!"
            </p>
            <strong>Maria</strong>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="mb-4">
              "Hoje consigo conversar no trabalho."
            </p>
            <strong>João</strong>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="mb-4">
              "Didática incrível."
            </p>
            <strong>Ana</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
