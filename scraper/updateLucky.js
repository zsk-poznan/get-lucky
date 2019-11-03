const fetch = require("node-fetch");

const KEY = process.env.FAUNADB_KEY;
const LUCKY_REF = process.env.LUCKY_REF;

const b64encodedSecret = Buffer.from(KEY + ":").toString("base64");

const URL = "https://graphql.fauna.com/graphql";

const updateLucky = async lucky => {
  const query = `
    mutation {
        updateLuckyNumber(
            id: ${LUCKY_REF}
            data: {
                luckyNumber: ${lucky}
            }) {
                luckyNumber
            }
        }`;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Basic ${b64encodedSecret}`
    },
    body: JSON.stringify({ query })
  };

  return await fetch(URL, fetchOptions).then(r => r.json());
};

module.exports = updateLucky;
