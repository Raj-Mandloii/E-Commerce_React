const User = require("../models/userModel");

const jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");


const authMiddleware = asynchandler(async (req, res, next) => {

    console.log("Inside uth middleware",req.originalUrl)
  let token;

  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.SECRET);
        console.log("DECODED",decoded)
        const user = await User.findById(decoded?._id);
        console.log("User",user)
        req.user = user;
        next();
      }
    } catch (e) {
      // console.log("error: " + e)
      throw new Error("Invalid token! Please log in again");
    }
  } else {
    throw new Error("No authorization attached to header");
  }
});

const isAdmin = asynchandler(async (req, res, next) => {
    
    const {email} = req.user;
  
    const adminUser = await User.findById({email})
    console.log(adminUser)
    if(adminUser.role !== "admin") {
        console.log()
        throw new Error("You are not admin")
    } else {
        console.log("IN THE NEXT PHASE")
        next();
    }
});

module.exports = { authMiddleware, isAdmin };
