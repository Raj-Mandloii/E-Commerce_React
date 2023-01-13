const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../config/jwtToken");
const dotenv = require("dotenv").config()
const createUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, mobile, email, password } = req.body;
  const exist1 = await UserModel.find({ email });
  if (exist1.length > 0) {
    throw new Error(`User Already Exists`);
  } else {
    bcrypt.hash(password, 6, async (err, hash) => {
      if (err) {
        res.status(400).json({ msg: "Already regestered please Login" });
      }
      const new_user = new UserModel({
        email,
        password: hash,
        firstname,
        lastname,
        mobile,
      });
      await new_user.save();
      res.status(200).json({ msg: "Signup success" });
    });
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await UserModel.findOne({ email });

    if (!oldUser) {
      return res.status(404).json("User not found");
    }

    const hashedpassword = await bcrypt.compare(password, oldUser.password);

    if (!hashedpassword) {
      return res.status(404).json({msg:"Password incorrect"});
    }
    const token = generateToken(oldUser._id)
    return res.status(200).json({ message: "Login Success", token });
  } catch (err) {
    
    return res.status(404).json("Something went wrong");
  }
});
module.exports = { createUser, login };
