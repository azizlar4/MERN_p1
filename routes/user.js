//1
const express = require("express");
const { register, login } = require("../controllers/user");
const isAuth = require("../middleware/isAuth");
const {
  registerValidation,
  loginValidation,
  validation,
} = require("../middleware/validator");

//2
const router = express.Router();

//register
router.post("/register", registerValidation(), validation, register);
//login
router.post("/login", loginValidation(), validation, login);

//current user
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
