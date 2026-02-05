// src/App.tsx
import { useState } from "react";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero";
import CourseFeatures from "./components/sections/CourseFeatures";
import Author from "./components/sections/Author";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";

// UI
import LoginModal from "./components/ui/LoginModal";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <Header onLoginClick={() => setLoginOpen(true)} />

      {/* Login Modal */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <CourseFeatures />
        <Author />
        <Pricing />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
