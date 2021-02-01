const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
//import routes
const formRoute = require("./routes/form");

// middlewares
app.use(bodyParser.json());

// connect to mongodb
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to database...");
  }
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
app.use("/application_form", formRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

// listing for request
app.listen(3000, () => {
  console.log("server started on port 3000...");
});
