const { default: mongoose } = require("mongoose");

const databaseConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = databaseConnect;
