var socket = io();
socket.on("connect", function() {
  console.log("Contected To Server");
  if (jQuery) {
    console.log("Jquery working");
  }
});
socket.on("disconnect", function() {
  console.log("Server disconnected");
});
socket.on("newMessage", function(Message) {
  console.log("new Message ", Message);
  var li = $("<li></li>");
  li.text(`${Message.from}: ${Message.text}`);
  $("#message").append(li);
});

$("#message-form").on("submit", function(e) {
  e.preventDefault();
  socket.emit(
    "createMessage",
    {
      from: "User",
      text: $("[name=message]").val()
    },
    function(data) {
      console.log("Got It", data);
    }
  );
});
