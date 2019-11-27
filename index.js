document.addEventListener("DOMContentLoaded", () => {
    fetch("https://official-joke-api.appspot.com/random_ten").then(res => {
        if (!res.ok) {
            throw Error(res.statusText + " was the error")
        }
        return res.json()
    }).then(res => {
        let ul = document.createElement("ul")
        res.forEach((joke) => {
            let li = document.createElement("li")
            li.addEventListener("click", () => {
                let p = document.createElement("p")
                p.innerText = joke.punchline
                li.appendChild(p)
            })
            li.innerText = joke.setup
            ul.appendChild(li)
        })
        document.body.appendChild(ul)
    })
})