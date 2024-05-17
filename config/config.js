var Promise = require("bluebird");
Promise.promisifyAll(require("mongoose"));
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/.env" });
try{
    mongoose.connect(process.env["URI"]).then(()=>console.log("connection established"))
}
catch(e){
    console.log(e.message)
}
module.exports=mongoose;