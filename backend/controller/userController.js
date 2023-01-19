const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/userModel");

const { generateToken } = require("../config/jwtToken");
const dotenv = require("dotenv").config();
const validateMongoDbId = require("../utils/validateMongoDbId");
const jwt = require("jsonwebtoken");
const { generaterefreshToken } = require("../config/refreshToken");
const { JsonWebTokenError } = require("jsonwebtoken");
// Create User
const createUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, mobile, email, password } = req.body;
  try {
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
  } catch (e) {
    console.log(e);
  }
});

// Login User
const login = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const findUser = await UserModel.findOne({ email });
  // console.log("IDDDDDDDDDDD::::",findUser)
  if (findUser) {
    const refreshToken = await generaterefreshToken(findUser?._id);
    // console.log("refresh token ::::::::",refreshToken);
    // const updateUser = await UserModel.findByIdAndUpdate(findUser._id,
    //   { refreshToken: refreshToken },
    //   { new: true }
    // );
    let docs = UserModel.findByIdAndUpdate(
      findUser?._id,
      { refreshToken: refreshToken },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated User : ", docs);
        }
      }
    );
    //  console.log("Update",updateUser)
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// handle refresh token

const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) {
    throw new Error("No refresh token in cookie");
  }

  const refreshToken = cookie.refreshToken;
  console.log("Refresh token: " + refreshToken);
  const user = await UserModel.findOne({ refreshToken });
  if (!user) throw new Error("No refresh token present in DB");
  jwt.verify(refreshToken, process.env.SECRET, (error, decoded) => {
    if (error || user.id !== decoded.id)
      throw new Error("Something went wrong with refresh token");
    const accessToken = generateToken(user?._id);
    res.send({ accessToken });
  });
  res.json(user);
});

// logout user

const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) {
    throw new Error("No refresh token in cookie");
  }
  const refreshToken = cookie.refreshToken;
  const user = await UserModel.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    res.sendStatus(204);
  }
  await UserModel.findOneAndUpdate(refreshToken, {
    refreshToken: "",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204);
});

// Get all users

const getAllUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await UserModel.find();
    res.json(getUsers);
  } catch (e) {
    throw new Error(e);
  }
});

// Get single user

const getSingleUser = asyncHandler(async (req, res) => {
  console.log("req id", req.params.id);
  const { id } = req.params;

  try {
    const singleUser = await UserModel.findById({ id });
    console.log("SINGLE USER", singleUser);
    res.json({ user: singleUser });
  } catch (e) {
    throw new Error(e);
  }
});

// Delete a User

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.id;

  try {
    const singleUser = await UserModel.findByIdAndDelete(id);

    res.json({ userDeleted: singleUser });
  } catch (e) {
    throw new Error(e);
  }
});

// Update a user

const updateUser = asyncHandler(async (req, res) => {
  console.log("Updating use:", req.user);
  const { _id: id } = req.user;
  validateMongoDbId(id);
  try {
    const update = await UserModel.findByIdAndUpdate(
      id,
      {
        firstname: req?.body.firstname,
        lastname: req?.body.lastname,
        mobile: req?.body.mobile,
        email: req?.body.email,
      },
      { new: true }
    );
    console.log("update", update);
    res.json(update);
  } catch (e) {
    throw new Error(e);
  }
});

// Block a user

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const block = await UserModel.findByIdAndUpdate(
      id,
      { isBlocked: true },
      { new: true }
    );
    res.json({ msg: "User blocked" });
  } catch (e) {
    throw new Error(e);
  }
});

const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const unblock = await UserModel.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    );
    res.json({ msg: "User Unblocked" });
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = {
  createUser,
  login,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
};
