import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob

files = glob.glob("../content/syoho_/*.html")

map = {}

for file in files:
    print(file)

    soup = BeautifulSoup(open(file), "lxml")

    items = {}

    tables = soup.find_all(class_="mtx")

    print(len(tables))

    key = "top"
    items[key] = []

    for table in tables:

        trs = table.find_all("tr")

        for tr in trs:
            # print(tr)
            tds = tr.find_all("td")

            

            if len(tds) == 0:
                continue
        
            if "bgcolor" in str(tds[0]):
                key = tds[0].text
                key = key.replace("＜", "＞").replace("＞", "")
                items[key] = []

            else:

                print(tds)

                td0 = tds[0]
                if td0.find("a"):
                    a = td0.find("a")
                    href = a.get("href")
                    item = {
                        "url" : "http://www.hi.u-tokyo.ac.jp/publication/syoho/" + href if "hi.u-tokyo.ac.jp" not in href else href,
                        "title" : a.text
                    }
                else:
                    item = {
                        "title" : td0.text
                    }

                if len(tds) > 2:
                    
                    td1 = tds[2]
                    print(td1)
                    if td1.text != "":
                        item["author"] = td1.text

                if len(tds) > 4:
                    td1 = tds[4]
                    print(td1)
                    if td1.text != "":
                        item["page"] = td1.text

                items[key].append(item)


    item = {
        "title" : unicodedata.normalize("NFKC", soup.find("h2").text.strip()).replace("(", "（").replace(")", "）"),
        "children" : items
    }

    
    vol = file.split("/")[-1].replace("syoho", "").split(".")[0]
    dir = "../static/data/syoho/"+vol
    os.makedirs(dir, exist_ok=True)
    f2 = open(dir+"/data.json", 'w')
    json.dump(item, f2, ensure_ascii=False, indent=4, separators=(',', ': '))