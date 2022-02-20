const newpost = { link: "?newest&newpost", name: "FizzBuzz", working: false, type: "html" },
	search = location.search,
	ind = document.getElementById('indexBody'),
	content = document.getElementById('content'),
	select = document.getElementById("select")
function start() {
	ind.innerHTML = ""
	fetch('blog.json')
		.then(res => res.json())
		.then(data => {
			let names = Object.keys(data)
			for (let i = 0; i < names.length; i++) {
				let x = data[names[i]]
				let name = names[i]
				if (select.value == "new") {
					name = names[names.length - (1 + i)]
					x = data[name]
				}
				ind.innerHTML = ind.innerHTML + `<tr> <td><a href="?${name}">${x.name}</a></td> <td><span style="padding-left: 15px;">${x.pD}</span></td> </tr>`
			}
			if (search != null | "" | newpost.link) {
				if (names.includes(search.slice(1))) {
					let bP = data[search.slice(1)]
					ind.innerHTML = "<tr> <td><a href='./'>- back</a></td> </tr>" + ind.innerHTML
					content.innerHTML = `<h1>${bP.name}</h1><h2>${bP.pD}</h2><article id="article">${bP.pC}</article>`
					if (bP.fT === "md") {
						content.innerHTML = `<h1>${bP.name}</h1><h2>${bP.pD}</h2><article id="article">${marked.parse(bP.pC)}</article>`
					}
					if (bP.fT === "txt") {
						content.innerHTML = `<h1>${bP.name}</h1><h2>${bP.pD}</h2><article id="article" style="white-space:pre-wrap">${bP.pC}</article>`
					}
				}
			}
		})
}

if (location.origin != "https://steve0greatness.github.io" && newpost.working) {
	ind.innerHTML += "<tr> <td><a href=\"" + newpost.link + "\">" + newpost.name + "</td> <td><span style=\"padding-left: 15px;\">Not Released</span></td> </tr>"
}

window.onload = () => { 
	fetch('blog.json')
		.then(res => res.json())
		.then(data => {
			let names = Object.keys(data)
			for (let i = 0; i < names.length; i++) {
				let x = data[names[i]]
				let name = names[i]
				if (document.getElementById("select").value == "new") {
					name = names[names.length - (1 + i)]
					x = data[name]
				}
				ind.innerHTML += `<tr> <td><a href="?${name}">${x.name}</a></td> <td><span style="padding-left: 15px;">${x.pD}</span></td> </tr>`
			}
			if (search != null | "" | newpost.link) {
				if (names.indexOf(search.slice(1)) != -1) {
					let bP = data[search.slice(1)]
					ind.innerHTML = "<tr> <td><a href='./'>- back</a></td> </tr>" + ind.innerHTML
					content.innerHTML = `<h1>${bP.name}</h1><h2>${bP.pD}</h2><article id="article">${bP.pC}</article>`
					if (bP.fT === "md") {
						content.innerHTML = `<h1>${bP.name}</h1><h2>${bP.pD}</h2><article id="article">${marked.parse(bP.pC)}</article>`
					}

					if (bP.fT === "txt") {
						content.innerHTML = `<h1>${bP.name}</h1><h2>${bP.pD}</h2><article id="article" style="white-space:pre-wrap">${bP.pC}</article>`
					}
				}
			}
		})
}
//style="white-space:pre-wrap"
document.getElementById("select").addEventListener("change", () => { start() })

if (search == newpost.link) {
	var lastModified
	fetch("newpost.html")
		.then(res => res.text())
		.then(data => {
			let name = newpost.name
			if (name === ""|null|undefined) {
				name = "No Current Name"
			}
			content.innerHTML = `<h1>${name}</h1><h2>Unreleased</h2><div>${data}</div>`
			if (newpost.type == "md") {
				content.innerHTML = `<h1>${name}</h1><h2>Unreleased</h2><div>${marked.parse(data)}</div>`
			}
			if (newpost.type == "txt") {
				console.log("type is text")
				content.innerHTML = `<h1>${name}</h1><h2>Unreleased</h2><div style="white-space:pre-wrap">${data}</div>`
			}
		})
}