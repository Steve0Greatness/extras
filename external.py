from json import load, dump
from datetime import datetime

ExternalExtras = []

with open("api.json", "r") as file:
    EXTRAS = load(file)
    for extra in EXTRAS:
        if not extra["isExternal"]:
            continue
        creation = datetime.strptime(extra["date"], "%m/%d/%y")
        ExternalExtras.append({
            "title": extra["name"],
            "description": extra["desc"],
            "url": extra["fileName"],
            "status": extra["status"],
            "created": creation.strftime("%Y %b %d")
        })

with open("external.json", "w") as file:
    dump(ExternalExtras, file, indent=2)
