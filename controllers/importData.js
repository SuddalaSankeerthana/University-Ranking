const UniversityRanking=require("../models/UniversityRanking")
const csvtojson = require("csvtojson");
const dataImportFunction = async (filePath) => { 
UniversityRanking.deleteMany({}).then(()=>{
      csvtojson()
        .fromFile(filePath)
        .then((source) => {
          console.log("document created successfully!");
          UniversityRanking.insertMany(source);
        }).catch((e)=>{
            console.log(e.message)
        })})
    }
module.exports = dataImportFunction;