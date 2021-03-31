import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob
import csv

files = glob.glob("/Users/nakamurasatoru/git/d_hi/website/tosho_test/**/*.html", recursive=True)

for file in files:
    print(file)

    soup = BeautifulSoup(open(file), "lxml")

    print(soup)

    soup = str(soup).replace(" ../../", "https://www.hi.u-tokyo.ac.jp/dev/")
    soup = str(soup).replace("../../", "https://www.hi.u-tokyo.ac.jp/dev/")
    soup = str(soup).replace("../../../", "https://www.hi.u-tokyo.ac.jp/dev/")
    soup = str(soup).replace("https://www.hi.u-tokyo.ac.jp/dev/../", "https://www.hi.u-tokyo.ac.jp/dev/")
    # soup = soup.replace("this.baseUrl", "this.dataUrl")
    # soup = soup.replace("baseUrl: process.env.BASE_URL,", "baseUrl: process.env.BASE_URL,dataUrl: process.env.DATA_URL,")

    with open(file, mode='w') as f:
        f.write(str(soup))
