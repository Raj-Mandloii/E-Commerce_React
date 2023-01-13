
const bcrypt = require("bcrypt");

const UserModel = require("../models/userModel");

const createUser = async (req, res) => {
    const {firstname,lastname,mobile,email,password} = req.body
  const exist1 = await UserModel.find({ email });
  if (exist1.length > 0) {
    res.status(400).json("Already regestered Please Login");
  } else {
    bcrypt.hash(password, 6, async (err, hash) => {
      if (err) {
        res.status(400).json("Already regestered please Login");
      }
      const new_user = new UserModel({ email, password: hash, firstname,lastname,mobile });
      await new_user.save();
      res.status(200).json({ msg: "Signup success" });
    });
  }
};

module.exports = createUser;
