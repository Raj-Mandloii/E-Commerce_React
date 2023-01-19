const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: "1d" });
};

module.exports = { generateToken };
