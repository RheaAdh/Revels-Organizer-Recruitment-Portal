const { Organiser } = require("../../models/organiser");

const totalSelected = async (cat) => {
  const n = await Organiser.count({
    $or: [
      { $and: [{ "pref_1.category": cat }, { "pref_1.status": 3 }] },
      { $and: [{ "pref_1.category": cat }, { "pref_1.status": 1 }] },
      { $and: [{ "pref_2.category": cat }, { "pref_2.status": 3 }] },
      { $and: [{ "pref_2.category": cat }, { "pref_2.status": 1 }] },
    ],
  });
  return n;
};
const totalRejected = async (cat) => {
  const n = await Organiser.count({
    $or: [
      { $and: [{ "pref_1.category": cat }, { "pref_1.status": 4 }] },
      { $and: [{ "pref_1.category": cat }, { "pref_1.status": 2 }] },
      { $and: [{ "pref_2.category": cat }, { "pref_2.status": 4 }] },
      { $and: [{ "pref_2.category": cat }, { "pref_2.status": 2 }] },
    ],
  });
  return n;
};
const totalApplicants_1 = async (cat) => {
  const n = await Organiser.count({ "pref_1.category": cat });
  return n;
};
const totalApplicants_2 = async (cat) => {
  const n = await Organiser.count({ "pref_2.category": cat });
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

const getStats = async (cat) => {
  return {
    total_applicants_1: await totalApplicants_1(cat),
    total_applicants_2: await totalApplicants_2(cat),
    total_selected: await totalSelected(cat),
    total_rejected: await totalRejected(cat),
  };
};
module.exports = {
  totalApplicants_1,
  totalApplicants_2,
  totalRejected,
  totalSelected,
  totalApplicants,
  getStats,
};
