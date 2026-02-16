import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center font-bold">
                ADS
              </div>
              <span className="text-lg font-bold">Alaska Drone Survey</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional aerial surveying, mapping, and inspection services across Alaska.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white transition">Aerial Mapping</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Infrastructure Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Real Estate Photography</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Construction Monitoring</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/technology" className="hover:text-white transition">Technology</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(907) 555-DRONE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@alaskadronesurvey.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Anchorage, Alaska</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Alaska Drone Survey. All rights reserved. | FAA Part 107 Certified</p>
        </div>
      </div>
    </footer>
  );
}
