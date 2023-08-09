const { default: mongoose } = require("mongoose");
const UniversityRanking=require("../models/UniversityRanking")
const csvtojson = require("csvtojson");
const dataImportFunction = async(filePath) => { 
 UniversityRanking.deleteMany({}).then(()=>{
      csvtojson()
        .fromFile(filePath)
        .then(async(source) => {
          console.log("document created successfully!");
          await UniversityRanking.insertMany(source);
          mongoose.connection.close();
          console.log("Connection closed successfully");
        }).catch((e)=>{
            console.log(e.message)
        })})
    }
module.exports = dataImportFunction;