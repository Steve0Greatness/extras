const ind = document.getElementById("indexBody"),
    select = document.querySelector("select");
function start() {
    fetch("/extras/api.json")
        .then(res => res.json())
        .then(res => {
            ind.innerHTML = "";
            for (let i = 0; i < res.length; i++) {
                let isExternal = "",
                    target = "",
                    current = res[res.length - (i + 1)];

                if (select.value == "old")
                    current = res[i];

                if (current.isExternal) { 
                    isExternal = "External link";
                    target = "_new";
                }
                ind.innerHTML += `<tr> <td><a target="${target}" href="${current.fileName}">${current.name}</a></td> <td>${current.desc}</td><td>${isExternal}</td> <td>${current.date}</td> </tr>`
            }
        })
}
start()
select.addEventListener("change", start)