const mongoose = require('mongoose');

const connectDB = async () => {
  const connectToDatabase = await mongoose.connect(process.env.MONGO_URI);

  console.log(
    `MongoDB Connected: ${connectToDatabase.connection.host}`.cyan.underline
      .bold
  );
};

module.exports = connectDB;
