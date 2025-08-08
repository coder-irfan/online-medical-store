const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Products");
const Order = require("./models/Orders");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

const orderRoutes = require("./routes/orders");
app.use("/api/orders", orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((error) => console.error("MongoDB Error", error));

app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/api/products/bulk", async (req, res) => {
  try {
    const products = await Product.insertMany(req.body);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/api/products/bulk-delete", async (req, res) => {
  try {
    await Product.deleteMany({});
    res.status(200).json({ message: "All products deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete products" });
  }
});

app.use("/images", express.static(path.join(__dirname, "public/images")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
