const express = require("express");
const {
  createUser,
  login,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/getallusers", getAllUser);
router.get("/:id", getSingleUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
