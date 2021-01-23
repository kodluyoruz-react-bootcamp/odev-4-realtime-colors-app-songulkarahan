import io from "socket.io-client";

let socket;

export const initSocket = () => {
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });

  console.log("Connecting...");
  socket.on("connect", () => console.log("Connected!"));
};
export const sendColor = (color) => {
  if (socket) {
    socket.emit("color", color);
  }
};

export const receivedColor = (cb) => {
  if (!socket) return true;
  socket.on("received-color", function (color) {
    console.log("color received", color);
    cb(color);
  });
};
export const disconnectSocket = () => {
  console.log("Disconnecting...");
  if (socket) socket.disconnect();
};
