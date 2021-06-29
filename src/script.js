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
  </div>`;
function getPages() {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/repos/Steve0Greatness/Steve0Greatness.github.io/git/trees/4af8a183821f66ecf76346f8cfe71872262d12ac`)
      .then((resp) => resp.json())
      .then(({ tree }) => {
        const pages = tree.filter((file) => file.path.endsWith('.html'));
        resolve(pages);
      })
      .catch(reject)
  });
}
getPages().then((pages) => {
  pages.map((pui) => pui.path.slice(0, -5))
    .forEach((pui) => {
      var page
      page = pui.replace(/-/g, ' ');
      if (pui != 'index') document.getElementById('index').innerHTML += '<div><a href="/Alts/' + pui + '.html" class="indexed">' + page + '</a></div>';
    })
});
var pageName = window.location.pathname.replace('/', ' ') + 'Steve0Greatness'
pageName = pageName.replace('/', '--').replace('.html', '')
console.log(pageName)
document.getElementsByTagName('head')[0].innerHTML += `
  <title>${pageName}</title>
	<link rel="shortcut icon" href="../src/favicon.ico">
	<link rel="stylesheet" type="text/css" href="../src/stylesheet.css">`