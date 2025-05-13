import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookNow = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "standard",
    roomName: "Standard Room",
    price: 1000, // Price per night in ₹
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", { state: { bookingDetails: formData } });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Book Your Stay</h2>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" className="border p-2 rounded" />
            <input name="email" value={formData.email} onChange={handleChange} required placeholder="Email" type="email" className="border p-2 rounded" />
            <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone" className="border p-2 rounded" />
            <select name="roomType" value={formData.roomType} onChange={handleChange} className="border p-2 rounded">
              <option value="standard">Standard Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Suite</option>
            </select>
            <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required className="border p-2 rounded" />
            <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required className="border p-2 rounded" />
            <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" max="4" required className="border p-2 rounded" />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Proceed to Payment</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookNow;
