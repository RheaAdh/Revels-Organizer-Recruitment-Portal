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
const categories = [
  {
    categoryId: "superAdmin",
    category: "SUPERADMIN",
    email: "",
  },
  {
    categoryId: "sys",
    category: "Web and System Admin",
    email: "webdevrevels22@gmail.com",
  },
  {
    categoryId: "workshops",
    category: "Workshops",
    email: "workshops.revels22@gmail.com",
  },
  {
    // Infodesk and Finance
    categoryId: "inf",
    category: "Infodesk and Finance",
    email: "inf.revels2022@gmail.com",
  },
  {
    // App Dev
    categoryId: "app",
    category: "App Dev",
    email: "appdev.revels22@gmail.com",
  },
  {
    categoryId: "proshow",
    category: "ProShow",
    email: "proshow.revels22@gmail.com",
  },
  {
    categoryId: "certificate",
    category: "Certificates and Prizes",
    email: "logisticsrevels2022@gmail.com",
  },
  {
    categoryId: "logistics",
    category: "Logistics",
    email: "cnp.revels22@gmail.com",
  },
  {
    categoryId: "vigilance",
    category: "Vigilance",
    email: "vigilance.revels22@gmail.com",
  },
  {
    categoryId: "photography",
    category: "Photography and Videography",
    email: "pav.revels22@gmail.com ",
  },
  {
    categoryId: "informals",
    category: "Informals",
    email: "informals.revels22@gmail.com",
  },
  {
    categoryId: "hfs",
    category: "HFS",
    email: "hfs.revels22@gmail.com",
  },
  {
    categoryId: "judges",
    category: "Judges",
    email: "judgesrevels22@gmail.com",
  },

  {
    categoryId: "pnp",
    category: "Publicity and Printing",
    email: "pnprevels22@gmail.com",
  },
  {
    categoryId: "gaming",
    category: "Gaming",
    email: "gaming.revels22@gmail.com",
  },
  {
    categoryId: "outstation",
    category: "Outstation Management",
    email: "omrevels2022@gmail.com",
  },

  {
    categoryId: "socialmedia",
    category: "Social Media",
    email: "smcc.revels22@gmail.com",
  },
  {
    categoryId: "operations",
    category: "Operations",
    email: "operations.revels22@gmail.com",
  },
  {
    categoryId: "hrd",
    category: "HRD",
    email: "revels.hrd22@gmail.com",
  },

  {
    categoryId: "graphics",
    category: "Graphics",
    email: "graphics.revels22@gmail.com",
  },
  {
    categoryId: "sponsorhips",
    category: "Sponsorships",
    email: "sponsorship.revels22@gmail.com",
  },

  {
    categoryId: "sports",
    category: "Sports",
    email: "sports.revels22@gmail.com",
  },
];
const totalSelected = async (cat) => {
  const n = await Organiser.count({
    $or: [
      { $and: [{ "pref_1.category": cat.categoryId }, { "pref_1.status": 1 }] },
      { $and: [{ "pref_2.category": cat.categoryId }, { "pref_2.status": 1 }] },
    ],
  });
  return n;
};
const totalRejected = async (cat) => {
  const n = await Organiser.count({
    $or: [
      { $and: [{ "pref_1.category": cat.categoryId }, { "pref_1.status": 2 }] },
      { $and: [{ "pref_2.category": cat.categoryId }, { "pref_2.status": 2 }] },
    ],
  });
  return n;
};
const totalMailSent = async (cat) => {
  const n = await Organiser.count({
    $or: [
      { $and: [{ "pref_1.category": cat.categoryId }, { "pref_1.status": 3 }] },
      { $and: [{ "pref_2.category": cat.categoryId }, { "pref_2.status": 3 }] },
    ],
  });
  return n;
};

const totalApplicants = async (cat) => {
  const n = await Organiser.count({
    $or: [
      { "pref_1.category": cat.categoryId },
      { "pref_2.category": cat.categoryId },
    ],
  });
  return n;
};
const getCategories = async (req, res) => {
  try {
    if (req.category.category == "SUPERADMIN") {
      let l = [];
      await categories.forEach(async (cat) => {
        var c = {
          ...cat,
          total_applicants: await totalApplicants(cat),
          total_selected: await totalSelected(cat),
          total_rejected: await totalRejected(cat),
        };
        l.push(c);

        if (l.length == categories.length)
          return res.json({ success: true, data: l });
      });
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
