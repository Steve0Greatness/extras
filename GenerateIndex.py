from json import loads

api: list

with open("api.json") as file:
    api = loads(file.read())

HTMLList = ""
    
for item in api:
    HTMLList += f"""<tr><th><a href="{item["fileName"]}">{item["name"]}</a></th><td>{item["desc"]}</td><td>{item["status"] if item["status"] != None else "N/A"}</td><td>{item["date"]}</td><td>{ "Yes" if item["isExternal"] else "No" }</td></tr>"""

with open("index.html", "w", encoding="utf-8") as file:
    HTML = f"""
<!DOCTYPE html>
<html lang="en-us" prefix="og: https://ogp.me/ns#">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Extras Archive</title>
    <meta property="og:title" content="Extras Archive" />
    <meta property="og:url" content="https://steve0greatness.github.io/extras/" />
    <style>
        html, body {{ color: #fff; background-color: #333 }}
        thead tr {{ background-color: #444; border-bottom: #fff solid 1px }}
        tr:nth-child(even) {{ background-color: #444 }}
        tr {{ padding: 5px; }}
        tr th, tr td {{ padding: 3px }}
        :any-link {{ color: cyan }}
        :visited {{ color: #5cc }}
        :any-link:active {{ color: #f00 }}
    </style>
</head>

<body>
    <a href="https://steve0greatness.github.io/">&laquo; Return to Site</a>
    <h1>Extras Archive</h1>
    <p>This is a legacy site, kept up for the sake of not breaking links.</p>
    <table>
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date</th>
                <th>Is External</th>
            </tr>
        </thead>
        <tbody>
            {HTMLList}
        </tbody>
    </table>
</body>

</html>"""
    file.write(HTML)