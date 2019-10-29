const CDP = require("chrome-remote-interface");

module.exports.hello = async (event, context, callback, chrome) => {
  await CDP.Version().then(versionInfo => {
    console.log(
      JSON.stringify({
        versionInfo,
        chrome
      })
    );
  });

  return {
    body: JSON.stringify(chrome)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
