const express = require("express");
const authMiddeleware = require("../middlewares/authMiddeleware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes

//GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddeleware,
  adminMiddleware,
  getDonarsListController
);
//GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddeleware,
  adminMiddleware,
  getHospitalListController
);
//GET || ORG LIST
router.get("/org-list", authMiddeleware, adminMiddleware, getOrgListController);
// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddeleware,
  adminMiddleware,
  deleteDonarController
);

//EXPORT
module.exports = router;
