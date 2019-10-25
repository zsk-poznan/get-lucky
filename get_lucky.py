import os
from time import sleep
from json import dumps

import requests

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

login = os.environ["VULCAN_LOGIN"]
password = os.environ["VULCAN_PASSWORD"]

def get_vulcan_keys():
    options = Options()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--disable-software-rasterizer")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--no-sandbox")

    driver = webdriver.Chrome(options=options)
    driver.get("https://cufs.vulcan.net.pl/poznan/Account/LogOn?ReturnUrl=%2Fpoznan%2FFS%2FLS%3Fwa%3Dwsignin1.0%26wtrealm%3Dhttps%253a%252f%252fuonetplus.vulcan.net.pl%252fpoznan%252fLoginEndpoint.aspx%26wctx%3Dhttps%253a%252f%252fuonetplus.vulcan.net.pl%252fpoznan%252fLoginEndpoint.aspx")

    login_input = driver.find_element_by_id("LoginName")
    password_input = driver.find_element_by_id("Password")

    login_input.send_keys(login)
    password_input.send_keys(password)
    password_input.submit()


    sleep(2)
    cookies = driver.get_cookies()
    permissions = driver.execute_script("return VParam.permissions")

    driver.quit()

    return permissions, cookies

def get_lucky():
    permissions, cookies = get_vulcan_keys()

    url = 'https://uonetplus.vulcan.net.pl/poznan/Start.mvc/GetKidsLuckyNumbers'

    data = {
        'permissions': permissions
    }

    r = requests.get(url, cookies=cookies, data=data)
    print(r.text)

if __name__ == '__main__':
    get_lucky()