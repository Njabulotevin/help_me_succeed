const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  name: { type: String, require: true },
  surname: { type: String, require: true },
  idNumber: { type: Number, require: true },
  schoolName: { type: String, require: true },
  grade: { type: Number, require: true },
  // residentialAddress: {
  //   streetName: String,
  //   line2: String,
  //   line3: String,
  //   postalCode: Number,
  // },
  // courseChoices: [],
  // personalNumber: { type: Number, require: true },
  // emailAddress: { type: String, require: true },
  // isDisabled: { type: Boolean, require: true },
  // nextOfkinName: { type: String, require: true },
  // nextOfkinAddress: {
  //   streetName: String,
  //   line2: String,
  //   line3: String,
  //   postalCode: Number,
  // },
  // nextOfkinNumber: { type: Number, require: true },
  // courseChoices: [],
  // universityChoices: [],
});

module.exports = mongoose.model("Form", formSchema);
