document.addEventListener("DOMContentLoaded", () => {

    const getJokes = () => {
        fetch("https://official-joke-api.appspot.com/random_ten").then(res => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            return res.json()
        }).then(res => {

            res.forEach(joke => {
                let ul = document.querySelector("#list");
                // let card = createCardFromJoke(joke)
                let li = document.createElement("li")
                li.innerText = joke.setup
                let p = document.createElement("p")
                p.innerText = joke.punchline

                ul.appendChild(li)
                li.appendChild(p)
            })
        })
    }
    // createCardFromJoke = (joke) => {
    //     let ul = document.querySelector("#list");
    //     let newCard = document.createElement("div")
    //     newCard.className = "card"
    //     newCard.style = "width:300px"

    //     let jokeHeader = document.createElement("h4")
    //     jokeHeader.innerText = `${joke.setup}`
    //     newCard.appendChild(jokeHeader)
    //     ul.appendChild(newCard)
    // }
    getJokes()
})