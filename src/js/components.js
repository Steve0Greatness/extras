const header = document.querySelector("header#header"),
    header_content = `<h1 style="margin: 0px;">
        <img src="//uploads.scratch.mit.edu/users/avatars/61820378.png" alt='S0G' width="32" height="32" id="logo">
        Hey there<span style="font-style: italic;">!</span>
    </h1>
    <nav class="nav">
        <a class="button" href="/">
            Home
        </a>
        <a class="button" href="/blog">
            Blog
        </a>
        <a class="button" href="/alts">
            Alts
        </a>
        <a class="button" href="/extras">
            Extras
        </a>
        <button id="switch">Theme Switch</button>
    </nav>`;
header.innerHTML = header_content;