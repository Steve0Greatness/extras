var search = location.search
fetch('alts.json')
	.then(response => response.json())
	.then(data => {
		var name = Object.keys(data)
		let ind = ""
		let l
		let logo = document.getElementById("logo")
		if (search == '' || search == null) {
			ind = document.getElementById('index')
			l = name.length
			for (let i = 0; i < l; i++) {
				ind.innerHTML = ind.innerHTML + `<tr><td><a href="?${name[i]}">${name[i]}</a></td> <td>${data[name[i]]["rate"]}</td></tr>`
			}
		} else {
			search = search.slice(1)
			console.log(data[search])
			document.getElementById("cc").innerHTML = data[search]["desc"]
			document.getElementById('altRating').innerHTML = data[search]["rate"]
			document.getElementById("link").href = `https://scratch.mit.edu/users/${search}`
			document.getElementById("link").innerHTML = "view on <img src='https://scratch.mit.edu/favicon.ico' width='16' style='margin-bottom: -2px;'>"
			ind = document.getElementById('index')
			l = name.length
			ind.innerHTML = `<tr><a href="?">🠔 index</a></tr>`
			for (let i = 0; i < l; i++) {
				ind.innerHTML = ind.innerHTML + `<tr><td><a href="?${name[i]}">${name[i]}</a></td> <td>${data[name[i]]["rate"]}</td></tr>`
			}
			logo.src = `//cdn2.scratch.mit.edu/get_image/user/${data[search]["accountId"]}_32x32.png`
			logo.alt = search
		}
	});