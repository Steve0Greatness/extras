const newpost = "?newest&newpost"
const search = location.search
const ind = document.getElementById('index')
const content = document.getElementById('content')
fetch('blog.json')
	.then(res => res.json())
	.then(data => {
		let names = Object.keys(data)
		for (let i = 0; i < names.length; i++) {
			let x = data[names[i]]
			console.log(i, names[i], x)
			ind.innerHTML = ind.innerHTML + `<tr><td><a href="?${names[i]}">${x["name"]}</a></td> <td><span style="padding-left: 15px;">${x["pD"]}</span></td> </tr>`
		}
		if (search != null|""|newpost) {
			if (names.indexOf(search.slice(1)) != -1) {
				content.innerHTML = `<h1>${data[search.slice(1)]["name"]}</h1><h2>${data[search.slice(1)]["pD"]}</h2><article id="article">${data[search.slice(1)]["pC"]}</article>`
				ind.innerHTML = ind.innerHTML + "<tr><a href='?'>- back</a></tr>"
			}
		}
	});

if (search == newpost) {
	var lastModified
	fetch("newpost.html")
		.then(res => {
			return res.text()
		})
		.then(data => {
			content.innerHTML = `<h1>The Newest Post</h1><h2>this is where the date would go.</h2><div style="border: solid black 1px;">${data}</div>`
		})
}

if (localStorage.getItem('theme') == null || localStorage.getItem('theme') == '') {
	localStorage.setItem('theme', 'n')
	document.getElementById('page').className = 'n'
}
var pageUrl = location.origin

document.getElementById("newpostlink").href = newpost