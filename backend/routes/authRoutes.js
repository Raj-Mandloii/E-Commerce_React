const express = require("express");
const {
  createUser,
  login,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout
} = require("../controller/userController");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", createUser);

router.post("/login", login);

router.get("/getallusers", getAllUser);

router.get("/refresh", handleRefreshToken);

router.get("/logout", logout);


router.get("/:id", authMiddleware, isAdmin, getSingleUser);

router.delete("/:id", deleteUser);

router.put("/edit-user", authMiddleware, updateUser);

router.put("/block-user/:id", authMiddleware, blockUser);

router.put("/unblock-user/:id", authMiddleware, unblockUser);


module.exports = router;
