import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileGetStartedOpen, setMobileGetStartedOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const getNavbarClasses = () => {
    if (isScrolled) {
      return "bg-vedra-floral/95 backdrop-blur-md shadow-lg border-b border-neutral-200/30";
    }
    if (isHomePage) {
      return "bg-transparent";
    }
    return "bg-vedra-floral shadow-lg";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${getNavbarClasses()}`}
    >
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
                    ? "text-vedra-hunter"
                    : "text-neutral-700 hover:text-vedra-hunter"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="btn-secondary h-12 items-center justify-center flex"
            >
              Dashboard
            </Link>
            <div className="relative group">
              <button
                className="btn-primary h-12 items-center justify-center flex"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Get Started
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute right-0 mt-2 w-64 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 z-50">
                <a
                  href="https://rzp.io/rzp/mvedra-govt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-vedra-hunter hover:text-white focus:bg-vedra-hunter focus:text-white rounded-md mx-2"
                >
                  Public Institute
                </a>
                <a
                  href="https://rzp.io/rzp/mvedra-pvt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-vedra-hunter hover:text-white focus:bg-vedra-hunter focus:text-white rounded-md mx-2"
                >
                  Private Institute
                </a>
              </div>
            </div>
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
            <div
              className={`px-4 pt-3 pb-4 space-y-1 sm:px-6 border-t bg-white/80 backdrop-blur-md border-neutral-200/30`}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 font-inter ${
                    isActive(item.href)
                      ? "text-vedra-hunter bg-primary-50"
                      : "text-neutral-700 hover:text-vedra-hunter hover:bg-neutral-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  to="/dashboard"
                  className="block px-4 py-3 rounded-md text-base font-medium text-vedra-hunter hover:bg-primary-50 font-inter"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  className="w-full text-left block px-4 py-3 rounded-md text-base font-medium bg-vedra-hunter text-white hover:bg-vedra-calpoly font-inter"
                  aria-expanded={mobileGetStartedOpen}
                  onClick={() => setMobileGetStartedOpen((v) => !v)}
                >
                  Get Started
                </button>
                {mobileGetStartedOpen && (
                  <div className="ml-2 pl-2 border-l border-neutral-200 space-y-2">
                    <a
                      href="https://rzp.io/rzp/mvedra-govt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 rounded-md text-base font-medium text-neutral-800 bg-white/70 hover:bg-vedra-hunter hover:text-white font-inter"
                      onClick={() => setIsOpen(false)}
                    >
                      Public Institute
                    </a>
                    <a
                      href="https://rzp.io/rzp/mvedra-pvt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 rounded-md text-base font-medium text-neutral-800 bg-white/70 hover:bg-vedra-hunter hover:text-white font-inter"
                      onClick={() => setIsOpen(false)}
                    >
                      Private Institute
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
