document.addEventListener("DOMContentLoaded", () => {
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/jokes/ten").then(res => {
        return res.json();
    }).then(jokes => {
        let ul = document.querySelector("#parent");
        jokes.forEach(joke => {
            let setup = document.createElement("li");
            setup.innerText = joke.setup;
            setup.className = "setup";
            let punchline = document.createElement("li");
            punchline.innerText = joke.punchline;
            punchline.style.display = "none";
            punchline.className = "punchline";

            let nestedUl = document.createElement("ul");
            nestedUl.appendChild(punchline);
            setup.appendChild(nestedUl);
            ul.appendChild(setup);
        })
        document.body.appendChild(ul);
    })

    let ul = document.querySelector("#parent");
    ul.addEventListener("click", (e) => {
        let punchline = e.target.children[0].firstChild;
        if(punchline.style.display === "none") {
            punchline.style.display = "block";
        } else {
            punchline.style.display = "none";
        }
    })
})



