const getLucky = require("./getLucky");
const parseResponse = require("./parseResponse");
const updateLucky = require("./updateLucky");

module.exports.hello = async () => {
  const response = await getLucky();
  console.log(response);
  const lucky = parseResponse(response);
  console.log(lucky);
  const faunaResponse = await updateLucky(lucky);
  console.log(await faunaResponse);

  return {
    body: {
      lucky
    }
  };
};
