import React, { useState } from 'react';
import gallery1 from '../assets/2 (11).jpeg';
import gallery2 from '../assets/2 (33).jpeg';
import gallery3 from '../assets/2 (14).jpeg';
import gallery4 from '../assets/2 (15).jpeg';
import gallery5 from '../assets/1 (5).jpeg';
import gallery6 from '../assets/2 (7).jpeg';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { 
      id: 1, 
      src: gallery1, 
      alt: 'Beach view',
      title: 'Sunset Beach',
      description: 'Experience breathtaking sunsets from our private beach access.'
    },
    { 
      id: 2, 
      src: gallery2, 
      alt: 'Cottage exterior',
      title: 'Coastal Charm',
      description: 'Our charming cottage combines modern comfort with coastal elegance.'
    },
    { 
      id: 3, 
      src: gallery3, 
      alt: 'Living room',
      title: 'Spacious Living',
      description: 'Relax in our spacious living area with panoramic ocean views.'
    },
    { 
      id: 4, 
      src: gallery4, 
      alt: 'Bedroom',
      title: 'Luxury Bedrooms',
      description: 'Rest in comfort with our premium bedding and ocean breeze.'
    },
    { 
      id: 5, 
      src: gallery5, 
      alt: 'Kitchen',
      title: 'Gourmet Kitchen',
      description: 'Cook with ease in our fully equipped modern kitchen.'
    },
    { 
      id: 6, 
      src: gallery6, 
      alt: 'Sunset view',
      title: 'Spacious Living',
      description: 'Relax in our spacious living area with panoramic ambience.'
    },
  ];

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Photo Gallery</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our beautiful beach cottage through these stunning images. Click on any image to view it in full size and learn more about each space.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                    Click to view details
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full mx-4">
              <div className="relative">
                <button
                  onClick={closeImage}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={prevImage}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                      Previous
                    </button>
                    <button
                      onClick={nextImage}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery; 