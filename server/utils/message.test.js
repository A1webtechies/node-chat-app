const expect = require("expect");
const { messageGenrator } = require("./message");

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
