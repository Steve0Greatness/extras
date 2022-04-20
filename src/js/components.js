const header = document.querySelector("header#header");

var navigation = document.createElement("nav"),
    navigation_pages = [
        {
            path: "/",
            text: "Home"
        },
        {
            path: "/blog",
            text: "Blog"
        },
        {
            path: "/alts",
            text: "Alts"
        },
        {
            path: "/extras",
            text: "Extras"
        }
    ];
for (let nav of navigation_pages) {
    let page = document.createElement("a");
    page.innerText = nav.text;
    page.href = nav.path;
    page.classList.add("button");
    navigation.appendChild(page)
}
navigation.classList.add("nav");
let switch_theme_button = document.createElement("button");
switch_theme_button.id = "switch";
switch_theme_button.innerText = "Theme Switch"
navigation.appendChild(switch_theme_button)

var header_content = `<h1 style="margin: 0px;">
        <img src="/src/normal.png" alt='S0G' width="32" height="32" id="logo">
        Hey there<span style="font-style: italic;">!</span>
    </h1>
    ${navigation.outerHTML}`;
header.innerHTML = header_content;