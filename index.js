document.addEventListener("DOMContentLoaded", () => {
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_ten").then(res => {
        if (!res.ok) {
            throw Error(res.statusText + " was the error")
        }
        return res.json()
    }).then(res => {
        let ul = document.createElement("ul")
        res.forEach((joke) => {
            let li = document.createElement("li")
            let p = document.createElement("p")
            li.addEventListener("click", () => {
                p.innerText = joke.punchline
                li.appendChild(p)
                li.addEventListener("dblclick", () => {
                    p.innerText = ""
                })
            })
            li.innerText = joke.setup
            ul.appendChild(li)
            let button = document.createElement("button")
            button.innerHTML = "refresh"
            
        })
        document.body.appendChild(ul)
    }).catch(err => {
        debugger
    })
})