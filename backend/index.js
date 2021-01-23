const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.end("Helloo");
});

io.on("connection", (socket) => {
  console.log("connected...");

  socket.on("color", (color) => {
    console.log(color);
    io.emit("received-color", color);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
