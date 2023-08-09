const { Command } = require("commander");
const query = require("./controllers/queries");
const dataImportFunction = require("./controllers/importData");
const { default: mongoose } = require("mongoose");
const program = new Command();
program
  .version("1.0.0")
  .description("University Ranking details")
  .option("-i, --imp <path>", "Importing the data")
  .option(
    "-q,--query <param...>",
    "for top universities information\nEnter: columnName limit country "
  )
  .parse(process.argv);
const options = program.opts();
if (options.imp) {
  var path = options.imp;
  dataImportFunction(path);
}
if (options.query) {
  const columnName = options.query[0];
  const limit = parseInt(options.query[1]);
  const country = options.query[2];
  query(columnName, limit, country);
}
if (!process.argv.slice(2).length) {
  program.outputHelp();
  mongoose.connection.close();
}
