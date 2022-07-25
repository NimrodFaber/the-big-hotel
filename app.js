const express = require("express"),
  app = express(),
  path = require("path"),
  mongoose = require("mongoose"),
  guestRouter = require("./routers/guestrouter");
reservitionRouter = require("./routers/reservitionrouter");
roomRouter = require("./routers/roomrouter");
port = 2323;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/room", roomRouter);
app.use("/guest", guestRouter);
app.use("/reservition", reservitionRouter);
app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});
app.get("/*", function (req, res) {
  res.status(404);
  res.sendFile(__dirname + "/public/" + "error.html");
});
mongoose
  .connect("mongodb://0.0.0.0:27017/the_big_hotel")
  .then(() => {
    app.listen(port, () => {
      console.info(`start server start listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
