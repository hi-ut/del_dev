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

map = {
    base_url + "/tosho/etsuran/gakugai/yoyakugakunai.html": base_url + "/tosho/yoyaku/gakunai/index.html",
    base_url + "/tosho/yoyaku/gakunai/indexhtml": base_url + "/tosho/yoyaku/gakunai/index.html",
    base_url + "/tosho/etsuran/gakugai/toiawase.html": base_url + "/tosho/toiawase/index.html",
    "https://www.hi.u-tokyo.ac.jp/dev/tosho/etsurangakunai" : "https://www.hi.u-tokyo.ac.jp/dev/tosho/etsuran/gakunai/",
    "https://www.hi.u-tokyo.ac.jp/dev/tosho/etsurangakugai" : "https://www.hi.u-tokyo.ac.jp/dev/tosho/etsuran/gakugai/",
    base_url + "/tosho/kichosho" : base_url + "/tosho/etsuran/kichosho/",
    base_url + "/tosho/kichosho/" : base_url + "/tosho/etsuran/kichosho/",
    base_url + "/tosho/etsuran/gakugai/kensaku.html" : base_url + "/tosho/kensaku/",
    base_url + "/tosho/etsuran/gakugai/kichosho.html" : base_url + "/tosho/kichosho/",
    base_url + "/tosho/etsuran/gakugai/toiawase.html" : base_url + "/tosho/toiawase/",
    base_url + "/tosho/etsuran/gakugai/shiryoriyo.html" : base_url + "/tosho/shiryoriyo/",
    base_url + "/tosho/etsuran/gakunai/kensaku.html" : base_url + "/tosho/kensaku/",
    base_url + "/tosho/etsuran/gakunai/kichosho.html" : base_url + "/tosho/kichosho/",
    base_url + "/tosho/etsuran/gakunai/toiawase.html" : base_url + "/tosho/toiawase/",
    base_url + "/tosho/etsuran/gakunai/shiryoriyo.html" : base_url + "/tosho/shiryoriyo/",
    base_url + "/tosho/etsuran/yoyakugakunai.html" : base_url + "/tosho/yoyaku/gakunai/",
    base_url + "/tosho/etsuran/yoyakugakugai.html" : base_url + "/tosho/yoyaku/gakugai/",
    base_url + "/tosho/shiryoriyo/toiawase.html" : base_url + "/tosho/toiawase/",
}

for path in pathes:
    files = glob.glob(path+"/**/*.html", recursive=True)

    for i in range(len(files)):

        file = files[i]

        print(i+1, len(files))

        url = file.replace(path, base_url)

        # res = requests.get(url,auth=('hidemo','demo'))
        # content = res.content
        # soup = BeautifulSoup(content, "lxml")
        soup = BeautifulSoup(open(file), 'lxml')

        for a in soup.find_all("a"):
            print(url, a.get("href"))
            link = urllib.parse.urljoin(url, a.get("href"))

            if link in map:
                a["href"] = map[link]

        
        Html_file= open(file,"w")
        Html_file.write(str(soup))
        Html_file.close()
        

            
