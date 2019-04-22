const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const { messageGenrator } = require("./utils/message");
const publicPath = path.join(__dirname, "../public");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
io.on("connect", socket => {
  console.log("New user Connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
  // Emmint Event

  socket.emit("newMessage", messageGenrator("Admin", "Welcome to chat app"));
  socket.broadcast.emit(
    "newMessage",
    messageGenrator("Admin", "New user joined")
  );
  socket.on("createMessage", (Message, callback) => {
    console.log("New Message created", Message);
    io.emit("newMessage", {
      from: Message.from,
      text: Message.text
    });
    callback("Acknowledment from server");
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
