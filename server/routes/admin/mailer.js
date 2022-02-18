// const { Organiser } = require("../../models/organiser");
// const main = require("../../utils/confirmationEmail");
// const constructTemplate = require("../../utils/registrationEmail");
// const { Category } = require("../../models/category");
// const createSheet = require("../../utils/createSheet");
// const { getStats } = require("./stats");
// const mailer = require("../../utils/mail");
// const { sendEmailNotif } = require("../../utils/ses");

// const categories = [
//   {
//     categoryId: "sys",
//     category: "System Admin And Web Dev",
//     email: "webdevrevels22@gmail.com",
//     sec: true,
//   },
//   {
//     //4
//     categoryId: "workshops",
//     category: "Workshops",
//     email: "workshops.revels22@gmail.com",
//     sec: false,
//   },
//   {
//     //17
//     categoryId: "inf",
//     category: "Infodesk and Finance",
//     email: "inf.revels2022@gmail.com",
//     sec: true,
//   },
//   {
//     //7
//     categoryId: "app",
//     category: "App Dev",
//     email: "appdev.revels22@gmail.com",
//     sec: false,
//   },
//   {
//     //46
//     categoryId: "proshow",
//     category: "ProShow",
//     email: "proshow.revels22@gmail.com",
//     sec: false,
//   },
//   {
//     //8
//     categoryId: "certificate",
//     category: "Certificates and Prizes",
//     email: "cnp.revels22@gmail.com",
//     sec: true,
//   },
//   {
//     //21-22
//     categoryId: "logistics",
//     category: "Logistics",
//     email: "logisticsrevels2022@gmail.com",
//     sec: false,
//   },
//   {
//     //31
//     categoryId: "vigilance",
//     category: "Vigilance",
//     email: "vigilance.revels22@gmail.com",
//     sec: true,
//   },
//   {
//     //31
//     categoryId: "photography",
//     category: "Photography and Videography",
//     email: "pav.revels22@gmail.com ",
//     sec: true,
//   },
//   {
//     //52
//     categoryId: "informals",
//     category: "Informals",
//     email: "informals.revels22@gmail.com",
//     sec: true,
//   },
//   {
//     //19
//     categoryId: "hfs",
//     category: "HFS",
//     email: "hfs.revels22@gmail.com",
//     sec: false,
//   },
//   {
//     //5
//     categoryId: "judges",
//     category: "Judges",
//     email: "judgesrevels22@gmail.com",
//     sec: true,
//   },

//   {
//     //38
//     categoryId: "pnp",
//     category: "Publicity and Printing",
//     email: "pnprevels22@gmail.com",
//     sec: true,
//   },
//   {
//     //13
//     categoryId: "gaming",
//     category: "Gaming",
//     email: "gaming.revels22@gmail.com",
//     sec: true,
//   },
//   {
//     //37
//     categoryId: "outstation",
//     category: "Outstation Management",
//     email: "omrevels2022@gmail.com",
//     sec: false,
//   },

//   {
//     //14
//     categoryId: "socialmedia",
//     category: "Social Media",
//     email: "smcc.revels22@gmail.com",
//     sec: true,
//   },
//   {
//     //9
//     categoryId: "operations",
//     category: "Operations",
//     email: "operations.revels22@gmail.com",
//     sec: false,
//   },
//   {
//     //23
//     categoryId: "hrd",
//     category: "HRD",
//     email: "revels.hrd22@gmail.com",
//     sec: true,
//   },

//   {
//     //11
//     categoryId: "graphics",
//     category: "Graphics",
//     email: "graphics.revels22@gmail.com",
//     sec: true,
//   },
//   {
//     //21
//     categoryId: "sponsorhips",
//     category: "Sponsorships",
//     email: "sponsorship.revels22@gmail.com",
//     sec: false,
//   },

