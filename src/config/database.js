const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("datbase link");
};

module.exports = connectDB;


