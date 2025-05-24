const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_eJ3xYlzzs7p5VC",  
  key_secret: "3srpVrFY02x1LV7EETIKJiaX",  
});

router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100,  
      currency: "INR",
      payment_capture: 1,
    });

    console.log("Order details:", order);

    return res.status(200).json({
      order: order,
    });

  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return res.status(500).json({
      error: "Server error while creating order",
    });
  }
});

module.exports = router;
