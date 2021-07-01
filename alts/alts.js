getPages('https://api.github.com/repos/Steve0Greatness/Steve0Greatness.github.io/git/trees/d5b34f6c6a50a52e8cd11282e3497ae6709a9523').then((pages) => {
  pages.map((pui) => pui.path.slice(0, -5))
    .forEach((pui) => {
      var page
      page = pui.replace(/-/g, ' ');
      if (pui != 'index') document.getElementById('index').innerHTML += '<div><a href="./' + pui + '.html" class="indexed">' + page + '</a></div>';
    })
});