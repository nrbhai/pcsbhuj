import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.2526169,
        "longitude": 69.6733174
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "20:30"
      },
      "sameAs": [
        "https://www.google.com/maps/place/PIONEER+COMPUTER+SERVICES"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "125"
      },
      "description": "Leading IT solutions provider in Bhuj, Kutch since 1993. Authorized dealer for Lenovo, HP, Dell, Asus laptops, CCTV systems, networking, and software solutions."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Brands />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
