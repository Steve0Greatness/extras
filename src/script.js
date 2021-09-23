/*var url = window.location.origin;
if (url.includes('https://blog.')) {
	url = "https://Steve0Greatnessgithubio.stevesgreatness.repl.co"
} else {
	url = ""
}*/
if (localStorage.getItem('theme') == null || localStorage.getItem('theme') == '' || localStorage.getItem('theme') == 'd') {
	localStorage.setItem('theme', 'n')
	document.getElementById('page').className = 'n'
}

document.getElementById('header').innerHTML = `<h1 style="margin: 0px;">
  <img src="https://cdn2.scratch.mit.edu/get_image/user/61820378_32x32.png" alt='S0G' width="32" height="32" id="logo"> 
  Hey there<span style="font-style: italic;">!</span></h1>
  <div class="nav">
      <a target="_parent" href="/">
          <button type="button">Home</button>
      </a>
      <a target="_parent" href="/blog">
          <button type="button">Blog</button>
      </a>
      <a target="_parent" href="/alts">
          <button type="button">Alts</button>
      </a>
      <a target="_parent" href="/extras">
          <button type="button">Extras</button>
      </a>
      <button type="button" onclick="lightSwitch()">Light Switch</button>
  </div>`;

var pageName = window.location.pathname.replace('/', ' ') + 'Steve0Greatness'
pageName = pageName.replace('/', '--').replace('.html', '')
console.log(pageName)
document.getElementsByTagName('head')[0].innerHTML += `
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Site of Steve0Greatness">
  <title id="title">${pageName}</title>
	<link rel="shortcut icon" href="https://cdn2.scratch.mit.edu/get_image/user/61820378_16x16.png">
	<link rel="stylesheet" type="text/css" href="/src/stylesheet.css">`;

function getPages(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((resp) => resp.json())
			.then(({ tree }) => {
				const pages = tree.filter((file) => file.path.endsWith('.html'));
				resolve(pages);
			})
			.catch(reject)
	});
}

function lightSwitch() {
	if (localStorage.getItem('theme') == null) {
		localStorage.setItem('theme', 'n')
		document.getElementById('page') = 'n'
	}
	var theme = localStorage.getItem('theme')
	var html = document.getElementById('page')
	if (theme != 'l') {
		html.className = 'l'
		localStorage.setItem('theme', 'l')
		console.log()
	} else {
		html.className = 'n'
		localStorage.setItem('theme', 'n')
	}
	theme = localStorage.getItem('theme')
}

var theme = localStorage.getItem('theme')
var html = document.getElementById('page')
html.className = theme
console.log(html, theme)
if (window.location.pathname == "/extra_projects/Am-I-Banned.html") {

}
document.cookie = "SameSite=Strict; promo_shown=1; Max-Age=2600000; Secure"

function showThenHideNote(num) {
	var n = document.getElementById('note' + num)
	n.style = ""
	setTimeout(function() {n.style = "animation: fadeOut 3s;"}, 3000)
	setTimeout(function() {n.style = "opacity: 0;"}, 6000)
}