Here is the template for these pages. do with them as you will
```html
<html id="page">
 
<body>
<header id="header"></header>
  <!--about it-->
  <div class="altRating"><!--how dead is it--></div>
  <div id="index"> 
  <script src="../src/script.js"></script>
  <script>getPages('https://api.github.com/repos/Steve0Greatness/Steve0Greatness.github.io/git/trees/d5b34f6c6a50a52e8cd11282e3497ae6709a9523').then((pages) => {
  pages.map((pui) => pui.path.slice(0, -5))
    .forEach((pui) => {
      var page
      page = pui.replace(/-/g, ' ');
      if (pui != 'index') document.getElementById('index').innerHTML += '<div><a href="../Alts/' + pui + '.html" class="indexed">' + page + '</a></div>';
    })
});</script>
</body>
 
</html>
```