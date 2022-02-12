const { Organiser } = require("../../models/organiser");
const { Category } = require("../../models/category");
const { getStats } = require("./stats");
const createSheet = require("../../utils/createSheet");

const AllOrganiserSheet = async (req, res) => {
  try {
    const response = await Organiser.find().sort({ id: 1 });

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
    categoryId: "sys",
    category: "System Admin And Web Dev",
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
  {
    categoryId: "Anubhuti",
    title: "Anubhuti",
    email: "revelsgoonj22@gmail.com",
  },
  {
    // Infodesk and Finance
    categoryId: "Ampersand",
    title: "Ampersand",
    email: "revels.ampersand@gmail.com",
  },
  {
    // App Dev
    categoryId: "Ergo",
    title: "Ergo",
    email: "ergo.revels@gmail.com",
  },
  {
    categoryId: "Psychus",
    title: "Psychus",
    email: "psychus.revelsmit@gmail.com",
  },
  {
    categoryId: "Kalakriti",
    title: "Kalakriti",
    email: "revelskalakriti2022@gmail.com",
  },
  {
    categoryId: "Crescendo",
    title: "Crescendo",
    email: "crescendo.revelscc@gmail.com",
  },
  {
    categoryId: "Footloose",
    title: "Footloose",
    email: "footloose.revels@gmail.com",
  },
  {
    categoryId: "HauteCouture",
    title: "Haute Couture",
    email: "hautecouturerevels22@gmail.com",
  },
  {
    categoryId: "Animania",
    title: "Animania",
    email: "revels.animania.mit@gmail.com",
  },
  {
    categoryId: "Xventure",
    title: "Xventure",
    email: "revels.xventure@gmail.com",
  },
  {
    categoryId: "HumanLibrary",
    title: "Human Library",
    email: "humanlibrary.revelsmit@gmail.com",
  },

  {
    categoryId: "Lensation",
    title: "Lensation",
    email: "lensation.revels22@gmail.com",
  },
  {
    categoryId: "Iridescent",
    title: "Iridescent",
    email: "iridecent.revels22@gmail.com",
  },
  {
    categoryId: "Altaebir",
    title: "Altaebir",
    email: "revelsfilmfestival2022@gmail.com",
  },

  {
    categoryId: "Consulere",
    title: "Consulere",

    email: "manipalacademy@180dc.org",
  },
  {
    categoryId: "Dramebaaz",
    title: "Dramebaaz",
    email: "dramebaaz.mit@gmail.com",
  },
];
const getCategories = async (req, res) => {
  try {
    if (req.category.category == "SUPERADMIN") {
      let l = [];
      await categories.forEach(async (cat) => {
        const stats = await getStats(cat.categoryId.toLowerCase());
        var c = {
          ...cat,
          ...stats,
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
      const organisers = await Organiser.find({}).sort({ id: 1 });
      let total_applicants = 0;
      let total_selected = 0;
      let total_rejected = 0;
      let total_mail_sent = 0;
      let pref1_rejected = 0;

      for (let i = 0; i < organisers.length; i++) {
        total_applicants++;
        if (organisers[i].pref_1.status == "2") {
          pref1_rejected++;
          if (organisers[i].pref_2.status == "2") {
            total_rejected++;
          }
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
        pref1_rejected,
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
