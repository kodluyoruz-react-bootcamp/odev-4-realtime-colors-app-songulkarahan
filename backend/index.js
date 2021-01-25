const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 4000;

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

http.listen(port, () => {
  console.log(`Server running at port ` + port);
});
