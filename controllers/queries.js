const { default: mongoose } = require("mongoose");
const UniversityRanking = require("../models/UniversityRanking");
const run = async (columnName, limit, Country) => {
  const getTopViewedProject = await UniversityRanking.find({})
    .where({ [columnName]: { $ne: null }, Country: [Country] })
    .sort({ [columnName]: 1 })
    .select({ "Institution Name": 1, [columnName]: 1, Country: 1 })
    .limit(limit);
  console.log(getTopViewedProject);
  mongoose.connection.close();
};
run("Sustainability Rank", 10, "Canada");
