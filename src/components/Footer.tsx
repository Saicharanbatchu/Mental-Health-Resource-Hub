import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-primary-400" />
              <span className="font-bold text-xl">MindfulHub</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing comprehensive mental health resources, support, and community connections 
              to help individuals on their wellness journey across India.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>Crisis: 9152987821</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@mindfullhub.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Find Resources</Link></li>
              <li><Link to="/articles" className="text-gray-300 hover:text-white transition-colors">Articles & Tips</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-white transition-colors">Community Support</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Emergency Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Emergency Help</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-red-400 font-medium">Emergency: Call 100</li>
              <li className="text-yellow-400">AASRA: 9152987821</li>
              <li className="text-blue-400">Vandrevala: 9999666555</li>
              <li className="text-green-400">Sneha: 044-24640050</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MindfulHub. All rights reserved. | Not a substitute for professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;