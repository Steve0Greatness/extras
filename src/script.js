document.getElementById('header').innerHTML = `<h1 style="margin: 0px;">
  <img src="https://cdn2.scratch.mit.edu/get_image/user/61820378_32x32.png"/> 
  Hey there<span style="font-style: italic;">!</span></h1>
  <div class="nav">
      <a target="_parent" href="../">
          <button type="button">Home</button>
      </a>
      <a target="_parent" href="../Blog">
          <button type="button">Blog</button>
      </a>
      <a target="_parent" href="../alts">
          <button type="button">My Alts</button>
      </a>
      <a target="_parent" href="../extra_projects">
          <button type="button">Addition personal projects</button>
      </a>
  </div>`;
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
var pageName = window.location.pathname.replace('/', ' ') + 'Steve0Greatness'
pageName = pageName.replace('/', '--').replace('.html', '')
console.log(pageName)
document.getElementsByTagName('head')[0].innerHTML += `
  <title>${pageName}</title>
	<link rel="shortcut icon" href="../src/favicon.ico">
	<link rel="stylesheet" type="text/css" href="../src/stylesheet.css">`