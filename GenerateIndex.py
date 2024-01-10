from json import loads

api: list

with open("api.json") as file:
    api = loads(file.read())

HTMLList = ""
    
for item in api:
    HTMLList += f"""<tr><th><a href="{item["fileName"]}">{item["name"]}</a></th><td>{item["desc"]}</td><td>{item["status"] if item["status"] != None else "N/A"}</td><td>{item["date"]}</td><td>{ "Yes" if item["isExternal"] else "No" }</td></tr>"""

with open("index.html", "w") as file:
    HTML = f"""
    <!doctype html>
    <html>
    <body>
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
    </html>
    """
    file.write(HTML)