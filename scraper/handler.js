const getLucky = require("./getLucky");

module.exports.hello = async () => {
  const lucky = await getLucky();

  return {
    body: {
      lucky
    }
  };
};
