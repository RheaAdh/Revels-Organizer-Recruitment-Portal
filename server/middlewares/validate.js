const { body, validationResult } = require("express-validator");

const organiserValidationRules = () => {
  return [
    body("name", "Name is required.").not().isEmpty(),
    body("email", "Enter a valid Email.").isEmail(),
    body("registration_no", "Enter a valid Registration Number.")
      .not()
      .isEmpty()
      .custom((registration_no) => {
        if (isNaN(registration_no)) {
          throw new Error("Check Registration Number");
        } else {
          return true;
        }
      }),

    body("phone", "Minimum length of a mobile number is 10.")
      .isLength({
        min: 10,
      })
      .custom((phone) => {
        if (isNaN(phone)) {
          console.log(typeof phone);
          throw new Error("Check mobiles  number");
        } else if (`${phone}`.includes("+")) {
          throw new Error("Check mobile number");
        } else {
          return true;
        }
      }),
    body("branch", "Branch is required").not().isEmpty(),
    body("cgpa", "CGPA is required.")
      .not()
      .isEmpty()
      .custom((cgpa) => {
        if (isNaN(cgpa)) {
          throw new Error("Check CGPA");
        } else if (cgpa < 6 || cgpa > 10) {
          throw new Error("CGPA not eligible");
        } else {
          return true;
        }
      }),

    body("pref_1").custom((pref_1) => {
      if (pref_1 === "Preference 1") {
        throw new Error("Choose preference 1");
      } else {
        return true;
      }
    }),
    body("slot_1").custom((slot_1) => {
      if (slot_1 === -1) {
        throw new Error("Choose a slot");
      } else {
        return true;
      }
    }),
  ];
};

const organiserValidate = (req, res, next) => {
  const errorArray = validationResult(req);
  if (errorArray.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errorArray
    .array()
    .map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.send({ success: false, msg: extractedErrors });
};

module.exports = {
  organiserValidate,
  organiserValidationRules,
};
