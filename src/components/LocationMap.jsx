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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096034!2d144.95373631531978!3d-37.817327679751734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1645362221879!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap; 