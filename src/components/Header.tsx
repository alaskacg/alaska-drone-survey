import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold">
              ADS
            </div>
            <span className="text-xl font-bold text-gray-900">Alaska Drone Survey</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sky-600 transition">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-sky-600 transition">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-sky-600 transition">Portfolio</Link>
            <Link to="/technology" className="text-gray-700 hover:text-sky-600 transition">Technology</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-sky-600 transition">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-sky-600 transition">About</Link>
            <Link to="/contact" className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition">
              Contact
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-sky-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="block py-2 text-gray-700 hover:text-sky-600" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/portfolio" className="block py-2 text-gray-700 hover:text-sky-600" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link to="/technology" className="block py-2 text-gray-700 hover:text-sky-600" onClick={() => setIsOpen(false)}>Technology</Link>
            <Link to="/pricing" className="block py-2 text-gray-700 hover:text-sky-600" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-sky-600" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="block py-2 text-sky-600 font-semibold" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
