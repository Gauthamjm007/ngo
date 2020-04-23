const mongoose = require("mongoose");

//connecting to mongoose database
const setupDB = () => {
  mongoose
    .connect(
      "mongodb+srv://gouthamjm:secret123@cluster0-dtoso.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("connected to the database");
    })
    .catch(() => {
      console.log("error connecting to the database");
    });
};

module.exports = setupDB;
