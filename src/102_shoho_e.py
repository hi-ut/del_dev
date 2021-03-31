import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob

files = glob.glob("../static/data/syoho/*/data.json")

for file in sorted(files):
    print(file)

    vol = file.split("/")[-2]

    if int(vol) < 27:
        continue

    json_open = open(file, 'r')
    df = json.load(json_open)
    collections = df["children"]

    for key in collections:
        arr = collections[key]

        for e in arr:
            if "url" in e:
                url = e["url"]
                if ".html" in url:
                    filename = url.split("/")[-1].split(".")[0]

                    opath = "data/syoho/" + vol + "/" + filename + ".html"

                    if not os.path.exists(opath):

                        dirname = os.path.dirname(opath)
                        os.makedirs(dirname, exist_ok=True)

                        rr = requests.get(url)
                        html = rr.text

                        with open(opath, mode='w') as f:
                            f.write(str(html))

                    soup = BeautifulSoup(open(opath), "lxml")
                    # print(soup)

                    print("-------------------------")

                    print(vol, filename)

                    if not soup.find("strong"):
                        continue

                    title = soup.find("strong").text

                    print(title)

                    mtx = soup.find_all(class_="mtx")

                    html = soup.find(id="txtBody")

                    for h1 in html.find_all("h1"):
                        h1.decompose()

                    for h3 in html.find_all("h3"):
                        h3.decompose()

                    for e in html.find_all(id="txtBody"):
                        e.decompose()

                    for e in html.find_all(class_="pageNavi"):
                        e.decompose()

                    for e in html.find_all("hr"):
                        e.decompose()

                    footer = mtx[len(mtx) - 1].text.strip()
                    mtx[len(mtx) - 1].decompose()

                    text = str(html).strip().replace("\n", "<br/>")
                    

                    

                    text = text.replace(footer, "").replace("<br/><br/>", "<br/>").replace("<br/><br/>", "<br/>")

                    # print(text, footer)

                    content = '''---
title: {}
footer: {}
---
{}'''.format(title, footer, text)

                    md_file = "../content/ja/publication/syoho/" + vol + "/" + filename + ".md"

                    dirname = os.path.dirname(md_file)
                    os.makedirs(dirname, exist_ok=True)

                    with open(md_file, mode='w') as f:
                        f.write(content)

    