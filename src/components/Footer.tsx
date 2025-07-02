
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Innovatech Solutions</span>
            </div>
            <p className="text-gray-600 mb-6">
              We specialize in creating innovative web solutions tailored to your business needs. 
              From e-commerce platforms to powerful web applications, we bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-teal-500">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-teal-500">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/services" className="hover:text-teal-600">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-teal-600">Web App Development</Link></li>
              <li><Link to="/services" className="hover:text-teal-600">E-commerce Solutions</Link></li>
              <li><Link to="/services" className="hover:text-teal-600">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-teal-600">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-teal-600">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-teal-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-teal-600">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-teal-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <p className="text-center text-sm text-gray-500">
            © 2024 Innovatech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
