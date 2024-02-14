const mongoose = require("mongoose");

const Service_schema = new mongoose.Schema({
    service: {
        type:String,
        require: true
    },
    description: {
        type:String,
        require: true
    },
    price: {
        type:String,
        require: true
    },
    provider: {
        type:String,
        require: true
    },
    picture: {
        type:String,
        require: true
    }

})

const Service = new mongoose.model("Service", Service_schema);

module.exports = Service;