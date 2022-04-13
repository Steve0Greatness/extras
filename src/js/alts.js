var search = location.search.slice(1)
function start() {
	fetch('alts.json')
		.then(res => res.json())
		.then(data => {
			var name = Object.keys(data).sort()
			if (document.getElementById("sortBy").value == "zA") {
				name.reverse()
			}
			let ind = document.getElementById("index")
			let logo = document.getElementById("logo")
			let link = document.getElementById("link")
			if (search != ''|null) {
				ind.innerHTML = `<tr><a href="?">&lt;&lt;index</a></tr>`
				sdata = data[search]

				//data
				document.getElementById("cc").innerHTML = sdata.desc
				document.getElementById("altRating").innerHTML = sdata.rate

				//link
				link.href = `https://scratch.mit.edu/users/${search}`
				link.innerHTML = "view on <img src='https://scratch.mit.edu/favicon.ico' width='16' style='margin-bottom: -2px;'>"

				//logo
				logo.src = `//cdn2.scratch.mit.edu/get_image/user/${sdata.accountId}_32x32.png`
				logo.alt = search
			} else {
				ind.innerHTML = ""
			}
			name.forEach((n) => {
				ind.innerHTML += `<tr><td><a href="?${n}">${n}</a></td> <td>${data[n].rate}</td></tr>`
			})
		})
}
start()