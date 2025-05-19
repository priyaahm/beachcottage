import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">How to Find Us</h3>
            <p className="text-gray-600 mb-4">
              Our beach cottage is conveniently located in a peaceful coastal area, just a short walk from the beach.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-semibold">Address:</span> 123 Beach Road, Coastal Town, 12345
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Distance to Beach:</span> 2-minute walk
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Nearest Airport:</span> 30-minute drive
              </p>
            </div>
          </div>
          <div className="h-96">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7635462806!2d79.82287407391065!3d11.990856588241591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5366a66822014b%3A0x9c192a8677dd8601!2s290%2C%20Auroville%20Rd%2C%20Auroville%2C%20Kuilapalayam%2C%20Bommayapalayam%2C%20Tamil%20Nadu%20605101%2C%20India!5e0!3m2!1sen!2sus!4v1747640273867!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap; 