//   {
//     //34
//     categoryId: "sports",
//     category: "Sports",
//     email: "sports.revels22@gmail.com",
//     sec: true,
//   },
// ];
// const selectionMail = async (req, res) => {
//   try {
//     for (var i = 0; i < categories.length; i++) {
//       const categoryId = categories[i].categoryId;
//       console.log(categoryId, i);
//       const organisers = await Organiser.count({
//         "pref_1.category": categoryId,
//         "pref_1.status": 1,
//       });
//       console.log(categoryId, organisers.length);
//       let mainCat = "";
//       let mainEmail = "";
//       categories.forEach((cat) => {
//         if (cat.categoryId == categoryId) {
//           mainCat = cat.category;
//           mainEmail = cat.email;
//         }
//       });
//       const status = "Greetings from Team Revels!";
//       const body = `You have been selected as an organiser for ${mainCat} Category - REVELS '22.
//     We wish you the best and congratulate you once again!
//     You will be added to the groups soon.`;
//       // console.log(body);
//       organisers.forEach(async (org) => {
//         const message = constructTemplate(org.name, status, body);
//         console.log(org.name);
//         sendEmailNotif(
//           org.email,
//           mainEmail,
//           "Selected as an Organiser for Revels'22",
//           message
//         );
//         await Organiser.updateOne(
//           { registration_no: org.registration_no },
//           {
//             $set: { "pref_1.status": 3, "pref_2.status": 2 },
//           }
//         );
//       });
//       if (i == categories.length - 1) {
//         return res.json({
//           success: true,
//           msg: `Successfully sent mails to ${cat1} organisers !`,
//         });
//       }
//       await timer(3000);
//     }
//   } catch (error) {
//     console.log(error.toString());
//     return res
//       .status(500)
//       .json({ message: "Registeration failed. Please Try Again !!" });
//   }
// };

// const rejection1 = async (req, res) => {
//   try {
//     for (var i = 0; i < categories.length; i++) {
//       const categoryId = categories[i].categoryId;
//       console.log(categoryId, i);
//       const organisers = await Organiser.find({
//         "pref_1.category": categoryId,
//         "pref_1.status": 2,
//         "pref_2.status": 0,
//       });
//       console.log(categoryId, organisers.length);
//       let cat1 = "";
//       let catEmail = "";
//       categories.forEach((cat) => {
//         if (cat.categoryId == categoryId) {
//           cat1 = cat.category;
//           catEmail = cat.email;
//         }
//       });
//       organisers.forEach(async (org) => {
//         let mainCat = "";
//         categories.forEach((cat) => {
//           if (cat.categoryId == org.pref_2.category) {
//             mainCat = cat.category;
//           }
//         });
//         const status = "Greetings from Team Revels!";
//         const body = `Thank you for taking your time to interview with us. We regret to inform you that the ${cat1} has not approved your application.
//       However you still stand a chance to be an Organizer for Revels by interviewing for ${mainCat} (2nd prefernce), the details of which will be communicated to you in due course.
//       Best of Luck!`;
//         const message = constructTemplate(org.name, status, body);
//         sendEmailNotif(
//           org.email,
//           catEmail,
//           "Revels'22: Organizer status update",
//           message
//         );
//         await Organiser.updateOne(
//           { _id: org._id },
//           {
//             $set: { "pref_1.status": 4 },
//           }
//         );
//       });
//       if (i == categories.length - 1) {
//         return res.json({
//           success: true,
//           msg: `Successfully sent mails to ${cat1} organisers !`,
//         });
//       }
//       await timer(3000);
//     }
//   } catch (error) {
//     console.log(error.toString());
//     return res
//       .status(500)
//       .json({ message: "Registeration failed. Please Try Again !!" });
//   }
// };
// const timer = (ms) => new Promise((res) => setTimeout(res, ms));

