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
      "Status_1",
      "Pref_2",
      "Slot_2",
      "Status_2",
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
      ws.cell(rowIndex, columnIndex++).string(resp.pref_1.category.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.pref_1.slot.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.pref_1.status.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.pref_2.category.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.pref_2.slot.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.pref_2.status.toString());
      rowIndex++;
    });
    resolve(wb);
  });
};

const categoryOrganiserSheet = async (req, res) => {
  try {
    const { category } = req.params;
    if (category == req.category.category) {
      const response = await Organiser.find({
        $or: [{ "pref_1.category": category }, { "pref_2.category": category }],
      });
      if (response) {
        await createSheet(response).then((file) => {
          file.write(category + "_registrations.xlsx", res);
        });
      }
    } else return res.json({ success: false, message: "Please Try Again" });
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
      });
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
module.exports = {
  createSheet,
  categoryOrganiserSheet,
  categoryOrganisers,
  setOrganiserStatus,
};
