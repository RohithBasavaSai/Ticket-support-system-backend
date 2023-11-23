const mongoose = require("mongoose");
const uri="mongodb+srv://rohithrachamsetty:m8GKdPxmwXh7syaf@cluster0.uolxcob.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(uri);
    console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`mongo DB connection Failed : ${error}`);
    process.exit(1);
  }
};
module.exports = connectDB;
