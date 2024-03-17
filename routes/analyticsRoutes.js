const express = require("express");
const authMiddeleware = require("../middlewares/authMiddeleware");
const {
  bloodGroupDetailsContoller,
} = require("../controllers/analyticsController");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddeleware, bloodGroupDetailsContoller);

module.exports = router;
