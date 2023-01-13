const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: "3d" });
};

module.exports = { generateToken };
