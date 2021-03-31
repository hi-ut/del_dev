import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata

path = "data/top.html"

if not os.path.exists(path):

    url = "http://www.hi.u-tokyo.ac.jp/publication/publication_top-j.html"
    rr = requests.get(url)
    html = rr.text

    with open(path, mode='w') as f:
        f.write(str(html))

soup = BeautifulSoup(open(path), "lxml")

tables = soup.find_all(class_="dTable")



ms = soup.find_all(class_="m")

map = {}

for k in range(len(tables)):
    table = tables[k]

    year = ms[k].text.split("（")[0]

    if year != "2006" and False:
        continue

    print("year", year)

    tds = table.find_all("td")

    arr = []
    
    for td in tds:

        ps = td.find_all("p")

        ars = td.find_all(class_="ar")

        for l in range(len(ps)):

            p = ps[l]

            children = list(p.children)

            j = 0

            new_children = []

            if "/kiyo/" in str(children):
                while j + 2 < len(children):

                    link2 = children[j + 1]
                    title = link2.text
                    link = link2.get("href")
                    new_children.append({
                        "label" : unicodedata.normalize("NFKC", title),
                        "url" : link
                    })

                    j += 3

            else:
                while j + 2 < len(children):

                    
                    link2 = children[j + 1]
                    
                    if "大日本古文書 幕末外国関係文書５２" in str(link2):
                        title = "大日本古文書 幕末外国関係文書５２"
                        new_children.append({
                            "label" : unicodedata.normalize("NFKC", title),
                            "url" : "http://www.utp.or.jp/bd/978-4-13-091452-9.html"
                        })
                    elif "www.utp.or.jp/bd/978-4-13-092827-4" in str(link2):
                        title = "日本荘園絵図聚影釈文編１（古代）"
                        new_children.append({
                            "label" : unicodedata.normalize("NFKC", title),
                            "buy" : "http://www.utp.or.jp/bd/978-4-13-092827-4.html"
                        })
                    else:

                        title = children[j + 2].strip()

                        if title == "":
                            title = link2.text
                            link = link2.get("href")
                            buy = children[j + 3].get("href")
                        else:

                            url = children[j + 3]
                            link = url.get("href")

                            buy = children[j + 4].get("href")

                        new_children.append({
                            "label" : unicodedata.normalize("NFKC", title),
                            "url" : link,
                            "buy" : buy
                        })

                    j += 5

            foot = ars[l].text
            
            foot = foot.replace("以上", "").replace("より", "にて").split("にて")

            publisher = foot[0]
            type = foot[1].replace("中", "")

            item = {
                "publisher" : publisher,
                "type" : type,
                "children" : new_children
            }

            arr.append(item)

    map[year] = arr

f2 = open("../static/data/publication.json", 'w')
json.dump(map, f2, ensure_ascii=False, indent=4, separators=(',', ': '))