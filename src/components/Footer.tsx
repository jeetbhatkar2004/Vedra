import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-vedra-night text-vedra-floral text-white/90">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[25%_20%_20%_25%] gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="vedraWebsitelogoW.png"
              className='mb-4 w-32 h-auto'
            />
            <p className="text-vedra-floral text-white/90 text-sm leading-relaxed font-inter">
              Empowering Indian researchers with affordable and globally accessible DOI indexing solutions. 
              Making research discoverable worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/mvedracom" target='_blank' rel="noopener noreferrer" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/mvedracom/" target='_blank' rel="noopener noreferrer" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mvedracom" target='_blank' rel="noopener noreferrer" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-ibm-plex text-white/90">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-ibm-plex text-white/90">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                  DOI Generation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                  Research Indexing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                  Academic Publishing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                  Digital Archiving
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-ibm-plex text-white/90">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-vedra-floral text-white/90 text-sm font-inter">contact@mvedra.com</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='w-5 h-5 text-white' />
                <span className='text-vedra-floral text-white/90 text-sm font-inter'>+91 96540 07695</span>
              </div>
              <div className='flex items-center space-x-3'>
                <MapPin className='w-5 h-5 text-white' />
                <span className='text-vedra-floral text-white/90 text-sm font-inter'>Noida, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-vedra-floral text-white/90 text-sm font-inter">
              © 2024 Vedra Solutions Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-vedra-floral text-white/90 hover:text-vedra-silver transition-colors font-inter">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 