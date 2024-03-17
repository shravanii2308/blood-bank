const mongoose = require("mongoose");
const colors = require("colors");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database error this is ${error}`.bgRed.white);
  }
};

module.exports = connectdb;
