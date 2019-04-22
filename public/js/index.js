var socket = io();
socket.on("connect", function() {
  console.log("Contected To Server");
});
socket.on("disconnect", function() {
  console.log("Server disconnected");
});
socket.on("newMessage", function(Message) {
  console.log("new Message ", Message);
});
socket.emit(
  "createMessage",
  {
    from: "Qalib",
    text: "Hey"
  },
  function(data) {
    console.log("Got it", data);
  }
);
