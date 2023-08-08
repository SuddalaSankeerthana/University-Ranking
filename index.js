const mongoose=require("./config/config")
const { Command } = require("commander");
const dataImportFunction=require("./controllers/importData")
const program = new Command();
program
  .version("1.0.0")
  .description("University Ranking details")
  .option("-i,--imp <path>", "Importing the data")
  .parse(process.argv);
  const options = program.opts();
  if (options.imp) {
    console.log(options)
    var path = options.imp
    console.log(path)
 dataImportFunction(path);
    }