const { Organiser } = require("../models/organiser");
const main = require("../utils/confirmationEmail");
const constructTemplate = require("../utils/registrationEmail");

const register = async (req, res) => {
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
      slot_1,
      slot_2,
    } = req.body;

    if (pref_1 == "Preference 1" || slot_1 == -1) {
      return res.send({
        success: false,
        msg: "1st Preference is neccessary!",
      });
    }

    if (pref_2 != "Preference 2" && slot_2 == -1) {
      return res.send({
        success: false,
        msg: "Please select slot for 2nd Preference",
      });
    }

    let category1 = null,
      category2 = null;

    category1 = await Category.findOne({
      category: pref_1,
    });

    if (category1.slots[slot_1] <= 0) {
      return res.send({
        success: false,
        msg: `Selected Slot not available for ${pref_1}. Check again!`,
      });
    }

    if (pref_2 != "Preference 2") {
      category2 = await Category.findOne({
        category: pref_2,
      });

      if (category2.slots[slot_2] <= 0) {
        return res.send({
          success: false,
          msg: `Selected Slot not available for ${pref_2}. Check again!`,
        });
      }
    }

    const temp = await Organiser.findOne({
      $or: [{ phone }, { email }, { registration_no }],
    });

    if (temp) {
      return res.send({
        success: false,
        msg: "User with similiar credentials already registered!",
      });
    }

    let id = 1;
    let id_obj = await Organiser.find({}, { id: 1, _id: 0 })
      .sort({ id: -1 })
      .limit(1);

    if (id_obj[0]) {
      id = id_obj[0].id + 1;
    }

    const organiser = new Organiser({
      id,
      name,
      phone,
      email,
      registration_no,
      cgpa,
      branch,
      pref_1,
      pref_2,
      slot_1,
      slot_2,
    });

    const org = await organiser.save();

    category1.slots[slot_1]--;
    await Category.updateOne(
      { category: pref_1 },
      { $set: { slots: category1.slots } }
    );

    if (pref_2 != "Preference 2") {
      category2.slots[slot_2]--;
      await Category.updateOne(
        { category: pref_2 },
        { $set: { slots: category2.slots } }
      );
    }
    const message = constructTemplate(org.name);
    main(
      org.email,
      "Thank you for registering for Revels'22 Oraniser",
      message
    );
    return res.json({ success: true, msg: "Successfully Registered!" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Registeration failed. Please Try Again !!" });
  }
};

module.exports = {
  register,
};
