
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span>MediCare Plus</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Providing exceptional healthcare services with compassion and excellence for over 25 years.
            </p>
            <div className="flex items-center gap-2 text-red-400">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Emergency: +1 (555) 911-HELP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-white transition-colors">Departments</Link></li>
              <li><Link to="/doctors" className="text-gray-400 hover:text-white transition-colors">Find a Doctor</Link></li>
              <li><Link to="/appointments" className="text-gray-400 hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/health-blog" className="text-gray-400 hover:text-white transition-colors">Health Blog</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Emergency Care</li>
              <li>Surgery</li>
              <li>Outpatient Services</li>
              <li>Laboratory</li>
              <li>Radiology</li>
              <li>Pharmacy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>123 Healthcare Blvd<br />Medical District, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@medicareplus.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <div>Mon-Fri: 6:00 AM - 10:00 PM</div>
                  <div>Sat-Sun: 8:00 AM - 8:00 PM</div>
                  <div className="text-red-400 font-semibold">Emergency: 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400">
            © 2024 MediCare Plus. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
