import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import PhotoGallery from "./components/PhotoGallery";
import BookNow from "./components/BookNow";
import Payment from "./components/Payment";
import BookingConfirmation from "./components/BookingConfirmation";
import Footer from "./components/Footer";

const Home = () => (
  <>
    <HeroSection />
    <AboutUs />
    <PhotoGallery />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookNow />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
