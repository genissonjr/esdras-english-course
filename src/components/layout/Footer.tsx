// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#2563eb] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Esdras English Course</h3>
            <p className="text-gray-300">Master English with our comprehensive online course. Flexible learning, proven results.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#course" className="text-gray-300 hover:text-white">Course Features</a></li>
              <li><a href="#author" className="text-gray-300 hover:text-white">About Esdras</a></li>
              <li><a href="#enroll" className="text-gray-300 hover:text-white">Enrollment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Course Details</h4>
            <ul className="space-y-3 text-gray-300">
              <li>100% Online</li>
              <li>Self-Paced Learning</li>
              <li>Lifetime Access</li>
              <li>Certificate Included</li>
              <li>Price: R$ 1.000,00</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact & Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Email: support@esdrascourse.com</li>
              <li>Phone: +55 (11) 99999-9999</li>
              <li>Mon-Fri: 9AM-6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Esdras English Course. All rights reserved.</p>
          <p className="mt-2 text-sm">100% online English learning platform</p>
        </div>
      </div>
    </footer>
  );
}
