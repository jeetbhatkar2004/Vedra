import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Globe, 
  Shield, 
  Users, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Star,
  LogIn,
  UserPlus
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "DOI Generation",
      description: "Generate Digital Object Identifiers for your research papers, articles, and academic content with ease."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Accessibility",
      description: "Make your research discoverable worldwide through our comprehensive indexing system."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Archiving",
      description: "Safely archive your research data with our robust and reliable storage solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Platform",
      description: "Connect with researchers and institutions across India and the world."
    }
  ];

  const stats = [
    { number: "6", label: "Consortium Members" },
    { number: "2400+", label: "Hours Saved" },
    { number: "24/7", label: "Local Support" },
    { number: "1000+", label: "Researchers Served" }
  ];

  const benefits = [
    "Support for high-quality open-metadata standards",
    "Regional language support in Hindi & English",
    "Easy payments in INR (₹) via UPI",
    "Citation metrics for authors & journals"
  ];

  return (
    <div className="min-h-screen relative pt-4 lg:pt-24 xl:pt-24">
      {/* Hero Section */}
      <section className="pb-16 flex items-center relative z-10">
        <div className="container-custom relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-ibm-plex">
                  <span className="text-gradient">Indian Research</span>
                  <br />
                  <span className="text-vedra-night">Indexing Solution</span>
                </h1>
                <p className="text-xl text-vedra-night leading-relaxed font-inter">
                  Empowering Indian researchers with affordable and globally accessible open-metadata indexing solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {isAuthenticated ? (
                  <Link to="/dashboard" className="btn-primary inline-flex items-center justify-center">
                    Go to Dashboard
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                ) : (
                  <>
                    <button 
                      onClick={() => setShowSignupModal(true)}
                      className="btn-primary inline-flex items-center justify-center"
                    >
                      Get Started
                      <UserPlus className="ml-2 w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setShowLoginModal(true)}
                      className="btn-secondary inline-flex items-center justify-center"
                    >
                      Sign In
                      <LogIn className="ml-2 w-5 h-5" />
                    </button>
                  </>
                )}
                <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                  Learn More
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-neutral-600 font-inter">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-vedra-calpoly" />
                  <span>Trusted by 1000+ researchers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-vedra-floral to-green-50 rounded-2xl shadow-2xl p-8 border border-black-200">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-vedra-hunter to-vedra-calpoly rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white/90" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-vedra-night font-ibm-plex">DOI Generation</h3>
                      <p className="text-sm text-neutral-500 font-inter">Quick and easy process</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-neutral-100 rounded-lg">
                      <span className="text-sm font-medium font-inter">Research Paper</span>
                      <span className="text-xs text-neutral-500 font-inter">PDF Upload</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-neutral-100 rounded-lg">
                      <span className="text-sm font-medium font-inter">Metadata</span>
                      <span className="text-xs text-neutral-500 font-inter">Auto-filled</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-vedra-hunter to-vedra-calpoly rounded-lg">
                      <span className="text-sm font-medium text-white/90 font-inter">DOI Generated</span>
                      <span className="text-xs text-white/70 font-inter">10.1234/mvedra.2024.001</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding relative z-10 py-4">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2 font-ibm-plex">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/80 backdrop-blur-sm section-padding py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vedra-night mb-4 font-ibm-plex">
              Why Choose <span className="font-jsmath">m</span><span className="font-inter font-bold">Vedra</span>?
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto font-inter">
              We provide comprehensive DOI indexing solutions tailored specifically for the Indian research community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vedra-hunter to-vedra-calpoly rounded-full flex items-center justify-center mx-auto mb-4 text-white/90">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-vedra-night mb-3 font-ibm-plex">
                  {feature.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding relative bg-neutral-200 overflow-hidden">
        {/* Decorative gradient overlay */}

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-vedra-night mb-6 font-ibm-plex">
                Made for Indian Researchers
              </h2>
              <p className="text-xl text-vedra-night mb-8 leading-relaxed font-inter">
                We understand the unique challenges faced by Indian researchers and institutions. 
                Our platform is designed to address these specific needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-vedra-calpoly flex-shrink-0" />
                    <span className="text-vedra-night font-inter">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-vedra-hunter rounded-2xl p-8 text-white shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-8 h-8 text-white/90" />
                    <h3 className="text-2xl font-bold font-ibm-plex text-white/90">Growth Statistics</h3>
                  </div>
                  
                    <div className="space-y-4">
                      <div className="flex justify-between items-center font-inter">
                        <span className="text-white/90">Research Visibility</span>
                        <span className="font-semibold text-white/90">+70%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white/90 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    
                    <div className="flex justify-between items-center font-inter">
                      <span className="text-white/90">User Satisfaction</span>
                      <span className="font-semibold text-white/90">98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white/90 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center font-inter">
                      <span className="text-white/90">Cost Savings</span>
                      <span className="font-semibold text-white/90">₹2.5L+</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white/90 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-vedra-hunter to-vedra-calpoly section-padding py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white/90 mb-6 font-ibm-plex">
              Ready to Make Your Research Global?
            </h2>
            <p className="text-xl text-white/80 mb-8 font-inter">
              Join thousands of Indian researchers who are already using mVEDRA to make their work discoverable worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Link to="/dashboard" className="bg-neutral-100 text-vedra-hunter hover:bg-neutral-200 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 font-inter">
                  Go to Dashboard
                </Link>
              ) : (
                <button 
                  onClick={() => setShowSignupModal(true)}
                  className="bg-neutral-100 text-vedra-hunter hover:bg-neutral-200 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 font-inter"
                >
                  Start Your Journey
                </button>
              )}
              <Link to="/contact" className="bg-neutral-100 text-vedra-hunter hover:bg-neutral-200 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 font-inter">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
    </div>
  );
};

export default Home; 
