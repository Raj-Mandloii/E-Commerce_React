const User = require("../models/userModel");

const jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");
const authMiddleware = asynchandler(async (req, res) => {
  let token;

  if (req?.header?.authorization?.startwith("Bearer")) {
    token = req.header.authorization.split(" ")[1];
    try {
        if(token){
            const decoded = jwt.verify(token,process.env.SECRET);
            console.log(decoded);
        }
    } catch (e) {
        throw new Error("Invalid token! Please log in again")
    }
  } else {
    throw new Error("No authorization attached to header");
  }
});

module.exports = authMiddleware;
