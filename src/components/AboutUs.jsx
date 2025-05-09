import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">About Paradise Beach Cottage</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg mb-8 text-center">
            Welcome to Paradise Beach Cottage, your perfect coastal getaway. Nestled along the pristine shoreline, 
            our charming cottage offers a unique blend of comfort, luxury, and breathtaking ocean views.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Story</h3>
              <p className="text-gray-600">
                Founded with a vision to create unforgettable beach experiences, Paradise Beach Cottage has been 
                welcoming guests for over a decade. Our commitment to excellence and attention to detail ensures 
                every stay is memorable.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                We strive to provide a perfect blend of comfort and luxury, creating a home away from home where 
                guests can relax, unwind, and create lasting memories by the sea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 