const createOrder = async (amount) => {
  const res = await fetch("http://localhost:5000/api/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });

  if (!res.ok) throw new Error("Failed to create Razorpay order");
  return res.json(); // { id: "order_xyz", amount, currency, etc. }
};

export default createOrder;
