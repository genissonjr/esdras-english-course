import React from "react";

type HeaderProps = {
  onLoginClick: () => void;
};

export default function Header({ onLoginClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Esdras</h1>
            <p className="text-sm text-gray-600">English Course</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-primary font-medium transition">Home</a>
          <a href="#course" className="text-gray-700 hover:text-primary font-medium transition">Course</a>
          <a href="#author" className="text-gray-700 hover:text-primary font-medium transition">Author</a>
          <a href="#enroll" className="text-gray-700 hover:text-primary font-medium transition">Enroll</a>
        </div>

        {/* Login + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onLoginClick}
            className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Login
          </button>
          <button className="md:hidden text-gray-700">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
