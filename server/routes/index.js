const express = require("express");
const { categoryOrganisers } = require("./admin/organiser.js");
const router = express.Router();
const { register, addData } = require("./reg.js");
const {
  organiserValidate,
  organiserValidationRules,
} = require("../middlewares/validate");
const { Organiser } = require("../models/organiser.js");

//Client Routes
router.post(
  "/register",
  organiserValidationRules(),
  organiserValidate,
  register
);
router.post("/add", addData);
//ADMIN ROUTES
router.get("/registrations/:category", categoryOrganisers);

module.exports = router;
