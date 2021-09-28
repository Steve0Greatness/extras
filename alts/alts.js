fetch('alts.json')
	.then(response => response.json())
	.then(data => {
		var name = Object.keys(data)
		var search = location.search;
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
			ind = document.getElementById('index')
			l = name.length
			ind.innerHTML = `<a href="?">🠔 index</a><br>`
			for (let i = 0; i < l; i++) {
				ind.innerHTML = ind.innerHTML + `<a href="?${name[i]}">${name[i]}</a><br>`
			}
			logo.src = `//cdn2.scratch.mit.edu/get_image/user/${data[search]["accountId"]}_32x32.png`
			logo.alt = search
		}
	});