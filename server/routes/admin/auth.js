const { Category, Token } = require("../../models/category");
const bcrypt = require("bcryptjs");
const jwtUtils = require("../../utils/jwt");

const register = async (req, res) => {
  try {
    const categories = ["SYS", "APP", "OP", "HPS"];
    categories.forEach(async (cat) => {
      const slots = [];
      for (let i = 0; i < 28; i++) {
        slots.push(10);
      }
      const result = Math.random().toString(36).substring(2, 7);
      const pass = cat + "_" + result;
      // const salt = await bcrypt.genSalt(10);
      // const hash = await bcrypt.hash(pass, salt);
      const newCategory = new Category({
        categoryId: cat + "_" + Math.random().toString(36).substring(2, 5),
        category: cat,
        password: pass,
        slots: slots,
        token: null,
      });
      await newCategory.save();
      console.log("Registered " + newCategory);
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
    console.log("tokenArray");
    console.log(tokenArray);

    const jwtToken = tokenArray[1];
    console.log("jwtToken");
    console.log(jwtToken);

    const token = await Token.findOneAndUpdate(
      { categoryId: category._id },
      { token: jwtToken },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      message: "Category Signed in Successfully ",
      success: true,
      data: {
        categoryId: Category.categoryId,
        token: token.token,
      },
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

const getUserFromToken = async (req, res) => {
  try {
    console.log("hi");
    const token = req.params.token;
    console.log("tokennn", token);
    const user = await Token.findOne({ token: token });
    console.log(user);
    if (user) return res.send({ success: true, data: user });
    else return res.send({ success: false, data: "Invalid Token" });
  } catch (error) {
    return res.send({ success: false, message: "Something went wrong." });
  }
};

module.exports = {
  catRegister: register,
  login: login,
  logout: logout,
  getUserFromToken,
};
