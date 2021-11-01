var preferedThemeCheck = window.matchMedia("(prefers-color-scheme: light)")
var preferedTheme
if (preferedThemeCheck.matches) { preferedTheme = "l" } else { preferedTheme = "n" }
console.log(preferedTheme + ", is the sys. theme")
const themes = ["n", "l"]
var mainSiteBu = ""
if (location.origin.includes("repl.co")) { mainSiteBu = `<a target="_parent" href="https://Steve0Greatness.github.io${location.pathname + location.search}"><button type="button">Open Github version</button></a>` }
if (!(themes.includes(localStorage.getItem("theme")))) { setTheme(preferedTheme) }

document.getElementById('header').innerHTML = `<h1 style="margin: 0px;"><img src="//uploads.scratch.mit.edu/users/avatars/61820378.png" alt='S0G' width="32" height="32" id="logo"> Hey there<span style="font-style: italic;">!</span></h1><div class="nav"><a target="_parent" href="/"><button type="button">Home</button></a><a target="_parent" href="/blog"><button type="button">Blog</button></a><a target="_parent" href="/alts"><button type="button">Alts</button></a><a target="_parent" href="/extras"><button type="button">Extras</button></a>${mainSiteBu}<button type="button" onclick="lightSwitch()">Light Switch</button></div>`;

var pageName = location.pathname.split("/")
if (pageName[pageName.length - 1] == "") { if (pageName[pageName.length - 2] == "") { pageName = "Steve0Greatness" } else { pageName = pageName[pageName.length - 2].toUpperCase() + " | Steve0Greatness" } } else { pageName = pageName[pageName.length - 1].toUpperCase() + " | Steve0Greatness" }
console.log(pageName)
document.getElementsByTagName('head')[0].innerHTML += `
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Site of Steve0Greatness">
  <title id="title">${pageName}</title>
	<link rel="icon" href="/favicon.ico">
	<link rel="stylesheet" type="text/css" href="/src/stylesheet.css">`;

var theme = localStorage.getItem('theme')
function lightSwitch() {
	if (localStorage.getItem('theme') == null) { setTheme(preferedTheme) }
	var html = document.getElementById('page')
	if (theme != 'l') { setTheme("l") } else { setTheme("n") }
	theme = localStorage.getItem("theme")
}

var html = document.getElementsByTagName("html")[0]
html.className = theme
function showThenHideNote(num) {
	var n = document.getElementById('note' + num)
	n.style = ""
	setTimeout(function () { n.style = "animation: fadeOut 3s;" }, 3000)
	setTimeout(function () { n.style = "opacity: 0;" }, 6000)
}
function setTheme(name) {
	localStorage.setItem('theme', name)
	document.getElementsByTagName("html")[0].className = name
}