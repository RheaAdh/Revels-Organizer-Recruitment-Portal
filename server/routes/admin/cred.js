const { Category } = require("../../models/category");
const main = require("../../utils/confirmationEmail");
const credTemplate = require("../../utils/creds");

const creds = async (req, res) => {
  try {
    const categories = await Category.find(
      {},
      {
        category: 1,
        email: 1,
        password: 1,
        categoryId: 1,
      }
    );
    for (var i = 20; i < 22; i++) {
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
