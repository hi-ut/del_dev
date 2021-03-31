import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob
import csv
import urllib
import urllib.parse


pathes = [
    # "/Users/nakamurasatoru/git/d_hi/website/hi2022/dist", 
    "/Users/nakamurasatoru/git/d_hi/website/tosho_test"]

base_url = "https://www.hi.u-tokyo.ac.jp/dev"

rows = []
rows.append(["page", "link", "status"])

map = {}

for path in pathes:
    files = glob.glob(path+"/**/*.html", recursive=True)

    for i in range(len(files)):

        file = files[i]

        print(i+1, len(files))

        url = file.replace(path, base_url)

        '''
        res = requests.get(url,auth=('hidemo','demo'))
        content = res.content
        soup = BeautifulSoup(content, "lxml")
        '''
        soup = BeautifulSoup(open(file), 'lxml')

        for a in soup.find_all("a"):
            link = urllib.parse.urljoin(url, a.get("href"))

            if link not in map:
                print(link)
                request = requests.get(link,auth=('hidemo','demo'))
                map[link] = request.status_code

            if map[link] == 404:
                rows.append([url.replace(base_url, ""), link.replace(base_url, ""), map[link]])

import csv

with open('data/list.csv', 'w') as f:
    writer = csv.writer(f, lineterminator='\n') # 改行コード（\n）を指定しておく
    writer.writerows(rows)     # list（1次元配列）の場合