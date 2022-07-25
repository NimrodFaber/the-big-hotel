const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const customJoi = Joi.extend(require("joi-age"));
const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "שדה כתובת הוא שדה נדרש",
  },
  gender: {
    type: String,
    required: "שדה שם הוא שדה נדרש",
  },
  dateOfBirth: {
    type: Date,

    required: "שדה טלפון הוא שדה נדרש",
  },
  isVip: {
    type: Boolean,
  },
});
/*  StoreSchema.plugin(require("mongoose-autopopulate")); */
guestSchema.methods.ganerate = function () {
  return this.name + " " + this.gender;
};
guestSchema.methods.blabla = function () {
  console.log("blabla");
};
guestSchema.methods.over21 = function () {
  /*   if (customJoi.date(dateOfBirth).minAge(21)) {
   */
  var Xmas = new Date();
  var year = Xmas.getYear(); // returns 95

  let err = this.dateOfBirth;
  let rrr = err.getYear();
  this /* _doc */.canDrink = year - 21 > rrr;
  //if (year - 21 > rrr) {
  /*     return (this._doc.candrink = true);
  } else {
    return (this._doc.candrink = false); */
};

/*   } */

module.exports = mongoose.model("Guest", guestSchema);
