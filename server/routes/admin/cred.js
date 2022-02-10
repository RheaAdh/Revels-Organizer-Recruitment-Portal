const { Category } = require("../../models/category");
const main = require("../../utils/confirmationEmail");
const credTemplate = require("../../utils/creds");
const cultural = [
  {
    id: "Anubhuti",
    title: "Anubhuti",
    email: "revelsgoonj22@gmail.com",
  },
  {
    // Infodesk and Finance
    id: "Ampersand",
    title: "Ampersand",
    email: "revels.ampersand@gmail.com",
  },
  {
    // App Dev
    id: "Ergo",
    title: "Ergo",
    email: "ergo.revels@gmail.com",
  },
  {
    id: "Psychus",
    title: "Psychus",
    email: "psychus.revelsmit@gmail.com",
  },
  {
    id: "Kalakriti",
    title: "Kalakriti",
    email: "revelskalakriti2022@gmail.com",
  },
  {
    id: "Crescendo",
    title: "Crescendo",
    email: "crescendo.revelscc@gmail.com",
  },
  {
    id: "Footloose",
    title: "Footloose",
    email: "footloose.revels@gmail.com",
  },
  {
    id: "HauteCouture",
    title: "Haute Couture",
    email: "hautecouturerevels22@gmail.com",
  },
  {
    id: "Animania",
    title: "Animania",
    email: "revels.animania.mit@gmail.com",
  },
  {
    id: "Xventure",
    title: "Xventure",
    email: "revels.xventure@gmail.com",
  },
  {
    id: "HumanLibrary",
    title: "Human Library",
    email: "humanlibrary.revelsmit@gmail.com",
  },

  {
    id: "Lensation",
    title: "Lensation",
    email: "lensation.revels22@gmail.com",
  },
  {
    id: "Iridescent",
    title: "Iridescent",
    email: "iridecent.revels22@gmail.com",
  },
  {
    id: "Altaebir",
    title: "Altaebir",
    email: "revelsfilmfestival2022@gmail.com",
  },

  {
    id: "Consulere",
    title: "Consulere",

    email: "manipalacademy@180dc.org",
  },
  {
    id: "Dramebaaz",
    title: "Dramebaaz",
    email: "dramebaaz.mit@gmail.com",
  },
];

const creds = async (req, res) => {
  try {
    let emails = [];
    cultural.forEach((cat) => {
      emails.push(cat.email);
    });
    const categories = await Category.find(
      { email: emails },
      {
        category: 1,
        email: 1,
        password: 1,
        categoryId: 1,
      }
    );
    // console.log(categories.length);
    for (var i = 0; i < 10; i++) {
      cat = categories[i];
      console.log(cat.email);
      const message = credTemplate(cat.category, cat.categoryId, cat.password);
      main(cat.email, "Credentials: Organizer Portal- REVELS '22", message);
    }

    return res.json({
      success: true,
      msg: "Successfully Confirmed Applicant!",
    });
  } catch (error) {
    return res.json({ success: false, message: error.toString() });
  }
};

module.exports = {
  creds,
};
