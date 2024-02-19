from bs4 import BeautifulSoup
from os import remove as RM, listdir as LS
from os.path import exists
from datetime import datetime as dt
from json import load, dump

if exists("api.json"):
    RM("api.json")
if exists("index.htm"):
    RM("index.htm")

def GetExtras():
    ExtrasSlugs = [ file if file.endswith(".html") else None for file in LS(".") ]
    Extras = []
    for slug in ExtrasSlugs:
        if slug is None:
            continue
        print(slug)
        with open(slug, encoding="utf-8") as file:
            soup = BeautifulSoup(file.read(), features="lxml")
            Description = soup.select_one("meta[name=\"description\"]").attrs["content"]
            Created = soup.select_one("meta[name=\"created\"]").attrs["content"]
            Title = soup.select_one("title").getText()

            StatusPreReq = soup.select_one("meta[name=\"status\"]")
            Status = None
            if StatusPreReq is not None:
                Status = StatusPreReq.attrs["content"]
            Extras.append({
                "Title": Title,
                "Description": Description,
                "Created": Created,
                "Status": Status,
                "Slug": slug,
                "External": False,
            })
    with open("external.json", encoding="utf-8") as file:
        External = load(file)
        for extra in External:
            Extras.append({
                "Title": extra["title"],
                "Description": extra["description"],
                "Created": extra["created"],
                "Status": extra["status"],
                "Slug": extra["url"],
                "External": True,
            })
    SortHelper = lambda e: dt.strptime(e["Created"], "%Y %b %d")
    return sorted(Extras, key=SortHelper)

def Generate():
    extras = ""
    ExtrasApiJson = []
    EXTRAS = GetExtras()
    for extra in reversed(EXTRAS):
        date = dt.strptime(extra["Created"], "%Y %b %d")
        ExtraHTML = f"""<tr>
    <th><a href="{extra["Slug"]}">{extra["Title"]}</a></th>
    <td>{extra["Description"]}</td>
    <td><time datetime="{date.strftime("%Y-%m-%d")}T00:00:00Z">{date.strftime("%Y %b %d")}</time></td>
    <td>{(extra["Status"] if extra["Status"] is not None else "N/A")}</td>
    <td>{("Yes" if extra["External"] else "No")}</td>
</tr>"""
        extras = extras + ExtraHTML
    for extra in EXTRAS:
        date = dt.strptime(extra["Created"], "%Y %b %d")
        ExtrasApiJson.append({
            "name": extra["Title"],
            "desc": extra["Description"],
            "fileName": extra["Slug"],
            "status": extra["Status"],
            "date": date.strftime("%m/%d/%y"),
            "isExternal": extra["External"]
        });
    with open("api.json", "x", encoding="utf-8") as file:
        dump(ExtrasApiJson, file)
    with open("index.htm", "x", encoding="utf-8") as file:
        CSS = """
html, body { color: #fff; background-color: #333 }
thead tr { background-color: #444; border-bottom: #fff solid 1px }
tr:nth-child(even) { background-color: #444 }
tr { padding: 5px }
tr th, tr td { padding: 3px }
:any-link { color: cyan }
:any-link:visited { color: #5cc }
:any-link:active { color: #f00 }
"""
        file.write(f"""<!DOCTYPE html>
<html lang="en-us" prefix="og: https://ogp.me/ns#">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-wdith, initial-scale=1.0" />
    <title>Extras</title>
    <meta property="og:title" content="Extras" />
    <meta property="og:url" content="https://steve0greatness.github.io/extras" />
    <style>{CSS}</style>
</head>

<body>
    <a href="https://steve0greatness.github.io">&laquo; Return to Site</a>
    <h1>Extras</h1>
    <p>This is a page for stuff that doesn't fit on the main site.</p>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Status</th>
                <th>External?</th>
            </tr>
        </thead>
        <tbody>
            {extras}
        </tbody>
    </table>
</body>

</html>""")

if __name__ == "__main__":
    Generate()
