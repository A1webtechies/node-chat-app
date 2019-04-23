const messageGenrator = (from, text) => {
  return { from, text, createdAt: new Date().getTime() };
};
const locationMessageGenrator = (from, latitude, longtitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longtitude}`,
    createdAt: new Date().getTime()
  };
};
module.exports = { messageGenrator, locationMessageGenrator };
