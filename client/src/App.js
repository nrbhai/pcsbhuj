import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComputersLaptops from './pages/ComputersLaptops';
import CCTV from './pages/CCTV';
import Accessories from './pages/Accessories';
import Printers from './pages/Printers';
import Software from './pages/Software';
import Development from './pages/Development';
import Networking from './pages/Networking';
import ServiceComputersLaptops from './pages/ServiceComputersLaptops';
import OfferBanner from './components/OfferBanner';

function App() {
  useEffect(() => {
    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Pioneer Computer Services",
      "image": "https://pioneercomputerservices.com/images/logo.svg",
      "@id": "https://pioneercomputerservices.com",
      "url": "https://pioneercomputerservices.com",
      "telephone": "+91-9825034580",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dhatia Falia 3 Ways, Anam Ring Road",
        "addressLocality": "Bhuj",
        "addressRegion": "Gujarat",
        "postalCode": "370001",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "125"
      },
      "description": "Leading IT solutions provider in Bhuj, Kutch since 1993. Dealing in Lenovo, HP, Dell, Asus laptops, CCTV systems, networking, and software solutions."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const HomePage = () => (
    <>
      <OfferBanner />
      <Hero />
      <Brands />
      <Services />
      <About />
      <Contact />
    </>
  );

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/computers-laptops" element={<ComputersLaptops />} />
            <Route path="/service-computers-laptops" element={<ServiceComputersLaptops />} />
            <Route path="/cctv" element={<CCTV />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/printers" element={<Printers />} />
            <Route path="/software" element={<Software />} />
            <Route path="/development" element={<Development />} />
            <Route path="/networking" element={<Networking />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
