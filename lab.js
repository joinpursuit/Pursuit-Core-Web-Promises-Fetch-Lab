document.addEventListener("DOMContentLoaded", () => {
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_ten").then(res => {
        if(!res.ok){
            throw Error(res.statusText)
        }
        return res.json()
    }).then(jokes => {
        let ul = document.createElement("ul")
        jokes.forEach(joke => {
            let li = document.createElement("li")
            li.innerText = joke.setup;
            // let punchline = document.createElement("li")
            // punchline.innerText = joke.punchline
            ul.appendChild(li)
        })
        document.body.appendChild(ul)
    }).catch(err => console.log(err))
})

// const loadJokes = () => {
//     fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_ten").then(res => {
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         return res.json()
//     }).then(jokes => {
//         let ul = document.createElement("ul")
//         jokes.forEach(joke => {
//             let li = document.createElement("li")
//             li.innerText = joke.setup
//             ul.appendChild(li)
//         })
//         document.body.appendChild(ul)
//     }).catch(err => console.log(err))
// }

const createCardFromJoke = (joke) => {
    let newCard = document.createElement("div")
    jokes.forEach(joke => {
        let punchline = document.createElement("li")
        punchline.innerText = joke.punchline
        newCard.appendChild(punchline)
    })
    document.body.appendChild(newCard)
}
// let li = document.querySelector("li")
// li.addEventListener("click", punchline)
// const punchline = () => {
//     li.innerText = joke.punchline
// }