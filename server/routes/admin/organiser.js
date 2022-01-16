const { Organiser } = require("../../models/organiser");
const xl = require("excel4node");

const createSheet = async (response) => {
  return new Promise(async (resolve) => {
    var wb = new xl.Workbook();
    var ws = wb.addWorksheet("Sheet");
    const headingColumnNames = [
      "id",
      "Name",
      "Email",
      "Phone Number",
      "Registration Number",
      "Branch",
      "CGPA",
      "Pref_1",
      "Slot_1",
      "Pref_2",
      "Slot_2",
    ];
    let headingColumnIndex = 1;
    headingColumnNames.forEach((heading) => {
      ws.cell(1, headingColumnIndex++).string(heading);
    });
    let rowIndex = 2;
    response.forEach((resp) => {
      let columnIndex = 1;
      ws.cell(rowIndex, columnIndex++).string(resp.id.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.name.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.email.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.phone.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.registration_no.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.branch.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.cgpa.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.pref_1.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.slot_1.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.pref_2.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.slot_2.toString());
      rowIndex++;
    });
    resolve(wb);
  });
};

const categoryOrganisers = async (req, res) => {
  try {
    const { category } = req.params;
    const response = await Organiser.find({
      $or: [{ pref_1: category }, { pref_2: category }],
    });
    if (response) {
      await createSheet(response).then((file) => {
        file.write(category + "_registrations.xlsx", res);
      });
    } else return res.json({ success: false, message: "Please Try Again" });
  } catch (error) {
    return res.json({ success: false, message: "Please Try Again" });
  }
};
module.exports = {
  createSheet,
  categoryOrganisers,
};
