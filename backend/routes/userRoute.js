const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  updateUser,
  changePassword,
} = require("../controllers/UserController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getuser", protect, getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateuser", protect, updateUser); // Don't forget to add protect
router.patch("/changepassword", protect, changePassword); // Don't forget to add protect

module.exports = router;
