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
socket.on("newLocation", function(message) {
  var li = $("<li></li>");
  var a = $('<a target ="_blank">I m Here</a>');
  li.text(`${message.from}: `);
  a.attr("href", message.url);
  li.append(a);
  $("#message").append(li);
});
var locationButton = $("#send-location");

locationButton.on("click", function() {
  if (!navigator.geolocation) {
    alert("Your Browser does not support the goelocation");
  }
  navigator.geolocation.getCurrentPosition(
    function(position) {
      socket.emit("newLocationMessage", {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      });
    },
    function() {
      alert("Unable to fetch Geoloaction");
    }
  );
});
