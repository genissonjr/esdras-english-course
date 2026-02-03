import { useState } from "react";
import Header from "./components/layout/Header";
import LoginModal from "./components/ui/LoginModal";
import Hero from "./components/sections/Hero";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <Header onLoginClick={() => setLoginOpen(true)} />

      {/* Conteúdo principal */}
      <main className="pt-16">
        <Hero />
      </main>

      {/* Modal Login */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
    </>
  );
}

export default App;
