const express = require("express"),
  app = express(),
  router = express.Router(),
  {
    addreservition,
    updateReservition,
    getRes,
  } = require("../controllers/reservitioncontroller");

router.post("/", (req, res) => {
  const { room_id, haveBath, roomNumber, capacity } = req.body;
  addreservition(room_id, haveBath, roomNumber, capacity)
    .then((movie) => res.send(movie))
    .catch((err) => console.log(err));
});
router.put("/:id", (req, res) => {
  updateReservition(req.params.id, req.body)
    .then((reserv) => res.send(reserv))
    .catch((err) => console.log(err));
});
router.get("/:id", (req, res) => {
  getRes(req.params.id)
    .then((reservition) => res.json(reservition))
    .catch((err) => console.log(err));
});
module.exports = router;
