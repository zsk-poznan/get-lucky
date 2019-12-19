const fetch = require("node-fetch");
const { logDate } = require("./utils");

const PARSER_ERROR_MSG =
  "The parser couldn't get the lucky number. We probably working on it but to be sure you can let us know on https://github.com/zsk-poznan/get-lucky";

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

  let { data, errors } = await response.json();

  if (errors) {
    console.log(errors);
    return {
      headers,
      statusCode: 500,
      body: JSON.stringify({ data: null, errors })
    };
  }
  date = new Date(data.findLuckyNumberByID.date);
  now = new Date(Date.now());

  if (date.getDate() !== now.getDate()) {
    return {
      headers,
      statusCode: 500,
      body: JSON.stringify({ data: null, errors: [PARSER_ERROR_MSG] })
    };
  }

  return {
    headers,
    statusCode: 200,
    body: JSON.stringify({ data: data.findLuckyNumberByID })
  };
}

exports.handler = getLucky;
