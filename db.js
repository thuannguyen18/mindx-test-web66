const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/myDB");
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;
