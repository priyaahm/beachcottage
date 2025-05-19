import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingDetails } = location.state || {};
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [paymentId, setPaymentId] = useState(null);

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

  const calculateAmount = () => {
    const checkIn = dayjs(bookingDetails?.checkIn);
    const checkOut = dayjs(bookingDetails?.checkOut);
    let weekdays = 0;
    let weekends = 0;

    for (let date = checkIn; date.isBefore(checkOut); date = date.add(1, "day")) {
      const day = date.day(); // Sunday = 0, Saturday = 6
      if (day === 0 || day === 6) {
        weekends += 1;
      } else {
        weekdays += 1;
      }
    }

    const weekdayRate = 15000;
    const weekendRate = 25000;
    const total = weekdays * weekdayRate + weekends * weekendRate;

    return {
      amount: total * 100, // Razorpay uses paise
      weekdays,
      weekends,
      total,
    };
  };

  const { amount, weekdays, weekends, total } = calculateAmount();

  const handlePayment = () => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount,
      currency: "INR",
      name: "Paradise Beach Cottage",
      description: `Room Booking - ${bookingDetails?.roomName || "Room"}`,
      image: "/logo.png",
      handler: function (response) {
        console.log("Payment success", response);
        setPaymentId(response.razorpay_payment_id);
      },
      prefill: {
        name: bookingDetails?.name || "Customer",
        email: bookingDetails?.email || "customer@example.com",
        contact: contactNumber,
      },
      theme: {
        color: "#2563eb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const checkPaymentStatus = () => {
    if (paymentId) {
      navigate("/booking-confirmation", {
        state: { bookingDetails },
      });
    } else {
      alert("Payment not completed yet.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>

      <ul className="space-y-2 mb-6">
        <li>Room: {bookingDetails?.roomType}</li>
        <li>Guests: {bookingDetails?.guests}</li>
        <li>Check-in: {dayjs(bookingDetails?.checkIn).format("DD MMM YYYY")}</li>
        <li>Check-out: {dayjs(bookingDetails?.checkOut).format("DD MMM YYYY")}</li>
        <li>Weekdays: {weekdays} × ₹15,000</li>
        <li>Weekends: {weekends} × ₹25,000</li>
        <li className="font-semibold text-blue-700">
          Total: ₹{total.toLocaleString()}
        </li>
      </ul>

      <label className="block mb-4">
        <span className="block text-gray-700 font-medium mb-1">
          Contact Number:
        </span>
        <input
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
      </label>

      <button
        onClick={handlePayment}
        disabled={!scriptLoaded || !contactNumber}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50 mb-4"
      >
        {!scriptLoaded ? "Loading..." : "Pay Now"}
      </button>

      {paymentId && (
        <button
          onClick={checkPaymentStatus}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 ml-4"
        >
          Check Payment Status
        </button>
      )}
    </div>
  );
};

export default Payment;
