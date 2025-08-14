import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const getNavbarClasses = () => {
    if (isScrolled) {
      return 'bg-vedra-floral/95 backdrop-blur-md shadow-lg border-b border-neutral-200/30';
    }
    if (isHomePage) {
      return 'bg-transparent';
    }
    return 'bg-vedra-floral shadow-lg';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${getNavbarClasses()}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/vedrawebsite_transparent.png" 
              alt="mVEDRA Icon" 
              className="h-8 w-auto"
            />
            <div className="flex items-center">
              <span className="font-jsmath text-2xl text-black mt-1">m</span>
              <span className="font-inter text-2xl font-bold text-black">Vedra</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 font-inter ${
                  isActive(item.href)
                    ? 'text-vedra-hunter'
                    : 'text-neutral-700 hover:text-vedra-hunter'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="btn-secondary h-12 items-center justify-center flex">
              Dashboard
            </Link>
            <Link to="/services" className="btn-primary h-12 items-center justify-center flex">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-vedra-hunter hover:bg-neutral-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t ${
              isScrolled || !isHomePage
                ? 'bg-vedra-floral border-neutral-200' 
                : 'bg-white/80 backdrop-blur-md border-neutral-200/30'
            }`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 font-inter ${
                    isActive(item.href)
                      ? 'text-vedra-hunter bg-primary-50'
                      : 'text-neutral-700 hover:text-vedra-hunter hover:bg-neutral-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-vedra-hunter hover:bg-primary-50 font-inter"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-vedra-hunter text-white hover:bg-vedra-calpoly font-inter"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 