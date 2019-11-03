const getLucky = require("./src/getLucky");
const parseResponse = require("./src/parseResponse");
const updateLucky = require("./src/updateLucky");

module.exports.hello = async () => {
  const response = await getLucky();
  console.log("Vulcan: " + JSON.stringify(response));
  const lucky = parseResponse(response);
  console.log(`Parsed: ${lucky}`);
  const faunaResponse = await updateLucky(lucky);
  console.log("Fauna: " + JSON.stringify(faunaResponse));

  return {
    body: {
      lucky
    }
  };
};
