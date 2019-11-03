const getLucky = require("./getLucky");
const parseResponse = require("./parseResponse");

module.exports.hello = async () => {
  const response = await getLucky();
  const lucky = parseResponse(response);

  return {
    body: {
      lucky
    }
  };
};
