const expect = require("expect");
const { messageGenrator, locationMessageGenrator } = require("./message");

describe("messageGenrator", () => {
  it("should generate correct message object", () => {
    var from = "Jan";
    var text = "Hey I m here";
    var message = messageGenrator(from, text);

    expect(typeof message.createdAt).toBe("number");
    expect({ from: message.from, text: message.text }).toMatchObject({
      from,
      text
    });
  });
});
describe("locationMessageGenrator", () => {
  it("should give us a loaction url", () => {
    var from = "Admin";
    var longitude = 15;
    var latitude = 10;
    var url = "https://www.google.com/maps?q=10,15";
    var message = locationMessageGenrator(from, latitude, longitude);

    expect(typeof message.createdAt).toBe("number");
    expect({
      from: message.from,
      latitude: message.latitude,
      longitude: message.longitude,
      url: message.url
    }).toMatchObject({
      from,
      url
    });
  });
});
