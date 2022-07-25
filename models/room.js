const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
  isVip: {
    type: Boolean,
    required: "שדה כתובת הוא שדה נדרש",
  },
  haveBath: {
    type: Boolean,
    required: "שדה שם הוא שדה נדרש",
  },
  roomNumber: {
    type: Number,

    required: "שדה טלפון הוא שדה נדרש",
  },
});
/* StoreSchema.plugin(require("mongoose-autopopulate"));
StoreSchema.methods.testFunc = function testFunc(params) {}; */
module.exports = mongoose.model("Room", roomSchema);
