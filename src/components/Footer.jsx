import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3" />
                <p>290,Auroville Rd,Auroville,<br></br>
Kuilapalayam, Bommayapalayam,<br></br>
Tamil Nadu 605101, India</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3" />
                <p>+91 8525092210</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3" />
                <p>support@paradisebookings.in</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Paradise-Groups/61563457773817/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/paradisegroups.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="h-48 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952099.776213851!2d76.38634058948205!3d14.685854736819802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5366a66822014b%3A0x9c192a8677dd8601!2s290%2C%20Auroville%20Rd%2C%20Auroville%2C%20Kuilapalayam%2C%20Bommayapalayam%2C%20Tamil%20Nadu%20605101%2C%20India!5e0!3m2!1sen!2sus!4v1747640435312!5m2!1sen!2sus"
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

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()}. All rights reserved to Paradise Group of Resorts and Hotels.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 