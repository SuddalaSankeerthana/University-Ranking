const { default: mongoose } = require("mongoose");
const getRank = require("./getRank");
const UniversityRanking = require("../models/UniversityRanking");
const query = async (columnName, limit, country) => {
  let getTopUniversities = await UniversityRanking.find({})
    .where({ [columnName]: { $ne: null }, Country: [country] })
    .sort({ [columnName]: 1 })
    .select({ "Institution Name": 1, [columnName]: 1, country: 1 })
    .limit(limit);
  getTopUniversities = getRank(getTopUniversities, columnName);
  console.log(getTopUniversities);
  mongoose.connection.close();
  console.log("Connection closed successfully");
};
module.exports = query;
