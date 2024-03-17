const express = require("express");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");
const authMiddeleware = require("../middlewares/authMiddeleware");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddeleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddeleware, getInventoryController);
//GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddeleware,
  getRecentInventoryController
);

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddeleware,
  getInventoryHospitalController
);

//GET DONAR RECORDS
router.get("/get-donars", authMiddeleware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddeleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-orgnaisation", authMiddeleware, getOrgnaisationController);

//GET orgnaisation RECORDS
router.get(
  "/get-orgnaisation-for-hospital",
  authMiddeleware,
  getOrgnaisationForHospitalController
);

module.exports = router;
