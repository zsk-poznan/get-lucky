const sleep = require("util").promisify(setTimeout);
const getPage = require("./getPage");

const login = async page => {
  const url =
    "https://cufs.vulcan.net.pl/poznan/Account/LogOn?ReturnUrl=%2Fpoznan%2FFS%2FLS%3Fwa%3Dwsignin1.0%26wtrealm%3Dhttps%253a%252f%252fuonetplus.vulcan.net.pl%252fpoznan%252fLoginEndpoint.aspx%26wctx%3Dhttps%253a%252f%252fuonetplus.vulcan.net.pl%252fpoznan%252fLoginEndpoint.aspx";

  await page.goto(url, {
    waitUntil: ["domcontentloaded", "networkidle2"]
  });

  const login = process.env["VULCAN_LOGIN"];
  const password = process.env["VULCAN_PASSWORD"];

  await page.type("#LoginName", login);
  await page.type("#Password", password);
  await page.click('input[type="submit"]');

  await sleep(5000);
};

const getLucky = async () => {
  const page = await getPage();

  await login(page);

  const lucky = await page.evaluate(
    async () =>
      await fetch(
        "https://uonetplus.vulcan.net.pl/poznan/Start.mvc/GetKidsLuckyNumbers",
        {
          credentials: "include",
          headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
          },
          referrer: "https://uonetplus.vulcan.net.pl/poznan/Start.mvc/Index",
          referrerPolicy: "no-referrer-when-downgrade",
          body: `permissions=${encodeURIComponent(VParam.permissions)}`,
          method: "POST",
          mode: "cors"
        }
      ).then(r => r.json())
  );

  return lucky;
};

module.exports = getLucky;