// const rejection2 = async (req, res) => {
//   try {
//     for (var i = 0; i < categories.length; i++) {
//       const categoryId = categories[i].categoryId;
//       console.log(categoryId, i);
//       const organisers = await Organiser.find({
//         "pref_1.category": categoryId,
//         "pref_1.status": 2,
//         "pref_2.status": 2,
//       });
//       console.log(categoryId, organisers.length);
//       let cat1 = "";
//       let catEmail = "";
//       categories.forEach((cat) => {
//         if (cat.categoryId == categoryId) {
//           cat1 = cat.category;
//           catEmail = cat.email;
//         }
//       });
//       organisers.forEach(async (org) => {
//         let cat2 = "";
//         categories.forEach((cat) => {
//           if (cat.categoryId == org.pref_2.category) {
//             cat2 = cat.category;
//           }
//         });

//         const status = "Greetings from Team Revels!";
//         const body = `Thank you for taking your time to interview with us. We regret to inform you that ${cat1} has not approved your application.
//       We would also like to let you know that the category you selected as your second preference (${cat2}),will not be taking in anymore organisers because they already have the required number of organisers.
//       You can still participate in the fest as an organizer by applying for the Cultural Categories.
//       Best of Luck!`;

//         //   const message = constructTemplate(org.name, status, body);
//         //   sendEmailNotif(
//         //     org.email,
//         //     catEmail,
//         //     "Revels'22: Organizer status update",
//         //     message
//         //   );
//         //   await Organiser.updateOne(
//         //     { _id: org._id },
//         //     {
//         //       $set: { "pref_1.status": 4 },
//         //     }
//         //   );
//       });
//       if (i == categories.length - 1) {
//         return res.json({
//           success: true,
//           msg: `Successfully sent mails to ${cat1} organisers !`,
//         });
//       }
//       // await timer(3000);
//     }
//   } catch (error) {
//     console.log(error.toString());
//     return res
//       .status(500)
//       .json({ message: "Registeration failed. Please Try Again !!" });
//   }
// };

// const catClosed = async (req, res) => {
//   try {
//     // const status = "Greetings from Team Revels!";
//     // const body = `Thank you for taking your time to interview with us. We regret to inform you that 1 has not approved your application.
//     // We would also like to let you know that the category you selected as your second preference 2,will not be taking in anymore organisers because they already have the required number of organisers.
//     // You can still participate in the fest as an organizer by applying for the Cultural Categories.
//     // Best of Luck!`;

//     // const message = constructTemplate("Akash", status, body);
//     // mailer("akashagarwal41200@gmail.com", status, message);
//     // const closedCat = [];
//     // categories.forEach((cat) => {
//     //   if (!cat.sec) closedCat.push(cat.categoryId);
//     // });
//     // console.log(closedCat, " ", closedCat.length);
//     // const unreviewed = await Organiser.find({
//     //   "pref_1.status": 0,
//     //   type: { $ne: 2 },
//     //   "pref_1.category": { $ne: "sys" },
//     // });
//     // const mySet1 = new Set();
//     // unreviewed.forEach((org) => {
//     //   const x = { name: org.name, cat: org.pref_1.category };
//     //   mySet1.add(x);
//     // });
//     // console.log(mySet1);
//     // // await Organiser.updateMany(
//     // //   { "pref_1.status": 2, "pref_2.category": closedCat },
//     // //   { $set: { "pref_2.status": 2 } }
//     // // );
//     const organiser1 = await Organiser.count({
//       "pref_1.status": 1,
//     });
//     const organiser2 = await Organiser.count({
//       "pref_1.status": 2,
//     });
//     const organiser3 = await Organiser.count({
//       "pref_1.status": 3,
//     });
//     const organiser4 = await Organiser.count({
//       "pref_1.status": 4,
//     });

//     return res.json({
//       success: true,
//       organiser1,
//       organiser2,
//       organiser3,
//       organiser4,
//       msg: `Done !`,
//     });
//   } catch (error) {
//     console.log(error.toString());
//     return res
//       .status(500)
//       .json({ message: "Registeration failed. Please Try Again !!" });
//   }
// };

// module.exports = {
//   selectionMail,
//   rejection1,
//   rejection2,
//   catClosed,
// };
