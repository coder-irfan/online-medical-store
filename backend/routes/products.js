const express = require("express");
const router = express.Router();
const Product = require("../models/Products");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update images from svg to webp
app.put("/change-images", async (req, res) => {
  try {
    const products = await Product.find();

    for (let p of products) {
      if (p.image) {
        p.image = p.image.replace(/\.jpg|\.svg/g, ".webp");
        await p.save();
      }
    }

    res.status(200).json({ message: "All images updated to webp!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to change images!" });
  }
});

module.exports = router;
