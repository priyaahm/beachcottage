import React from 'react';

const PropertyDetails = () => {
  const amenities = [
    { icon: '🏖️', name: 'Beach Access' },
    { icon: '🏊', name: 'Swimming Pool' },
    { icon: '🍳', name: 'Fully Equipped Kitchen' },
    { icon: '🛏️', name: '3 Bedrooms' },
    { icon: '🚿', name: '2 Bathrooms' },
    { icon: '🌊', name: 'Ocean View' },
    { icon: '🅿️', name: 'Parking' },
    { icon: '📶', name: 'WiFi' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Property Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">About the Cottage</h3>
            <p className="text-gray-600 mb-6">
              Our beautiful beach cottage offers a perfect blend of comfort and luxury. Located just steps away from the pristine beach, this property provides an ideal setting for your dream vacation.
            </p>
            <p className="text-gray-600">
              The cottage features modern amenities while maintaining its charming coastal character. With spacious living areas and breathtaking ocean views, it's the perfect retreat for families and groups.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-2xl">{amenity.icon}</span>
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails; 