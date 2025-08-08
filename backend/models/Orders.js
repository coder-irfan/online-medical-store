const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      _id: String,
      name: String,
      image: String,
      price: Number,
      quantities: Number,
    },
  ],
  totalAmout: Number,
  date: Date,
});

module.exports = mongoose.model("Order", orderSchema);
