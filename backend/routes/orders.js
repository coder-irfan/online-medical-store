const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post("/", async (req, res) => {
  try {
    const { userId, items, totalAmount, date } = req.body;

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      date,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
