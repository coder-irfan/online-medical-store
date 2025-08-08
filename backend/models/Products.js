const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  price: { type: Number, required: true },
  description: { type: String },
  inStock: { type: Boolean, default: true },
  label: { type: String },
});

const Products = mongoose.model("Product", productSchema);

module.exports = Products;
