const mongoose = require("mongoose");
const reservitionSchema = new mongoose.Schema({
  room_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "room",
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
  capacity: {
    type: Number,

    required: "שדה טלפון הוא שדה נדרש",
  },
});
/* StoreSchema.plugin(require("mongoose-autopopulate"));
StoreSchema.methods.testFunc = function testFunc(params) {}; */
module.exports = mongoose.model("Reservition", reservitionSchema);
