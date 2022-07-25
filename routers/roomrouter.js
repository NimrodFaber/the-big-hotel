const {
  addRoom,
  deleteRoom,
  updateRoom,
  getRoom,
  getRooms,
  getRoomsWithBath,
  getRoomsOR,
} = require("../controllers/roomcontroller");

const /* { addmovie } = require("./../controller/moviecontroler") */
  /* axios = require("axios").default, */
  express = require("express"),
  app = express(),
  router = express.Router();
/* router.use(express.static("public"));
router.use(express.urlencoded({ extended: true }));
router.use(express.json()); */

router.post("/", (req, res) => {
  const { isVip, haveBath, roomNumber } = req.body;
  addRoom(isVip, haveBath, roomNumber)
    .then((room) => res.send(room))
    .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
  getRooms()
    .then((room) => res.json({ room }))
    .catch((err) => console.log(err));
});
router.get("/:id", (req, res) => {
  getRoom(req.params.id)
    .then((room) => res.json(room))
    .catch((err) => console.log(err));
});
router.get("/withbath/true", (req, res) => {
  getRoomsWithBath()
    .then((room) => res.json({ room }))
    .catch((err) => console.log(err));
});
router.get("/orbathorvip/true", (req, res) => {
  getRoomsOR()
    .then((room) => res.json(room))
    .catch((err) => console.log(err));
});

router.put("/:id", (req, res) => {
  /* let body = req.query;
  let _id = req.params.id; */
  updateRoom(req.params.id, req.body)
    .then((room) => res.json(room))
    .catch((err) => console.log(err));
});
router.delete("/:id", (req, res) => {
  deleteRoom(req.params.id)
    .then((room) => res.json(room))
    .catch((err) => console.log(err));
});
module.exports = router;
