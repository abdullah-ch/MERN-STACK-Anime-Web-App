const express = require("express");
const mongoose = require("mongoose");
const anime = require("./routers/anime");

mongoose
  .connect("mongodb://localhost:27017/mern-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DataBase has been connected !"))
  .catch((err) => console.log("Cannot connect to database", err.message));

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // to enable calls from every domain
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  ); // allowed actiosn
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // to deal with chrome sending an extra options request
  }

  next(); // call next middlewer in line
});
app.use("/animes", anime);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`I am listening at ${port}`);
});
