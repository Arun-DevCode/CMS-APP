const express = require("express");

// Import model
const Product = require("../models/product.model");

// router config
const productRouter = express.Router();

// Route path - Public Route
productRouter.get("/get-products", async (req, res) => {
  try {
    const res = await Product.aggregate([
      {
        $match: { price: { $lte: 30 } },
      },
      {
        $sort: {
          price: 1,
        },
      },
    ]);
    console.log(res[0].price);
    // validate
    if (res.length !== 0) {
      throw new Error("No product found. create first");
    }
  } catch (error) {
    if (error) {
      res
        .status(404)
        .json({ message: "failed to fetch product!", error: true });
    }
  }
});

module.exports = productRouter;
