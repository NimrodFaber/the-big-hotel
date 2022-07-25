/* const guest = require("../models/guest"); */
const Guest = require("../models/guest");

const addguest = (name, gender, dateOfBirth, isVip) => {
  return new Promise((resolve, rejrct) => {
    const guest = new Guest({ name, gender, dateOfBirth, isVip });
    guest
      .save()
      .then((guest) => resolve(guest))
      .catch((err) => rejrct(err));
  });
};

/* const updateGuest = (_id, body) => {
  return new Promise((resolve, reject) => {
    Guest.findByIdAndUpdate({ _id }, { set: body })
      .then((guest) => resolve(guest))
      .catch((err) => reject(err));
  });
}; */

const getGuests = () => {
  return new Promise(function (resolve, reject) {
    Guest.find()
      .lean()
      .then((guests) => {
        guests.forEach(function (gest) {
          gest.over21();
          console.log(gest);
        });
        resolve(guests);
      })

      .catch((err) => reject(err));
  });
};

const getGuest = (_id) => {
  return new Promise((resolve, reject) => {
    Guest.findById(_id)
      .then((guest) => resolve(guest))
      .catch((err) => reject(err));
  });
};

const updateGuest = (_id, body) => {
  return new Promise((resolve, reject) => {
    Guest.findByIdAndUpdate(_id, { $set: body })
      .then((guest) => resolve(guest))
      .catch((err) => reject(err));
  });
};

const deleteGuest = (_id) => {
  return new Promise((resolve, reject) => {
    Guest.findOneAndRemove({ _id })
      .then((guest) => resolve(guest))
      .catch((err) => reject(err));
  });
};

module.exports = {
  addguest,
  updateGuest,
  getGuests,
  getGuest,
  updateGuest,
  deleteGuest,
};
