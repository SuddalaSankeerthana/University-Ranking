const { default: mongoose } = require("mongoose");
const UniversityRanking = require("../models/UniversityRanking");
const csvtojson = require("csvtojson");
const dataImportFunction = (filePath) => {
  UniversityRanking.deleteMany({}).then(() => {
    csvtojson()
      .fromFile(filePath)
      .then((source) => {
        UniversityRanking.insertMany(source)
          .then(() => {
            console.log("Document created successfully!");
          })
          .catch((e) => {
            console.error(`Error while inserting data : ${e.message}`);
          }).finally(() => {
            // Closing connection
            mongoose.connection.close();
          });
        console.log("Connection closed successfully");
      })
      .catch((e) => {
        console.error(`Error while converting to csv :${e.message}`);
        mongoose.connection.close();
      })
  });
};
module.exports = dataImportFunction;
