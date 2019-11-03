const parseResponse = response => {
  try {
    return parseInt(
      response["data"][0]["Zawartosc"][0]["Zawartosc"][0]["Nazwa"].slice(-2)
    );
  } catch (e) {
    return 0;
  }
};

module.exports = parseResponse;
