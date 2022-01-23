const express = require("express");
const {
  categoryOrganisers,
  categoryOrganiserSheet,
  setOrganiserStatus,
} = require("./admin/organiser.js");
const router = express.Router();
const { register } = require("./reg.js");
const {
  organiserValidate,
  organiserValidationRules,
} = require("../middlewares/validate");
const {
  catRegister,
  login,
  logout,
  getCategoryFromToken,
  updateSlot,
} = require("./admin/auth.js");
const { verifyJwtInUser } = require("../utils/jwt.js");

//Client Routes
router.post(
  "/register",
  organiserValidationRules(),
  organiserValidate,
  register
);

//ADMIN ROUTES
router.post("/categories/register", catRegister);
router.post("/admin/login", login);
router.post("/admin/logout", logout);
router.get("/admin/category/:token", verifyJwtInUser, getCategoryFromToken);
router.get("/admin/registrations/:category", categoryOrganiserSheet);
router.get("/admin/organisers/:category", verifyJwtInUser, categoryOrganisers);
router.patch("/admin/organiser/status", verifyJwtInUser, setOrganiserStatus);
router.post("/admin/updateslot/:categoryId", verifyJwtInUser, updateSlot);

module.exports = router;
