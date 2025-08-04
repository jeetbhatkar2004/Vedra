import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isHomePage = location.pathname === '/';

  return (
    <div className={`min-h-screen flex flex-col ${isHomePage ? 'bg-gradient-to-br from-green-100 via-white to-green-50' : ''}`}>
      {/* Enhanced gradient overlay for homepage only */}
      {isHomePage && (
        <>
          <div className="fixed inset-0 bg-gradient-to-br from-vedra-hunter/20 via-white/80 to-emerald-400/15 z-0"></div>
          <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-green-200/20 via-white/90 to-green-200/20 z-0"></div>
          <div className="fixed top-0 left-0 w-full h-full bg-radial-gradient from-white/70 via-transparent to-green-100/30 z-0"></div>
        </>
      )}
      
      {!isDashboard && <Navbar />}
      <main className={`flex-grow relative z-10 ${isDashboard ? 'pt-0' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
