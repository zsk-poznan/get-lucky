const getLucky = require("./src/getLucky");
const parseResponse = require("./src/parseResponse");
const updateLucky = require("./src/updateLucky");

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
