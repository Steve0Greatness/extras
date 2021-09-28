fetch('blog.json')
	.then(response => response.json())
	.then(data => {
		var ind = document.getElementById('index')
		let hash = location.search
		console.log(hash)
		let names = Object.keys(data)
		let content = document.getElementById('content')
		for (let i = 0; i < names.length; i++) {
			let x = data[names[i]]
			console.log(i, names[i], x)
			ind.innerHTML = ind.innerHTML + `<tr><td><a href="?${names[i]}">${x["name"]}</a></td> <td><span style="padding-left: 15px;">${x["pD"]}</span></td> </tr>`
		}
		if (hash != null || hash != "") {
			if (names.indexOf(hash.slice(1)) != -1) {
				content.innerHTML = `<h1>${hash.slice(1)}</h1><h2>${data[hash.slice(1)]["pD"]}</h2><article id="article">${data[hash.slice(1)]["pC"]}</article>`
				ind.innerHTML = ind.innerHTML + "<tr><a href='?'>- back</a></tr>"
			}
		}
	});


if (localStorage.getItem('theme') == null || localStorage.getItem('theme') == '') {
	localStorage.setItem('theme', 'n')
	document.getElementById('page').className = 'n'
}
var pageUrl = window.location.origin