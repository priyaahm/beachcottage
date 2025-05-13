import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingDetails } = location.state || {};
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!bookingDetails) {
      navigate("/booking");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const nights = bookingDetails
    ? dayjs(bookingDetails.checkOut).diff(dayjs(bookingDetails.checkIn), "day")
    : 1;

  const amount = (bookingDetails?.price || 0) * nights * 100;

  const handlePayment = () => {
    const options = {
      key: "rzp_test_IDx1KRc2nR8kJ7",
      amount,
      currency: "INR",
      name: "Paradise Beach Cottage",
      description: `Room Booking - ${bookingDetails?.roomName || "Room"}`,
      image: "/logo.png",
      handler: function (response) {
        console.log("Payment success", response);
        navigate("/booking-confirmation");
      },
      prefill: {
        name: bookingDetails?.name,
        email: bookingDetails?.email,
        contact: bookingDetails?.phone,
      },
      theme: {
        color: "#2563eb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>

      <ul className="space-y-2 mb-6">
        <li>Room: {bookingDetails?.roomType}</li>
        <li>Guests: {bookingDetails?.guests}</li>
        <li>
          Check-in: {dayjs(bookingDetails?.checkIn).format("DD MMM YYYY")}
        </li>
        <li>
          Check-out: {dayjs(bookingDetails?.checkOut).format("DD MMM YYYY")}
        </li>
        <li>Price per night: ₹{bookingDetails?.price}</li>
        <li>Total Nights: {nights}</li>
        <li className="font-semibold text-blue-700">
          Total: ₹{(amount / 100).toFixed(2)}
        </li>
      </ul>

      <button
        onClick={handlePayment}
        disabled={!scriptLoaded}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {!scriptLoaded ? "Loading..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Payment;
git add .
git commit -m "Update project with Razorpay fix"
git push
