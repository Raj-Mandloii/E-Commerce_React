const { default: mongoose } = require("mongoose");

const databaseConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = databaseConnect;
