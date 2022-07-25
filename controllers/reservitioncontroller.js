const Reservition = require("../models/reservition");
const updateReservition = (_id, body) => {
  return new Promise((resolve, reject) => {
    Reservition.findByIdAndUpdate(_id, { $set: body })
      .then((reserv) => resolve(reserv))
      .catch((err) => reject(err));
  });
};
const addreservition = (room_id, haveBath, roomNumber, capacity) => {
  return new Promise((resolve, rejrct) => {
    const reservition = new Reservition({
      room_id,
      haveBath,
      roomNumber,
      capacity,
    });
    reservition
      .save()
      .then((guest) => resolve(guest))
      .catch((err) => rejrct(err));
  });
};

const getRes = (_id) => {
  return new Promise((resolve, reject) => {
    Reservition.findById(_id)
      .then((reservition) => resolve(reservition))
      .catch((err) => reject(err));
  });
};
module.exports = { addreservition, updateReservition, getRes };
