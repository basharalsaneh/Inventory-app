const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUser,
} = require("../controllers/UserController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getuser", protect, getUser);

module.exports = router;
