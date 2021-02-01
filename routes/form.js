const express = require("express");
const router = express.Router();
const Form = require("../models/Form");
const cors = require("cors");

// const course = new Course({
//   name: "Accounting",
//   author: "njabulo",
//   tags: ["financial statements", "Auditing"],
// });

const applicants = [];

router.post("/", cors(), async (req, res) => {
  const form = new Form({
    name: req.body.name,
    surname: req.body.surname,
    idNumber: req.body.idNumber,
    schoolName: req.body.schoolName,
    grade: req.body.grade,
  });
  applicants.push(form);
  try {
    res.json(form);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/", cors(), async (req, res) => {
  // res.send("You're on the form");
  res.json(applicants);
  // const getcourses = await Course.find({ author: "sam" });
  // try {
  //   res.json(getcourses);
  // } catch (err) {
  //   res.json({ message: err });
  // }
});

module.exports = router;
