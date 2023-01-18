const express = require("express");
const {
  createUser,
  login,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/getallusers", getAllUser);
router.get("/:id",authMiddleware, getSingleUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
