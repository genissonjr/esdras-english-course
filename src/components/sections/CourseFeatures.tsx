export default function CourseFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          O que você vai aprender
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-xl mb-3">
              Conversação Real
            </h3>
            <p>
              Fale inglês no dia a dia, viagens e trabalho.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-xl mb-3">
              Gramática Simplificada
            </h3>
            <p>
              Aprenda só o que realmente importa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-xl mb-3">
              Pronúncia Correta
            </h3>
            <p>
              Fale como um nativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
