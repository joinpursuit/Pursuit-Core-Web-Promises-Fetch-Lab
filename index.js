document.addEventListener("DOMContentLoaded", () => {
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_ten").then(res => {
        if (!res.ok) {
            throw Error(res.statusText + " was the error")
        }
        return res.json()
    }).then(res => {
        let ul = document.querySelector("#jokes")
        res.forEach((joke) => {
            let li = document.createElement("li")
            li.innerText = joke.setup;
            let p = document.createElement("p");
            p.innerText = joke.punchline;
            p.style.display = "none";
            li.appendChild(p);  
            ul.appendChild(li);
        })

        let button = document.createElement("button")
        button.innerHTML = "REFRESH"
        button.addEventListener("click", ()=> {
            window.location.reload();
        })

        let select = document.querySelector("#selector")

        document.body.appendChild(ul)
        document.body.appendChild(button);
    }).catch(err => {
        debugger
    })

    let ul = document.querySelector("#jokes");
    ul.addEventListener("click", (e) => {
        let punchline = e.target.querySelector("p");
        if(punchline.style.display === "none"){
            punchline.style.display = "block";
        } else {
            punchline.style.display = "none";
        }
    })

})

