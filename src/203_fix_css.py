import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob
import csv

files = glob.glob("/Users/nakamurasatoru/git/d_hi/website/static/**/*.html", recursive=True)

new_link = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500&display=swap"
new_link2 = "https://fonts.gstatic.com"

for file in files:
    print(file)

    try:

        soup = BeautifulSoup(open(file), "lxml")

        links = soup.find_all("link")

        flg = False

        e = None

        for link in links:

            href = link.get("href")

            if href == new_link:
                flg = True

            if href == "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" or href == "https://fonts.googleapis.com/css2?family=Abel&display=swap":
                print(link)
                link.decompose()

            if href == "https://fonts.gstatic.com":
                e = link

        if not flg and e:
            print(e)
            new_e = soup.new_tag("link")
            new_e["href"] = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500&display=swap"
            new_e["rel"] = "stylesheet"
            e.insert_after(new_e)

        title = soup.find("title")
        title.string = title.text

        links = soup.find_all("link")

        flg = False

        e = None

        for link in links:
            href = link.get("href")

            if href == new_link2:
                flg = True

            if href == "https://www.ssl-system.jp/hi-u-tokyo/assets/css/style.css":
                e = link

        if not flg and e:
            new_e = soup.new_tag("link")
            new_e["href"] = "https://fonts.gstatic.com"
            new_e["rel"] = "preconnect"
            e.insert_before(new_e)

            new_e2 = soup.new_tag("link")
            new_e2["href"] = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500&display=swap"
            new_e2["rel"] = "stylesheet"
            new_e.insert_after(new_e2)

        with open(file, mode='w') as f:
            f.write(soup.prettify())

    except Exception as e:
        print(e)