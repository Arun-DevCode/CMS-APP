const UserRouter = require("express").Router();
const Account = require("../models/user.model");

// Import:controller
const userController = require("../controller/user.controller");

// middleware
const requireAuth = require("../middleware/auth");
const requireRole = require("../middleware/requireRole");

// Pubic Routes - Any user can access
UserRouter.post("/sign-up", userController.createAccount);
UserRouter.post("/sign-in", userController.LoginUser);

// Private Routes
UserRouter.get(
  "/get-profile",
  requireAuth,
  // requireRole("admin"),
  userController.getUserProfile,
);

module.exports = UserRouter;
