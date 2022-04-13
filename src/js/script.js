var preferedThemeCheck = window.matchMedia("(prefers-color-scheme: light)"),
	preferedTheme;
if (preferedThemeCheck.matches) { preferedTheme = "light" } else { preferedTheme = "normal" }
const themes = ["normal", "light"]
if (!(themes.includes(localStorage.getItem("theme")))) { setTheme(preferedTheme) }

var theme = localStorage.getItem('theme')
function lightSwitch() {
	if (localStorage.getItem('theme') == null) { setTheme(preferedTheme) }
	if (theme != 'light')
		setTheme("light");
	else
		setTheme("normal");
	theme = localStorage.getItem("theme")
}

var html = document.getElementsByTagName("html")[0];
html.className = theme;

function showThenHideNote(num) {
	var n = document.getElementById('note' + num);
	n.style = "";
	setTimeout(() => { n.style = "animation: fadeOut 3s;" }, 3000)
	setTimeout(() => { n.style = "opacity: 0;" }, 6000)
}

function setTheme(name) {
	localStorage.setItem('theme', name)
	document.getElementsByTagName("html")[0].className = name
}

window.onload = function() {
	var switch_button = document.getElementById("switch");
	switch_button.addEventListener("click", lightSwitch);
}