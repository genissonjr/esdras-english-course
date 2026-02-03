export default function Hero() {
  return (
    <section className="bg-red-500">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Learn English With Confidence
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Practical English for real-life situations. Improve speaking, listening,
          and communication skills with structured lessons.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          
          <a
            href="#pricing"
            className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90"
          >
            Enroll Now
          </a>

          <a
            href="#features"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition"
          >
            View Course
          </a>

        </div>

      </div>
    </section>
  );
}
