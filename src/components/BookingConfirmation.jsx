import React from "react";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";


const BookingConfirmation = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};
  const navigate = useNavigate();

  if (!bookingDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Booking details not found!</p>
      </div>
    );
  }

  const nights = dayjs(bookingDetails.checkOut).diff(dayjs(bookingDetails.checkIn), "day");
  const totalAmount = bookingDetails.price * nights;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6">Booking Confirmation</h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold text-green-700 mb-2">Your booking was successful!</h2>
          <p className="text-green-600">Thank you for booking with us. We look forward to hosting you!</p>
        </div>

        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold">Booking Details</h2>
          <div className="flex justify-between">
            <span>Room Type:</span>
            <span>{bookingDetails.roomName}</span>
          </div>
          <div className="flex justify-between">
            <span>Check-in:</span>
            <span>{dayjs(bookingDetails.checkIn).format("MMMM D, YYYY")}</span>
          </div>
          <div className="flex justify-between">
            <span>Check-out:</span>
            <span>{dayjs(bookingDetails.checkOut).format("MMMM D, YYYY")}</span>
          </div>
          <div className="flex justify-between">
            <span>Number of Nights:</span>
            <span>{nights}</span>
          </div>
          <div className="flex justify-between">
            <span>Guests:</span>
            <span>{bookingDetails.guests}</span>
          </div>
          <div className="flex justify-between">
            <span>Price per Night:</span>
            <span>₹{bookingDetails.price}</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between">
              <span className="font-semibold">Total Amount:</span>
              <span className="font-semibold">₹{totalAmount}</span>
            </div>
          </div>
        </div>

        <div className="text-center">
        <button
  onClick={() => navigate("/")}
  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
>
  Go to Home
</button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
