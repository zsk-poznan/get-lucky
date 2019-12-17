const fetch = require("node-fetch");
const { logDate } = require("./utils");

const KEY = process.env.FAUNADB_KEY;
const LUCKY_REF = process.env.LUCKY_REF;

const b64encodedSecret = Buffer.from(KEY + ":").toString("base64");

const query = `
{
    findLuckyNumberByID(id: ${LUCKY_REF}) {
        luckyNumber
        date
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

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET"
};

async function getLucky() {
  logDate();

  const response = await fetch(URL, FETCH_OPTIONS);

  let { data, errors }  = await response.json();
  if (errors) {
    console.log(errors)
    return {
      headers,
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }

  return {
    headers,
    statusCode: 200,
    body: JSON.stringify({ data: data.findLuckyNumberByID })
  };
}

exports.handler = getLucky;
