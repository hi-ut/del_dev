import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob
import csv

files = glob.glob("/Users/nakamurasatoru/git/d_hi/website/hi/news/*.html")

map = {}

for file in files:
    print(file)

    soup = BeautifulSoup(open(file), "lxml")

    tables = soup.find_all(class_="mtx")

    for table in tables:

        trs = table.find_all("tr")

        for i in range(len(trs)):
            
            tr = trs[i]
            tds = tr.find_all("td")
            
            date = tr.find("th")

            if date == None:
                continue

            date = date.text.replace("/", "-")

            value = tr.find("td")

            if value != None:
                value = str(value).replace("<td>", "").replace("</td>", "").strip()
            else:
                value = "None"

            content = '''---
date: {}
lang: ja
featured: false
type: news
---
{}
'''.format(date, value)

            vol = file.split("/")[-1].split("news")[0].split(".")[0]
            dir = "../content/news"
            os.makedirs(dir, exist_ok=True)
            
            name = date + "-" + str(len(trs) - i).zfill(4)
            path = dir + "/" + name +".md"
            with open(path, mode='w') as f:
                f.write(content)