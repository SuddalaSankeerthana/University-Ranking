const mongoose = require("../config/config");
var universityRankingSchema = new mongoose.Schema({
    "2024 RANK": {
        type: String
    }
    , "2023 RANK": {
        type: String
    },
    "Institution Name": {
        type: String
    },
    "Country Code": {
        type: String
    },
    "Country": {
        type: String
    },
    "SIZE": {
        type: String
    },
    "FOCUS": {
        type: String
    },
    "RES.": {
        type: String
    },
    "AGE":
    {
        type: Number
    },
    "STATUS": {
        type: String
    },
    "Academic Reputation Score": {
        type: Number
    }, "Academic Reputation Rank": {
        type: Number
    }, "Employer Reputation Score": {
        type: Number
    }, "Employer Reputation Rank": {
        type: Number
    }, "Faculty Student Score": {
        type: Number
    }, "Faculty Student Rank": {
        type: Number
    }, "Citations per Faculty Score": {
        type: Number
    }, "Citations per Faculty Rank": {
        type: Number
    }, "International Faculty Score": {
        type: Number
    }, "International Faculty Rank": {
        type: Number
    }, "International Students Score": {
        type: Number
    }, "International Students Rank":
    {
        type: Number
    }, "International Research Network Score": {
        type: Number
    }, "International Research Network Rank": {
        type: Number
    }, "Employment Outcomes Score": {
        type: Number
    }, "Employment Outcomes Rank": {
        type: Number
    }, "Sustainability Score": {
        type: Number
    }, "Sustainability Rank": {
        type: Number
    }, "Overall SCORE": {
        type: String
    }
})
module.exports = mongoose.model("UniversityRanking", universityRankingSchema);