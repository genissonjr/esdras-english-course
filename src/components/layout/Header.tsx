type Props = {
  onLoginClick: () => void;
};

export default function Header({ onLoginClick }: Props) {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">
          Esdras English
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="#features" className="hover:text-primary">Course</a>
          <a href="#author" className="hover:text-primary">Instructor</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#testimonials" className="hover:text-primary">Reviews</a>
        </nav>

        {/* Login */}
        <button
          onClick={onLoginClick}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Login
        </button>

      </div>
    </header>
  );
}
