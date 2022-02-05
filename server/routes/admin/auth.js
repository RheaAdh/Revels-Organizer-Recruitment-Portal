const { Category, Token } = require("../../models/category");
const bcrypt = require("bcryptjs");
const jwtUtils = require("../../utils/jwt");

const register = async (req, res) => {
  try {
    const categories = [
      {
        id: "superAdmin",
        category: "SUPERADMIN",
        email: "",
      },
      {
        id: "sys",
        category: "Web and System Admin",
        email: "webdevrevels22@gmail.com",
      },
      {
        id: "workshops",
        category: "Workshops",
        email: "workshops.revels22@gmail.com",
      },
      {
        // Infodesk and Finance
        id: "inf",
        category: "Infodesk and Finance",
        email: "inf.revels2022@gmail.com",
      },
      {
        // App Dev
        id: "app",
        category: "App Dev",
        email: "appdev.revels22@gmail.com",
      },
      {
        id: "proshow",
        category: "ProShow",
        email: "proshow.revels22@gmail.com",
      },
      {
        id: "certificate",
        category: "Certificates and Prizes",
        email: "logisticsrevels2022@gmail.com",
      },
      {
        id: "logistics",
        category: "Logistics",
        email: "cnp.revels22@gmail.com",
      },
      {
        id: "vigilance",
        category: "Vigilance",
        email: "vigilance.revels22@gmail.com",
      },
      {
        id: "photography",
        category: "Photography and Videography",
        email: "pav.revels22@gmail.com ",
      },
      {
        id: "informals",
        category: "Informals",
        email: "informals.revels22@gmail.com",
      },
      {
        id: "hfs",
        category: "HFS",
        email: "hfs.revels22@gmail.com",
      },
      {
        id: "judges",
        category: "Judges",
        email: "judgesrevels22@gmail.com",
      },

      {
        id: "pnp",
        category: "Publicity and Printing",
        email: "pnprevels22@gmail.com",
      },
      {
        id: "gaming",
        category: "Gaming",
        email: "gaming.revels22@gmail.com",
      },
      {
        id: "outstation",
        category: "Outstation Management",
        email: "omrevels2022@gmail.com",
      },

      {
        id: "socialmedia",
        category: "Social Media",
        email: "smcc.revels22@gmail.com",
      },
      {
        id: "operations",
        category: "Operations",
        email: "operations.revels22@gmail.com",
      },
      {
        id: "hrd",
        category: "HRD",
        email: "revels.hrd22@gmail.com",
      },

      {
        id: "graphics",
        category: "Graphics",
        email: "graphics.revels22@gmail.com",
      },
      {
        id: "sponsorhips",
        category: "Sponsorships",
        email: "sponsorship.revels22@gmail.com",
      },

      {
        id: "sports",
        category: "Sports",
        email: "sports.revels22@gmail.com",
      },
    ];
    categories.forEach(async (cat) => {
      const result = Math.random().toString(36).substring(2, 7);
      const pass = cat.id + "_" + result;
      // const salt = await bcrypt.genSalt(10);
      // const hash = await bcrypt.hash(pass, salt);
      const newCategory = new Category({
        categoryId: cat.id,
        category: cat.category,
        email: cat.email,
        password: pass,
        token: null,
      });
      await newCategory.save();
    });
    return res.status(200).json({
      message: {
        message: "Categories Successfully Registered",
        success: true,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.toString(), success: false });
  }
};

const login = async (req, res) => {
  try {
    const category = await Category.findOne({
      categoryId: req.body.categoryId,
    });

    if (!category) return res.status(401).json({ message: "Invalid category" });

    const isValid = req.body.password == category.password;

    if (!isValid) return res.status(401).json({ message: "Invalid password" });

    const jwt = await jwtUtils.generateAuthJwt(category);

    const tokenArray = jwt.token.split(" ");

    const jwtToken = tokenArray[1];

    const token = await Token.findOneAndUpdate(
      { categoryId: category._id },
      { token: jwtToken },
      { new: true, upsert: true }
    );

    category.token = jwtToken;
    await category.save();

    return res.status(200).json({
      message: "Category Signed in Successfully ",
      success: true,
      data: category,
    });
  } catch (error) {
    return res.status(500).json({ message: error.toString() });
  }
};

const logout = async (req, res) => {
  try {
    const bearerToken = req.headers["authorization"];
    const tokenArray = bearerToken.split(" ");
    const token = tokenArray[1];
    await Token.findOneAndDelete({ token: token });
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    return res.status(500).json({ message: error.toString() });
  }
};

const getCategoryFromToken = async (req, res) => {
  try {
    const token = req.params.token;
    const category = await Category.findOne({ token: token }).select(
      "-password"
    );
    if (category) return res.send({ success: true, data: category });
    else return res.send({ success: false, data: "Invalid Token" });
  } catch (error) {
    return res.send({ success: false, message: "Something went wrong." });
  }
};

const updateSlot = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const slot_count = req.body.slot_count;

    const category = await Category.findOne({ categoryId: categoryId }).select(
      "-password"
    );
    if (!category)
      return res.send({ success: false, message: "Invalid category" });
    const newslots = [];
    for (let i = 0; i < 28; i++) {
      newslots.push(slot_count);
    }
    category.slots = newslots;
    await category.save();
    return res.send({ success: true, data: category });
  } catch (error) {
    return res.send({ success: false, message: "Something went wrong." });
  }
};

module.exports = {
  catRegister: register,
  login: login,
  logout: logout,
  getCategoryFromToken: getCategoryFromToken,
  updateSlot: updateSlot,
};
