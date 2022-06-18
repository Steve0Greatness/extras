window.onload = async function () {
	var HTML = document.documentElement,
		theme = 
			localStorage.getItem("theme") ||
			(
				(
					"matchMedia" in window &&
					window.matchMedia("(prefers-color-scheme: light)").matches
				)
				? "light" : "normal"
			),
		THEMES = [
			"normal",
			"light"
		],
		light_switch = document.querySelector("#switch");

	function set_theme(new_theme) {
		theme = new_theme;
		HTML.className = new_theme;
		localStorage.setItem("theme", new_theme);
	}

	light_switch.addEventListener(
		"click",
		function next_theme() {
			let new_theme = THEMES.indexOf(theme) + 1;
			if (new_theme >= THEMES.length)
				new_theme = 0;
			set_theme(THEMES[new_theme])
		}
	)

	set_theme(theme)
}