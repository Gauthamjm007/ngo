const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const router = require("./config/routes");
const setupDB = require("./config/database");
app.use(express.json());
app.use("/", router);
//connect to db
setupDB();
//listening to port
app.listen(port, () => {
  console.log("listening at port 4000.......");
});
