fetch('./blog.json')
	.then(response => response.json())
	.then(data => {
		let hash = window.location.search
		console.log(hash)
		let names = ["Why-inspect-element-is-a-useful-tool", "How-To-make-mockups", "How-to-copy-and-paste-on-mobile", "dividing-by-0", "What-about-the-second-site?", "Changing_the_Dark-mode"]
		let content = document.getElementById('content')
		for (let i = 0; i < names.length; i++) {
			let x = data[names[i]]
			var ind = document.getElementById('index')
			console.log(i, names[i], x)
			ind.innerHTML = ind.innerHTML + `<a href="?${names[i]}">${names[i]}</a> <span style="padding-left: 15px;">${x["pD"]}</span> <br>`
		}
		if (hash != null || hash != "") {
			if (names.indexOf(hash.slice(1)) != -1) {
				content.innerHTML = data[hash.slice(1)]["pC"]
				ind.innerHTML = ind.innerHTML + "<a href='?'>- back</a>"
			}
		}
	});


if (localStorage.getItem('theme') == null || localStorage.getItem('theme') == '') {
	localStorage.setItem('theme', 'n')
	document.getElementById('page').className = 'n'
}
var pageUrl = window.location.origin