import React from 'react';
import { Smile, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Michael Chen</h3>
                <p className="text-gray-400 text-sm">General & Cosmetic Dentist</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing exceptional dental care with over 12 years of experience. 
              Our mission is to deliver personalized, compassionate healthcare that puts 
              patients first and promotes long-term oral health.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Dr. Chen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Patient Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('appointment')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Medical Plaza, Suite 456<br />
                  Healthcare City, HC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@drchen.com" 
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  info@drchen.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Mon-Wed: 8AM-6PM</p>
                  <p>Thu-Fri: 8AM-8PM</p>
                  <p>Sat: 9AM-2PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates & Accreditations */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">Certifications & Accreditations</h4>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <span className="bg-gray-800 px-4 py-2 rounded">Licensed General Dentist</span>
              <span className="bg-gray-800 px-4 py-2 rounded">American Dental Association</span>
              <span className="bg-gray-800 px-4 py-2 rounded">Cosmetic Dentistry Certified</span>
              <span className="bg-gray-800 px-4 py-2 rounded">HIPAA Compliant</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Dr. Michael Chen Dental Practice. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">HIPAA Notice</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;