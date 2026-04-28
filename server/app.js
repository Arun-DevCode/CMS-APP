const express = require("express");
const cors = require("cors");

// Import routes
const UserRouter = require("./src/routes/user.route");
const productRouter = require("./src/routes/product.route");

// App configure
const app = express();

// App middleware
app.use(express.json()); // body parsing : JSON -> Object
app.use(cors());

// App Router
app.use("/api/auth", UserRouter);
app.use("/api/product", productRouter);

module.exports = app;
