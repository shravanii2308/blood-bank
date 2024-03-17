const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddeleware = require("../middlewares/authMiddeleware");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//GET CURRENT USER || GET
// router.get("/current-user", authMiddelware, currentUserController);
router.get("/current-user", authMiddeleware, currentUserController);

module.exports = router;
