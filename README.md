# Depracation notice: You should use [this](https://github.com/zsk-poznan/szczesliwy-numerek-backend) instead 

# get-lucky

[This video](https://www.youtube.com/watch?v=XkeIwhKIi84) explains our motivation for this project.

This repository contains source code for scraping the lucky number from Vulcan system. Main reason of this project is to enable other students to play with this data by building bots, or displaying the lucky number on their websites.

## Usage

The lucky number is accessible via lambda endpoint, with no authorization needed - just a simple GET request e.g. with curl it looks like this:

    curl https://get-lucky.netlify.com/.netlify/functions/get

Lucky number is updated every day at 6 a.m. and if there is no lucky number (weekends, holidays) the `0` will be returned.

When using `get-lucky` it would be nice of you if you add info about it and link our website (https://get-lucky.netlify.com)

## How it works

In main folder you can find python scripts for getting the lucky number and updating the DB entrance (faunadb + graphql). In `/front/functions` you can find lambda function for accessing this value.

### Getting the lucky number

This script uses selenium for scraping `permissions` and cookies from Vulcan site.

After that we can get the lucky number by accessing the api endpoint (`https://uonetplus.vulcan.net.pl/poznan/Start.mvc/GetKidsLuckyNumbers`) with passing the cookies and permissions in request body.

### Lambda function

Thanks to Netlify you can trigger this function by visiting https://get-lucky.netlify.com/.netlify/functions/get

## Maintainer

Current maintainer of this system is Patryk Niedźwiedziński (patryk.niedzwiedzinski@uczen.zsk.poznan.pl). I'm now in third grade, but for sure I won't have time for this project in next grade. If you want to get involved and become maybe later a maintainer send me an email.

## Made with get-lucky

- Send with Messenger https://github.com/pniedzwiedzinski/send-lucky
- Send with Discord https://github.com/latachz/send-lucky-discord
- https://github.com/Henzelix/lucky-number
- BoboBot - the Telegram bot https://github.com/pniedzwiedzinski/bobo
