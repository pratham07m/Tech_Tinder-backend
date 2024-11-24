const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("enter a mongoDB connection URI");
};

module.exports = connectDB;


