import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LoginModal from "../components/ui/LoginModal";

import Hero from "../components/sections/Hero";
import CourseFeatures from "../components/sections/CourseFeatures";
import Author from "../components/sections/Author";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CourseFeatures />
      <Author />
      <Pricing />
      <Testimonials />
      <Footer />
      <LoginModal />
    </>
  );
}
