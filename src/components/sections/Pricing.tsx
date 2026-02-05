// src/components/sections/Pricing.tsx
export default function Pricing() {
  return (
    <section id="enroll" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your English Journey Today</h2>
        <p className="text-gray-600 mb-8">One-time payment for lifetime access to all course materials</p>

        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3 text-left">
              <h3 className="text-2xl font-bold mb-4">Complete English Course Package</h3>
              <ul className="space-y-3 mb-8 text-gray-600 text-left">
                <li>60+ hours of video lessons</li>
                <li>200+ practice exercises with answers</li>
                <li>Downloadable study materials</li>
                <li>Certificate of completion</li>
                <li>Lifetime access to course updates</li>
                <li>Community access for peer practice</li>
              </ul>
            </div>
            <div className="lg:w-1/3 bg-white border border-gray-200 rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">R$ 1.000,00</div>
              <div className="text-gray-600 mb-6">One-time payment</div>
              <a href="#" className="block w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-6 rounded-lg text-lg transition transform hover:-translate-y-1 mb-4">
                Enroll via Google Forms
              </a>
              <div className="text-sm text-gray-500">Secure enrollment • Instant access • 7-day support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
