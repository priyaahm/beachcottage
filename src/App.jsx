import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import PhotoGallery from './components/PhotoGallery';
import BookNow from './components/BookNow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutUs />
        <PhotoGallery />
        <BookNow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
