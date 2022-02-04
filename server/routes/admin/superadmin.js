const { Organiser } = require("../../models/organiser");
const { Category } = require("../../models/category");

const createSheet = require("../../utils/createSheet");
const category = require("../../models/category");

const AllOrganiserSheet = async (req, res) => {
  try {
    const response = await Organiser.find().sort({ name: 1 });

    if (response) {
      await createSheet(response).then((file) => {
        file.write("organisers.xlsx", res);
      });
    }
    // } else return res.json({ success: false, message: "Please Try Again" });
  } catch (error) {
    return res.json({ success: false, message: "Please Try Again" });
  }
};

const getCategories = async (req, res) => {
  try {
    // var l = [];
    if (req.category.category == "SUPERADMIN") {
      const categories = await Category.find({});
      // await categories.forEach(async (cat) => {
      //   console.log(cat.category);
      //   const x = await Organiser.count({
      //     $or: [
      //       { "pref_1.category": cat.category },
      //       { "pref_2.category": cat.category },
      //     ],
      //   });
      //   console.log(x);
      //   var c = {
      //     ...cat._doc,
      //     total_applicants: x,
      //   };
      //   l.push(c);
      // });
      return res.send({ success: true, data: categories });
    } else {
      return res.send({ success: false, message: "You are not authorized" });
    }
  } catch (error) {
    return res.send({ success: false, message: "Something went wrong" });
  }
};
const getOrganisers = async (req, res) => {
  try {
    if (req.category.category == "SUPERADMIN") {
      const organisers = await Organiser.find({}).sort({ name: 1 });
      let total_applicants = 0;
      let total_selected = 0;
      let total_rejected = 0;
      let total_mail_sent = 0;
      let total_not_reviewed = 0;

      for (let i = 0; i < organisers.length; i++) {
        total_applicants++;
        if (
          organisers[i].pref_1.status == "2" &&
          organisers[i].pref_2.status == "2"
        ) {
          total_rejected++;
        }
        if (
          organisers[i].pref_1.status == "1" ||
          organisers[i].pref_2.status == "1"
        ) {
          total_selected++;
        }
        if (
          organisers[i].pref_1.status == "3" ||
          organisers[i].pref_2.status == "3"
        ) {
          total_mail_sent++;
        }
      }

      let stats = {
        total_applicants,
        total_selected,
        total_rejected,
        total_mail_sent,
      };

      return res.send({
        success: true,
        data: organisers,
        stats: stats,
      });
    } else {
      return res.send({ success: false, message: "You are not authorized" });
    }
  } catch (error) {
    return res.send({ success: false, message: "Something went wrong" });
  }
};

module.exports = {
  getCategories: getCategories,
  getOrganisers: getOrganisers,
  AllOrganiserSheet: AllOrganiserSheet,
};
