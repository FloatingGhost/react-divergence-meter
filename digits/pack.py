import glob
import base64
import json

export = {}

for f in glob.glob("*.jpg"):
    with open(f, "rb") as img:
        img64 = base64.b64encode(img.read())
        export[f.replace(".jpg", "")] = "data:image/jpg;base64,{}".format(img64.decode())

with open("digits.json", "w") as f:
    f.write(json.dumps(export))  

