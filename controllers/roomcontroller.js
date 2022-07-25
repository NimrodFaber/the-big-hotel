const Room = require("../models/room");

const addRoom = (isVip, haveBath, roomNumber) => {
  return new Promise((resolve, rejrct) => {
    const room = new Room({ isVip, haveBath, roomNumber });
    room
      .save()
      .then((room) => resolve(room))
      .catch((err) => rejrct(err));
  });
};

const getRooms = () => {
  return new Promise((resolve, reject) => {
    Room.find()
      .then((room) => resolve(room))
      .catch((err) => reject(err));
  });
};
const getRoomsWithBath = () => {
  return new Promise((resolve, reject) => {
    Room.find({ haveBath: true })
      .then((room) => resolve(room))
      .catch((err) => reject(err));
  });
};
const getRoomsOR = () => {
  return new Promise((resolve, reject) => {
    Room.find({ $or: [{ haveBath: true }, { isVip: true }] })
      .then((room) => resolve(room))
      .catch((err) => reject(err));
  });
};

const getRoom = (_id) => {
  return new Promise((resolve, reject) => {
    Room.findById(_id)
      .then((room) => resolve(room))
      .catch((err) => reject(err));
  });
};

const updateRoom = (_id, body) => {
  return new Promise((resolve, reject) => {
    Room.findByIdAndUpdate(_id, { $set: body })
      .then((room) => resolve(room))
      .catch((err) => reject(err));
  });
};

const deleteRoom = (_id) => {
  return new Promise((resolve, reject) => {
    Room.findOneAndRemove({ _id })
      .then((room) => resolve(room))
      .catch((err) => reject(err));
  });
};
module.exports = {
  addRoom,
  deleteRoom,
  updateRoom,
  getRoom,
  getRooms,
  getRoomsWithBath,
  getRoomsOR,
};
