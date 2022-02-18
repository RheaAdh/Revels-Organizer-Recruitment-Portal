const { Category } = require("../models/category");
const { Cultural } = require("../models/cultural");
const { Organiser } = require("../models/organiser");
const main = require("../utils/confirmationEmail");
const constructTemplate = require("../utils/registrationEmail");
const { sendEmailNotif } = require("../utils/ses");

// const getDays = (date) => {
//   regStart = new Date("2022/01/29");
//   return parseInt((date - regStart) / (1000 * 60 * 60 * 24), 10);
// };

const register = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      phone,
      email,
      registration_no,
      cgpa,
      branch,
      pref_1,
      pref_2,
      exp,
    } = req.body;

    let temp = await Organiser.findOne({
      $and: [{ $or: [{ phone }, { email }, { registration_no }] }, { type: 2 }],
    });

    if (temp) {
      if (
        !(temp.pref_1.status === 2 && temp.pref_2.status === 2) ||
        !(temp.pref_1.status === 4 && temp.pref_2.status === 4)
      ) {
        return res.send({
          success: false,
          msg: "User already registered. Please wait while the cultural category interviews are in process. ",
        });
      }
    }
    temp = await Organiser.findOne({
      $and: [{ $or: [{ phone }, { email }, { registration_no }] }, { type: 1 }],
    });
    if (temp) {
      return res.send({
        success: false,
        msg: "User with similiar credentials already registered.",
      });
    }

    let id = 1;
    let id_obj = await Organiser.find({}, { id: 1, _id: 0 })
      .sort({ id: -1 })
      .limit(1);

    if (id_obj[0]) {
      id = id_obj[0].id + 1;
    }
    const pref1 = {
      category: pref_1,
      status: 0,
    };
    const pref2 = {
      category: pref_2,
      status: 0,
    };
    const organiser = new Organiser({
      id,
      name,
      phone,
      email,
      registration_no,
      cgpa,
      branch,
      pref_1: pref1,
      pref_2: pref2,
      experience: exp,
    });

    const org = await organiser.save();

    const status = "Registration Successful!";
    const body =
      "You have successfully registered for REVELS'22 Organiser Call. Our team will get back to you shortly";
    const message = constructTemplate(org.name, status, body);

    sendEmailNotif(
      org.email,
      "Thank you for registering for Revels'22 Organiser",
      message
    );
    return res.json({ success: true, msg: "Successfully Registered!" });
  } catch (error) {
    console.log(error.toString());
    return res
      .status(500)
      .json({ message: "Registeration failed. Please Try Again !!" });
  }
};

const cultural = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      registration_no,
      cgpa,
      branch,
      pref_1,
      pref_2,
      exp,
    } = req.body;

    let temp = await Organiser.findOne({
      $and: [{ $or: [{ phone }, { email }, { registration_no }] }, { type: 1 }],
    });

    if (temp) {
      if (
        !(temp.pref_1.status === 2 && temp.pref_2.status === 2) ||
        !(temp.pref_1.status === 4 && temp.pref_2.status === 4)
      ) {
        return res.send({
          success: false,
          msg: "User already registered. Please wait while the supporting category interviews are in process. ",
        });
      }
    }
    temp = await Organiser.findOne({
      $and: [{ $or: [{ phone }, { email }, { registration_no }] }, { type: 2 }],
    });
    if (temp) {
      return res.send({
        success: false,
        msg: "User with similiar credentials already registered.",
      });
    }

    let id = 1;
    let id_obj = await Organiser.find({}, { id: 1, _id: 0 })
      .sort({ id: -1 })
      .limit(1);

    if (id_obj[0]) {
      id = id_obj[0].id + 1;
    }
    const pref1 = {
      category: pref_1,
      status: 0,
    };
    const pref2 = {
      category: pref_2,
      status: 0,
    };
    const organiser = new Organiser({
      id,
      name,
      phone,
      email,
      registration_no,
      cgpa,
      branch,
      pref_1: pref1,
      pref_2: pref2,
      experience: exp,
      type: 2,
    });

    const org = await organiser.save();

    const status = "Registration Successful!";
    const body =
      "You have successfully registered for REVELS'22 Organiser Call. Our team will get back to you shortly";
    const message = constructTemplate(org.name, status, body);

    sendEmailNotif(
      org.email,
      "Thank you for registering for Revels'22 Organiser",
      message
    );
    return res.json({ success: true, msg: "Successfully Registered!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Registeration failed. Please Try Again !!" });
  }
};

const addData = async (req, res) => {
  const slots = [];
  for (let i = 0; i < 28; i++) {
    slots.push(1);
  }

  const category1 = new Category({
    category: "APP",
    slots: slots,
  });

  const category2 = new Category({
    category: "SYS",
    slots: slots,
  });

  await category1.save();
  await category2.save();

  const cat = await Category.find({});
  return res.send({ success: true, msg: "hello there" });
};

module.exports = {
  register,
  cultural,
  addData,
};
