import csv
import json

data = {}

with open('data/redirect.csv', 'r') as f:
    reader = csv.reader(f)
    header = next(reader)  # ヘッダーを読み飛ばしたい時

    for row in reader:
        data[row[0]] = row[1]


f2 = open("../static/data/redirect.json", 'w')
json.dump(data, f2, ensure_ascii=False, indent=4, separators=(',', ': '))