const { Organiser } = require("../../models/organiser");
const main = require("../../utils/confirmationEmail");
const constructTemplate = require("../../utils/registrationEmail");
const { Category } = require("../../models/category");
const createSheet = require("../../utils/createSheet");

const categoryOrganiserSheet = async (req, res) => {
  try {
    const { category } = req.params;
    // if (category == req.category.category) {
    const response = await Organiser.find({
      $or: [{ "pref_1.category": category }, { "pref_2.category": category }],
    }).sort({ name: 1 });
    if (response) {
      await createSheet(response).then((file) => {
        file.write(category + "_registrations.xlsx", res);
      });
    }
    // } else return res.json({ success: false, message: "Please Try Again" });
  } catch (error) {
    return res.json({ success: false, message: "Please Try Again" });
  }
};

const categoryOrganisers = async (req, res) => {
  try {
    const { category } = req.params;
    if (category == req.category.category) {
      const response = await Organiser.find({
        $or: [{ "pref_1.category": category }, { "pref_2.category": category }],
      }).sort({ name: 1 });
      return res.json({ success: true, data: response });
    }
    throw new Error();
  } catch (error) {
    return res.json({ success: false, message: "Please Try Again" });
  }
};

const setOrganiserStatus = async (req, res) => {
  try {
    const { organiserId, status } = req.body;
    const cat = await Organiser.findOne({
      id: organiserId,
    });
    if (cat.pref_1.category == req.category.category) {
      response = await Organiser.updateOne(
        {
          id: organiserId,
        },
        {
          $set: {
            "pref_1.status": status,
          },
        }
      );
    } else if (cat.pref_2.category == req.category.category) {
      response = await Organiser.updateOne(
        {
          id: organiserId,
        },
        {
          $set: {
            "pref_2.status": status,
          },
        }
      );
    } else throw new Error();
    return res.json({
      success: true,
      message: `status set to ${status} successfully`,
    });
  } catch (error) {
    return res.json({ success: false, message: "Please Try Again" });
  }
};

const confirmApplicant = async (req, res) => {
  try {
    const { organiserId } = req.body;
    console.log(organiserId);
    const org = await Organiser.findById(organiserId);
    var cat = "";
    if (org.pref_1.status == 1) {
      cat = org.pref_1.category;
      org.pref_1.status = 3;
    } else if (org.pref_2.status == 1) {
      cat = org.pref_2.category;
      org.pref_2.status = 3;
    }
    await org.save();
    console.log(org);

    const status = "Congratulations!";
    const body = `You have been selected as an organiser for ${cat} Category - REVELS '22. You will be added to groups shortly`;
    const message = constructTemplate(org.name, status, body);
    main(org.email, "Selected as Organizer - REVELS '22", message);
    return res.json({
      success: true,
      msg: "Successfully Confirmed Applicant!",
    });
  } catch (error) {
    return res.json({ success: false, message: "Please Try Again" });
  }
};
module.exports = {
  confirmApplicant,
  createSheet,
  categoryOrganiserSheet,
  categoryOrganisers,
  setOrganiserStatus,
};
