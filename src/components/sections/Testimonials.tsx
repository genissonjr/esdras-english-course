// src/components/sections/Testimonials.tsx
const testimonials = [
  { id: 1, name: "Maria Silva", image: "https://picsum.photos/60?random=4", comment: "The Esdras course completely changed my approach..." },
  { id: 2, name: "Carlos Santos", image: "https://picsum.photos/60?random=5", comment: "As a busy professional, I needed a flexible course..." },
  { id: 3, name: "Ana Oliveira", image: "https://picsum.photos/60?random=6", comment: "The pronunciation exercises were incredibly helpful..." },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">See what our students have to say about their learning experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (<i key={i} className="fas fa-star"></i>))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{t.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
