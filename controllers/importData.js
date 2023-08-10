const { default: mongoose } = require("mongoose");
const UniversityRanking = require("../models/UniversityRanking");
const csvtojson = require("csvtojson");
const dataImportFunction = (filePath) => {
  UniversityRanking.deleteMany({}).then(() => {
    csvtojson()
      .fromFile(filePath)
      .then((source) => {
        UniversityRanking.insertMany(source).then(() => {
          console.log("Document created successfully!");
          mongoose.connection.close();
        });
        console.log("Connection closed successfully");
      })
      .catch((e) => {
        console.log(e.message);
      });
  });
};
module.exports = dataImportFunction;
