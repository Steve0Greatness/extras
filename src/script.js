if (localStorage.getItem('theme') == 'null' || localStorage.getItem('theme') == '') {
  localStorage.setItem('theme', 'n')
  document.getElementById('page').className = 'n'
}

document.getElementById('header').innerHTML = `<h1 style="margin: 0px;">
  <img src="https://cdn2.scratch.mit.edu/get_image/user/61820378_32x32.png"/> 
  Hey there<span style="font-style: italic;">!</span></h1>
  <div class="nav">
      <a target="_parent" href="../">
          <button type="button">Home</button>
      </a>
      <a target="_parent" href="../src/blog.html">
          <button type="button">Blog</button>
      </a>
      <a target="_parent" href="../alts">
          <button type="button">My Alts</button>
      </a>
      <a target="_parent" href="../extra_projects">
          <button type="button">Addition personal projects</button>
      </a>
      <button type="button" onclick="lightSwitch()">Light Switch</button>
  </div>`;
var url = window.location.href;
if (url.includes('https://blog.')) {
  url = "https://Steve0Greatnessgithubio.stevesgreatness.repl.co"
} else {
  url = ".."
}

var pageName = window.location.pathname.replace('/', ' ') + 'Steve0Greatness'
pageName = pageName.replace('/', '--').replace('.html', '')
console.log(pageName)
document.getElementsByTagName('head')[0].innerHTML += `
  <title id="title">${pageName}</title>
	<link rel="shortcut icon" href="https://cdn2.scratch.mit.edu/get_image/user/61820378_16x16.png">
	<link rel="stylesheet" type="text/css" href="${url}/src/stylesheet.css">`;

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
  if (localStorage.getItem('theme') == 'null') {
    localStorage.setItem('theme', 'n')
    document.getElementById('page') = 'n'
  }
  var theme = localStorage.getItem('theme')
  var html = document.getElementById('page')
  if (theme != 'd') {
    html.className = 'd'
    localStorage.setItem('theme', 'd')
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

this.addEventListener('keypress', event => {
  if (event.keyCode == 13) {
    alert('hi.')
  }
})