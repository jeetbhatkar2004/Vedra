import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
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
    <div className="min-h-screen flex flex-col">
      {/* Homepage-specific background and overlays */}
      {isHomePage && (
        <>
          <div className="fixed inset-0 bg-gradient-to-br from-green-100 via-white to-green-50 -z-10"></div>
          <div className="fixed inset-0 bg-gradient-to-br from-vedra-hunter/20 via-white/80 to-emerald-400/15 -z-10"></div>
          <div className="fixed inset-0 bg-gradient-to-r from-green-200/20 via-white/90 to-green-200/20 -z-10"></div>
          <div className="fixed inset-0 bg-radial-gradient from-white/70 via-transparent to-green-100/30 -z-10"></div>
        </>
      )}
      
      {/* Navbar - only show when not on Dashboard */}
      {!isDashboard && <Navbar />}
      
      {/* Main content area */}
      <main className={`flex-grow ${isDashboard ? 'pt-0' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      
      {/* Footer - only show when not on Dashboard */}
      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
