const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
//import routes
const formRoute = require("./routes/form");
const cors = require("cors");

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

// Routes
app.use("/api/application_form", formRoute);

app.get("/api", (req, res) => {
  res.send("hello world");
});

// listing for request
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

// const express = require("express");

// const app = express();

// app.get("/api/customers", cors(), (req, res) => {
//   const customers = [
//     { id: 1, firstName: "John", lastName: "Doe" },
//     { id: 2, firstName: "Brad", lastName: "Traversy" },
//     { id: 3, firstName: "Mary", lastName: "Swanson" },
//   ];

//   res.json(customers);
// });

// const port = 5000;

// app.listen(port, () => `Server running on port ${port}`);
