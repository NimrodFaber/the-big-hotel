const /* axios = require("axios").default, */
  express = require("express"),
  app = express(),
  {
    addguest,
    getGuest,
    updateGuest,
    getGuests,
    deleteGuest,
  } = require("../controllers/guestcontrooler"),
  router = express.Router();

router.post("/", (req, res) => {
  const { name, gender, dateOfBirth, isVip } = req.body;
  addguest(name, gender, dateOfBirth, isVip)
    .then((guest) => res.send(guest))
    .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
  getGuests()
    .then((guest) => res.json({ guest }))
    .catch((err) => console.log(err));
});
router.get("/:id", (req, res) => {
  getGuest(req.params.id)
    .then((guest) => res.json(guest))
    .catch((err) => console.log(err));
});
router.put("/:id", (req, res) => {
  /* let body = req.query;
  let _id = req.params.id; */
  updateGuest(req.params.id, req.body)
    .then((guest) => res.json(guest))
    .catch((err) => console.log(err));
});
router.delete("/:id", (req, res) => {
  deleteGuest(req.params.id)
    .then((guest) => res.json(guest))
    .catch((err) => console.log(err));
});
module.exports = router;
