const fetch = require("node-fetch");

const KEY = process.env.FAUNADB_KEY;
const LUCKY_REF = process.env.LUCKY_REF;

const b64encodedSecret = Buffer.from(KEY + ":").toString("base64");

const query = `
{
    findLuckyNumberByID(id: ${LUCKY_REF}) {
        luckyNumber
    }
}
`;

const URL = "https://graphql.fauna.com/graphql";
const FETCH_OPTIONS = {
  method: "POST",
  headers: {
    Authorization: `Basic ${b64encodedSecret}`
  },
  body: JSON.stringify({ query })
};

exports.handler = async function() {
  const response = await fetch(URL, FETCH_OPTIONS);

  let { data } = response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ data: data.findLuckyNumberByID.luckyNumber })
  };
};
