const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {
  //process.env.MONGO_URI
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://sarah:notes2023@cluster0.g0ghade.mongodb.net/?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB Conneted: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
