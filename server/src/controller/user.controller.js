const Account = require("../models/user.model");
const { genHashData } = require("../utils/genHash");
const { genAccessToken } = require("../utils/token");

// 1. Create-account
const createAccount = async (req, res) => {
  try {
    // collect incoming data
    const { name, email, password } = req.body;

    // validate data
    if ((!name || !email, !password)) {
      return res.json("fill all the required fields!");
    }

    // Gen Hash : Secure Password
    const hashData = await genHashData(password);
    if (hashData.isError) {
      throw new Error("Failed to secure password!");
    }

    // store in db
    const newUser = new Account({ name, email, password: hashData.data }); // name , email , Hashed Password
    await newUser.save();

    if (!newUser) {
      throw new Error("failed to create user account!");
    }

    // send respond to client
    res.json({ message: "User Account Created", data: newUser });
  } catch (error) {
    if (error) {
      res.json({ message: error, error: true });
    }
  }
};

// 2. Login - User
const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    //check user exits
    const isUserFound = await Account.findOne({ email }); // {}
    if (!isUserFound) {
      return res.json({
        error: true,
        message: `Invalid credentials.`,
      });
    }

    // Gen : token
    const { isError, token, message } = genAccessToken({
      email: isUserFound.email,
      role: isUserFound.role,
    });
    if (isError) {
      throw new Error("failed to generate token");
    }

    res.status(200).json({ isError, token, message: "User Login success" });
  } catch (error) {
    res.json(`failed to find user!`);
  }
};

// 3. Get profile - user
const getUserProfile = async (req, res) => {
  const email = req?.payload.email || "";

  try {
    // find user
    const profile = await Account.findOne({ email });
    if (!profile) {
      throw new Error("No user found. Please login first!");
    }
    // success
    res
      .status(200)
      .json({ message: "User Profile fetched!", error: false, data: profile });
  } catch (error) {
    if (error) {
      res.status(401).json({ error: true, message: error });
    }
  }
};

// 4. Remove - account
const removeUserAccount = async (req, res) => {};

// 5. forget-Password
const forgetPassword = async (req, res) => {};

module.exports = { createAccount, LoginUser, getUserProfile };
