const xl = require("excel4node");
const createSheet = async (response) => {
  // console.log(response);
  return new Promise(async (resolve) => {
    var wb = new xl.Workbook();
    var ws = wb.addWorksheet("Sheet");
    const headingColumnNames = [
      "id",
      "Type",
      "Name",
      "Email",
      "Phone Number",
      "Registration Number",
      "Branch",
      "CGPA",
      "Pref_1",
      //   "Slot_1",
      "Status_1",
      "Pref_2",
      //   "Slot_2",
      "Status_2",
      "Experience",
    ];
    let headingColumnIndex = 1;
    headingColumnNames.forEach((heading) => {
      ws.cell(1, headingColumnIndex++).string(heading);
    });
    let rowIndex = 2;
    response.forEach((resp) => {
      let columnIndex = 1;
      ws.cell(rowIndex, columnIndex++).string(resp.id.toString());
      ws.cell(rowIndex, columnIndex++).string(
        resp.type == 1 ? "Supporting/Sports" : "Cultural"
      );
      ws.cell(rowIndex, columnIndex++).string(resp.name.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.email.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.phone.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.registration_no.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.branch.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.cgpa.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.pref_1.category.toString());
      //   ws.cell(rowIndex, columnIndex++).string(resp.pref_1.slot.toString());
      ws.cell(rowIndex, columnIndex++).string(
        resp.pref_1.status.toString() == "0"
          ? "Not Reviewed"
          : resp.pref_1.status.toString() == "1"
          ? "Selected"
          : resp.pref_1.status.toString() == "2"
          ? "Rejected"
          : "Mail Sent (Selected)"
      );
      ws.cell(rowIndex, columnIndex++).string(resp.pref_2.category.toString());
      //   ws.cell(rowIndex, columnIndex++).string(resp.pref_2.slot.toString());
      ws.cell(rowIndex, columnIndex++).string(
        resp.pref_2.status.toString() == "0"
          ? "Not Reviewed"
          : resp.pref_2.status.toString() == "1"
          ? "Selected"
          : resp.pref_2.status.toString() == "2"
          ? "Rejected"
          : "Mail Sent (Selected)"
      );
      ws.cell(rowIndex, columnIndex++).string(resp.experience.toString());
      rowIndex++;
    });
    resolve(wb);
  });
};
module.exports = createSheet;
