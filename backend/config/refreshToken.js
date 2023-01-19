const jwt = require("jsonwebtoken");

const generaterefreshToken = (id) => {
  console.log("Generating refresh token",process.env.SECRET)
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};

module.exports = { generaterefreshToken };
