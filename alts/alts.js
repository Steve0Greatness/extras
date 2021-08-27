fetch('./alts.json')
	.then(response => response.json())
	.then(data => {
		let name = ["Anonymouslysignedin", "Awesomecolors82", "fc-", "Foruninasnew2scratch", "ghadskjfjdfskl", "HatShirtPantsShoes", "ninjad-on-the-forums", "NotSteve0Greatness", "QWERTYamongus", "S0G", "Scratch_C0", "ScratchNewsWorldWide", "Steve-Ist-Gut", "Steve0Comics", "SteveDOTEdu", "Steves_Greatness", "test-account4newidea", "The-Best-Charry", "This_User"]
		let x = window.location.search;
		let ind
		let l
		if (x == '' || x == null) {
			ind = document.getElementById('index')
			l = name.length
			for (let i = 0; i < l; i++) {
				ind.innerHTML = ind.innerHTML + `<a href="?${name[i]}">${name[i]}</a><br>`
			}
		} else {
			x = x.slice(1)
			console.log(data[x])
			document.getElementById("cc").innerHTML = data[x]["desc"]
			document.getElementById('altRating').innerHTML = data[x]["rate"]
			ind = document.getElementById('index')
			l = name.length
			ind.innerHTML = `<a href="?">🠔 index</a><br>`
			for (let i = 0; i < l; i++) {
				ind.innerHTML = ind.innerHTML + `<a href="?${name[i]}">${name[i]}</a><br>`
			}
		}
	});