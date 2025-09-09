import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
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

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

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
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/vedraWebsitelogo.png" 
              alt="mVEDRA Icon" 
              className="h-7 w-auto"
            />
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
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="btn-secondary h-12 items-center justify-center flex">
                  Dashboard
                </Link>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-vedra-hunter to-vedra-calpoly rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white/90" />
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="text-neutral-600 hover:text-vedra-hunter transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setShowLoginModal(true)}
                  className="btn-secondary h-12 items-center justify-center flex"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </button>
                <button 
                  onClick={() => setShowSignupModal(true)}
                  className="btn-primary h-12 items-center justify-center flex"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-md text-neutral-700 hover:text-vedra-hunter hover:bg-neutral-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-4 pt-3 pb-4 space-y-1 sm:px-6 border-t ${
              isScrolled || !isHomePage
                ? 'bg-vedra-floral border-neutral-200' 
                : 'bg-white/80 backdrop-blur-md border-neutral-200/30'
            }`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 font-inter ${
                    isActive(item.href)
                      ? 'text-vedra-hunter bg-primary-50'
                      : 'text-neutral-700 hover:text-vedra-hunter hover:bg-neutral-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-3 rounded-md text-base font-medium text-vedra-hunter hover:bg-primary-50 font-inter"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-red-600 hover:bg-red-50 font-inter"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setShowLoginModal(true);
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-vedra-hunter hover:bg-primary-50 font-inter"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setShowSignupModal(true);
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 rounded-md text-base font-medium bg-vedra-hunter text-white hover:bg-vedra-calpoly font-inter"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Authentication Modals */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={() => {
          setShowLoginModal(false);
          setShowSignupModal(true);
        }}
      />
      
      <SignupModal 
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={() => {
          setShowSignupModal(false);
          setShowLoginModal(true);
        }}
      />
    </nav>
  );
};

export default Navbar; 
