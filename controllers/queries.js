const { default: mongoose } = require("mongoose");
const UniversityRanking = require("../models/UniversityRanking");
const query = async (columnName, limit, country) => {
  const getTopUniversities = await UniversityRanking.find({})
    .where({ [columnName]: { $ne: null }, Country: [country] })
    .sort({ [columnName]: 1 })
    .select({ "Institution Name": 1, [columnName]: 1, country: 1 })
    .limit(limit);
  console.log(getTopUniversities);
  mongoose.connection.close();
  console.log("Connection closed successfully");
};
module.exports = query;
