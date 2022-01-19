const { Category } = require("../models/category");
const { Organiser } = require("../models/organiser");
const main = require("../utils/confirmationEmail");
const constructTemplate = require("../utils/registrationEmail");

const getDays = (date) => {
  regStart = new Date("2022/01/29");
  return parseInt((date - regStart) / (1000 * 60 * 60 * 24), 10);
};

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

    // if (pref_1 == "Preference 1" || slot_1 == -1) {
    //   return res.send({
    //     success: false,
    //     msg: "1st Preference is neccessary!",
    //   });
    // }

    // if (pref_2 != "Preference 2" && slot_2 == -1) {
    //   return res.send({
    //     success: false,
    //     msg: "Please select slot for 2nd Preference",
    //   });
    // }

    const slot1 = getDays(new Date(slot_1));
    const slot2 = getDays(new Date(slot_2));

    console.log(slot1);
    console.log(slot2);

    let category1 = null,
      category2 = null;

    category1 = await Category.findOne({
      category: pref_1,
    });
    //no.of slots for a day will be entered by category heads inside slots array of each category
    if (category1.slots[slot1] <= 0) {
      return res.send({
        success: false,
        msg: `Selected Slot not available for ${pref_1}. Check again!`,
      });
    }

    if (pref_2 != "Preference 2") {
      category2 = await Category.findOne({
        category: pref_2,
      });

      if (category2.slots[slot2] <= 0) {
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

    category1.slots[slot1]--;
    await Category.updateOne(
      { category: pref_1 },
      { $set: { slots: category1.slots } }
    );

    if (pref_2 != "Preference 2") {
      category2.slots[slot2]--;
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
  console.log(cat);

  return res.send({ success: true, msg: "hello there" });
};

module.exports = {
  register,
  addData,
};
